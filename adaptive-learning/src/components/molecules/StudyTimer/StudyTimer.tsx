import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useStudySession } from '../../../hooks/useStudySession';
import { Button } from '../../atoms/Button';
import { Theme } from '@emotion/react';

const TimerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const TimerDisplay = styled(motion.div)`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[700]};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PresetTimes = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const PresetButton = styled(motion.button)<{ active?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border: 2px solid ${({ active, theme }) =>
    active ? theme.colors.primary[500] : theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ active, theme }) =>
    active ? theme.colors.primary[50] : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary[700] : theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

const ProgressRing = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const RingBackground = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.neutral[200]};
  stroke-width: 8;
`;

const RingProgress = styled(motion.circle)`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary[500]};
  stroke-width: 8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const RingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const TimerLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};

const presets = [
  { label: '25m', value: 25 * 60 },
  { label: '45m', value: 45 * 60 },
  { label: '60m', value: 60 * 60 },
];

export const StudyTimer: React.FC = () => {
  const {
    isActive,
    isPaused,
    timeRemaining,
    currentPhase,
    completedPomodoros,
    startSession,
    pauseSession,
    resumeSession,
    resetSession,
  } = useStudySession();

  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);

  const circumference = 2 * Math.PI * 90;
  const progress = ((25 * 60 - timeLeft) / (25 * 60)) * circumference;

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(presets[selectedPreset].value);
  }, [selectedPreset]);

  const selectPreset = useCallback((index: number) => {
    setSelectedPreset(index);
    setTimeLeft(presets[index].value);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play notification sound or show notification
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, timeLeft]);

  return (
    <TimerContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProgressRing>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <RingBackground cx="100" cy="100" r="90" />
          <RingProgress
            cx="100"
            cy="100"
            r="90"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        <RingText>
          <TimerDisplay>{formatTime(timeLeft)}</TimerDisplay>
          <TimerLabel>Study Time</TimerLabel>
        </RingText>
      </ProgressRing>

      <Controls>
        <Button
          variant="primary"
          onClick={toggleTimer}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onClick={resetTimer}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset
        </Button>
      </Controls>

      <PresetTimes>
        {presets.map((preset, index) => (
          <PresetButton
            key={preset.label}
            active={selectedPreset === index}
            onClick={() => selectPreset(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {preset.label}
          </PresetButton>
        ))}
      </PresetTimes>
    </TimerContainer>
  );
}; 