import { useState, useEffect, useCallback } from 'react';

interface StudySessionState {
  isActive: boolean;
  isPaused: boolean;
  timeRemaining: number;
  currentPhase: 'focus' | 'break';
  completedPomodoros: number;
}

const FOCUS_DURATION = 25 * 60; // 25 minutes in seconds
const BREAK_DURATION = 5 * 60; // 5 minutes in seconds
const LONG_BREAK_DURATION = 15 * 60; // 15 minutes in seconds
const POMODOROS_UNTIL_LONG_BREAK = 4;

export const useStudySession = () => {
  const [state, setState] = useState<StudySessionState>({
    isActive: false,
    isPaused: false,
    timeRemaining: FOCUS_DURATION,
    currentPhase: 'focus',
    completedPomodoros: 0,
  });

  const startSession = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isActive: true,
      isPaused: false,
    }));
  }, []);

  const pauseSession = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isPaused: true,
    }));
  }, []);

  const resumeSession = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isPaused: false,
    }));
  }, []);

  const resetSession = useCallback(() => {
    setState({
      isActive: false,
      isPaused: false,
      timeRemaining: FOCUS_DURATION,
      currentPhase: 'focus',
      completedPomodoros: 0,
    });
  }, []);

  const skipToNextPhase = useCallback(() => {
    setState((prev) => {
      const isLongBreak =
        prev.currentPhase === 'focus' &&
        (prev.completedPomodoros + 1) % POMODOROS_UNTIL_LONG_BREAK === 0;

      return {
        ...prev,
        timeRemaining:
          prev.currentPhase === 'focus'
            ? isLongBreak
              ? LONG_BREAK_DURATION
              : BREAK_DURATION
            : FOCUS_DURATION,
        currentPhase: prev.currentPhase === 'focus' ? 'break' : 'focus',
        completedPomodoros:
          prev.currentPhase === 'focus'
            ? prev.completedPomodoros + 1
            : prev.completedPomodoros,
      };
    });
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (state.isActive && !state.isPaused && state.timeRemaining > 0) {
      interval = setInterval(() => {
        setState((prev) => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }));
      }, 1000);
    } else if (state.timeRemaining === 0) {
      skipToNextPhase();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [state.isActive, state.isPaused, state.timeRemaining, skipToNextPhase]);

  return {
    ...state,
    startSession,
    pauseSession,
    resumeSession,
    resetSession,
    skipToNextPhase,
  };
}; 