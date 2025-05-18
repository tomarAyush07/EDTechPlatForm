import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLearningProgress } from '../../../context/LearningProgressContext';

const ProgressContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const Progress: React.FC = () => {
  const { topics, totalStudyTime, currentStreak } = useLearningProgress();

  return (
    <ProgressContainer>
      <StatCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatTitle>Total Study Time</StatTitle>
        <StatValue>{Math.round(totalStudyTime / 60)} hours</StatValue>
      </StatCard>

      <StatCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <StatTitle>Current Streak</StatTitle>
        <StatValue>{currentStreak} days</StatValue>
      </StatCard>

      <StatCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StatTitle>Topics Mastered</StatTitle>
        <StatValue>
          {topics.filter(topic => topic.masteryLevel >= 80).length} / {topics.length}
        </StatValue>
      </StatCard>
    </ProgressContainer>
  );
}; 