import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AchievementsContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  min-width: 280px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Badge = styled(motion.div)<{ unlocked?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ unlocked, theme }) => unlocked ? theme.colors.primary[50] : theme.colors.neutral[100]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const BadgeIcon = styled.div<{ unlocked?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ unlocked, theme }) => unlocked ? theme.colors.primary[500] : theme.colors.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ unlocked, theme }) => unlocked ? 'white' : theme.colors.neutral[500]};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ unlocked }) => unlocked ? 'none' : 'rgba(255, 255, 255, 0.5)'};
    backdrop-filter: blur(2px);
  }
`;

const BadgeName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[900]};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const BadgeProgress = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-top: ${({ theme }) => theme.spacing.xs};
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background: ${({ theme }) => theme.colors.primary[500]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: width 0.3s ease;
  }
`;

interface Achievement {
  id: number;
  name: string;
  icon: string;
  description: string;
  progress: number;
  unlocked: boolean;
  reward: number;
}

const achievements: Achievement[] = [
  {
    id: 1,
    name: "Early Bird",
    icon: "🌅",
    description: "Study for 5 days in a row",
    progress: 80,
    unlocked: false,
    reward: 100
  },
  {
    id: 2,
    name: "Knowledge Seeker",
    icon: "🔍",
    description: "Complete 10 topics",
    progress: 60,
    unlocked: false,
    reward: 150
  },
  {
    id: 3,
    name: "Focus Master",
    icon: "🎯",
    description: "Study for 2 hours straight",
    progress: 100,
    unlocked: true,
    reward: 200
  },
  {
    id: 4,
    name: "Quick Learner",
    icon: "⚡",
    description: "Master a topic in one day",
    progress: 40,
    unlocked: false,
    reward: 250
  },
  {
    id: 5,
    name: "Team Player",
    icon: "👥",
    description: "Help 5 other students",
    progress: 20,
    unlocked: false,
    reward: 300
  },
  {
    id: 6,
    name: "Perfect Score",
    icon: "💯",
    description: "Get 100% on a quiz",
    progress: 0,
    unlocked: false,
    reward: 400
  }
];

export const Achievements: React.FC = () => {
  return (
    <AchievementsContainer>
      <Title>
        <span role="img" aria-label="trophy">🏆</span>
        Achievements
      </Title>
      <BadgeGrid>
        {achievements.map((achievement) => (
          <Badge
            key={achievement.id}
            unlocked={achievement.unlocked}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BadgeIcon unlocked={achievement.unlocked}>
              {achievement.icon}
            </BadgeIcon>
            <BadgeName>{achievement.name}</BadgeName>
            <BadgeProgress>
              {achievement.progress}%
              <ProgressBar progress={achievement.progress} />
            </BadgeProgress>
          </Badge>
        ))}
      </BadgeGrid>
    </AchievementsContainer>
  );
}; 