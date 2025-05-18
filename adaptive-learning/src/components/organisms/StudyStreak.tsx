import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StreakContainer = styled.div`
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

const StreakInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StreakCount = styled.div`
  text-align: center;
`;

const Count = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[700]};
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const Reward = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.success[50]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.success[700]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const DayLabel = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[600]};
  padding: ${({ theme }) => theme.spacing.xs};
`;

const Day = styled(motion.div)<{ active?: boolean; today?: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  background: ${({ active, today, theme }) => 
    today ? theme.colors.primary[100] :
    active ? theme.colors.primary[50] : 
    theme.colors.neutral[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ active, today, theme }) => 
    today ? theme.colors.primary[700] :
    active ? theme.colors.primary[600] : 
    theme.colors.neutral[600]};
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ active, theme }) => active ? theme.colors.primary[500] : 'transparent'};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Stat = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();

// Generate calendar days
const generateDays = (): (number | null)[] => {
  const daysInMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();
  const firstDay = new Date(today.getFullYear(), currentMonth, 1).getDay();
  const days: (number | null)[] = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

export const StudyStreak: React.FC = () => {
  const calendarDays = generateDays();
  const currentStreak = 5;
  const longestStreak = 12;
  const totalStudyDays = 45;
  const monthlyGoal = 20;

  return (
    <StreakContainer>
      <Title>
        <span role="img" aria-label="fire">🔥</span>
        Study Streak
      </Title>
      <StreakInfo>
        <StreakCount>
          <Count>{currentStreak}</Count>
          <Label>Current Streak</Label>
        </StreakCount>
        <Reward
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          +{currentStreak * 10} points
        </Reward>
      </StreakInfo>
      <Calendar>
        {days.map((day, index) => (
          <DayLabel key={index}>{day}</DayLabel>
        ))}
        {calendarDays.map((day, index) => (
          day ? (
            <Day
              key={index}
              active={day < currentDay}
              today={day === currentDay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {day}
            </Day>
          ) : (
            <div key={index} />
          )
        ))}
      </Calendar>
      <Stats>
        <Stat>
          <StatValue>{longestStreak}</StatValue>
          <StatLabel>Longest Streak</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{totalStudyDays}</StatValue>
          <StatLabel>Total Study Days</StatLabel>
        </Stat>
      </Stats>
    </StreakContainer>
  );
}; 