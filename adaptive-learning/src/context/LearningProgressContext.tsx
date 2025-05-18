import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Topic {
  id: string;
  name: string;
  description: string;
  masteryLevel: number;
  confidenceLevel: number;
  lastStudied: Date;
  timeSpent: number; // in minutes
}

interface LearningState {
  topics: Topic[];
  currentTopic: Topic | null;
  totalStudyTime: number;
  currentStreak: number;
}

type LearningAction =
  | { type: 'ADD_TOPIC'; payload: Topic }
  | { type: 'UPDATE_TOPIC_MASTERY'; payload: { topicId: string; level: number } }
  | { type: 'UPDATE_TOPIC_CONFIDENCE'; payload: { topicId: string; level: number } }
  | { type: 'SET_CURRENT_TOPIC'; payload: Topic }
  | { type: 'ADD_STUDY_TIME'; payload: number }
  | { type: 'UPDATE_STREAK' };

const initialState: LearningState = {
  topics: [],
  currentTopic: null,
  totalStudyTime: 0,
  currentStreak: 0,
};

const learningReducer = (state: LearningState, action: LearningAction): LearningState => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return {
        ...state,
        topics: [...state.topics, action.payload],
      };
    case 'UPDATE_TOPIC_MASTERY':
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.topicId
            ? { ...topic, masteryLevel: action.payload.level }
            : topic
        ),
      };
    case 'UPDATE_TOPIC_CONFIDENCE':
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === action.payload.topicId
            ? { ...topic, confidenceLevel: action.payload.level }
            : topic
        ),
      };
    case 'SET_CURRENT_TOPIC':
      return {
        ...state,
        currentTopic: action.payload,
      };
    case 'ADD_STUDY_TIME':
      return {
        ...state,
        totalStudyTime: state.totalStudyTime + action.payload,
      };
    case 'UPDATE_STREAK':
      return {
        ...state,
        currentStreak: state.currentStreak + 1,
      };
    default:
      return state;
  }
};

interface LearningContextType {
  topics: Topic[];
  currentTopic: Topic | null;
  totalStudyTime: number;
  currentStreak: number;
  addTopic: (topic: Topic) => void;
  updateTopicMastery: (topicId: string, level: number) => void;
  updateTopicConfidence: (topicId: string, level: number) => void;
  setCurrentTopic: (topic: Topic) => void;
  addStudyTime: (minutes: number) => void;
  updateStreak: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(learningReducer, initialState);

  const value: LearningContextType = {
    topics: state.topics,
    currentTopic: state.currentTopic,
    totalStudyTime: state.totalStudyTime,
    currentStreak: state.currentStreak,
    addTopic: (topic) => dispatch({ type: 'ADD_TOPIC', payload: topic }),
    updateTopicMastery: (topicId, level) => dispatch({ type: 'UPDATE_TOPIC_MASTERY', payload: { topicId, level } }),
    updateTopicConfidence: (topicId, level) => dispatch({ type: 'UPDATE_TOPIC_CONFIDENCE', payload: { topicId, level } }),
    setCurrentTopic: (topic) => dispatch({ type: 'SET_CURRENT_TOPIC', payload: topic }),
    addStudyTime: (minutes) => dispatch({ type: 'ADD_STUDY_TIME', payload: minutes }),
    updateStreak: () => dispatch({ type: 'UPDATE_STREAK' }),
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearningProgress = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearningProgress must be used within a LearningProgressProvider');
  }
  return context;
}; 