import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const OverviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary[50]};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ProgressSection = styled.div`
  background: ${({ theme }) => theme.colors.neutral[50]};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProgressTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 0;
`;

const ProgressValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ProgressBar = styled(motion.div)<{ progress: number }>`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary[400]}, ${({ theme }) => theme.colors.primary[600]});
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Achievement = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const AchievementIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const AchievementInfo = styled.div`
  flex: 1;
`;

const AchievementName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const AchievementProgress = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const stats = [
  { value: '42h', label: 'Total Study Hours' },
  { value: '12', label: 'Completed Courses' },
  { value: '85%', label: 'Average Score' },
  { value: '7', label: 'Current Streak' },
];

const achievements = [
  { icon: '🎯', name: 'Perfect Week', progress: '5/7 days completed' },
  { icon: '📚', name: 'Bookworm', progress: '8/10 books read' },
  { icon: '⭐', name: 'Top Performer', progress: '3/5 top scores' },
];

export const ProgressOverview: React.FC = () => {
  return (
    <OverviewContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <ProgressSection>
        <ProgressHeader>
          <ProgressTitle>Level Progress</ProgressTitle>
          <ProgressValue>Level 5 - 75%</ProgressValue>
        </ProgressHeader>
        <ProgressBar
          progress={75}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </ProgressSection>

      <AchievementsList>
        {achievements.map((achievement, index) => (
          <Achievement
            key={achievement.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AchievementIcon>{achievement.icon}</AchievementIcon>
            <AchievementInfo>
              <AchievementName>{achievement.name}</AchievementName>
              <AchievementProgress>{achievement.progress}</AchievementProgress>
            </AchievementInfo>
          </Achievement>
        ))}
      </AchievementsList>
    </OverviewContainer>
  );
}; 