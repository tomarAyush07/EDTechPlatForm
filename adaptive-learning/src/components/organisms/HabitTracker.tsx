import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const TrackerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HabitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HabitCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const HabitIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary[100]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const HabitInfo = styled.div`
  flex: 1;
`;

const HabitName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const HabitStreak = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StreakCount = styled.span`
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const CheckButton = styled(motion.button)<{ checked: boolean }>`
  width: 32px;
  height: 32px;
  border: 2px solid ${({ checked, theme }) =>
    checked ? theme.colors.primary[500] : theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary[500] : 'transparent'};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.neutral[50] : theme.colors.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const AddHabitButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`;

const HabitForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`;

interface Habit {
  id: string;
  name: string;
  icon: string;
  streak: number;
  checked: boolean;
}

const initialHabits: Habit[] = [
  { id: '1', name: 'Morning Study', icon: '🌅', streak: 5, checked: false },
  { id: '2', name: 'Evening Review', icon: '🌙', streak: 3, checked: true },
  { id: '3', name: 'Practice Coding', icon: '💻', streak: 7, checked: false },
];

export const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: '', icon: '📝' });

  const toggleHabit = (id: string) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              checked: !habit.checked,
              streak: habit.checked ? habit.streak - 1 : habit.streak + 1,
            }
          : habit
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabit.name.trim()) {
      setHabits((prevHabits) => [
        ...prevHabits,
        {
          id: Date.now().toString(),
          name: newHabit.name,
          icon: newHabit.icon,
          streak: 0,
          checked: false,
        },
      ]);
      setNewHabit({ name: '', icon: '📝' });
      setIsAddingHabit(false);
    }
  };

  return (
    <TrackerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HabitsList>
        {habits.map((habit, index) => (
          <HabitCard
            key={habit.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <HabitIcon>{habit.icon}</HabitIcon>
            <HabitInfo>
              <HabitName>{habit.name}</HabitName>
              <HabitStreak>
                <span>🔥</span>
                <StreakCount>{habit.streak} day streak</StreakCount>
              </HabitStreak>
            </HabitInfo>
            <CheckButton
              checked={habit.checked}
              onClick={() => toggleHabit(habit.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {habit.checked ? '✓' : '+'}
            </CheckButton>
          </HabitCard>
        ))}
      </HabitsList>

      {!isAddingHabit ? (
        <AddHabitButton
          onClick={() => setIsAddingHabit(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>➕</span> Add New Habit
        </AddHabitButton>
      ) : (
        <AnimatePresence>
          <HabitForm
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label>Habit Name</Label>
              <Input
                type="text"
                value={newHabit.name}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, name: e.target.value })
                }
                placeholder="Enter habit name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Icon</Label>
              <Input
                type="text"
                value={newHabit.icon}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, icon: e.target.value })
                }
                placeholder="Enter emoji"
                maxLength={2}
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add Habit
            </SubmitButton>
          </HabitForm>
        </AnimatePresence>
      )}
    </TrackerContainer>
  );
}; 