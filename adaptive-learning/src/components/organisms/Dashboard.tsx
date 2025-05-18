import React from 'react';
import styled from '@emotion/styled';
import { StudyTimer } from '../molecules/StudyTimer';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Widget = styled.div`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WidgetTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MoodTracker = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const MoodButton = styled.button<{ selected?: boolean }>`
  background: ${({ selected, theme }) => selected ? theme.colors.primary[100] : theme.colors.neutral[200]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
`;

const NotesInput = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  resize: vertical;
`;

export const Dashboard: React.FC = () => {
  const [mood, setMood] = React.useState<string>('');
  const [notes, setNotes] = React.useState('');

  return (
    <DashboardGrid>
      <Widget>
        <WidgetTitle>Daily Focus</WidgetTitle>
        <p>What is your main goal for today?</p>
        <NotesInput
          placeholder="E.g. Finish React project, study for exam..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      </Widget>
      <Widget>
        <WidgetTitle>Smart Study Timer</WidgetTitle>
        <StudyTimer />
      </Widget>
      <Widget>
        <WidgetTitle>Mood Tracker</WidgetTitle>
        <p>How do you feel today?</p>
        <MoodTracker>
          {['😃', '🙂', '😐', '😔', '😩'].map((face) => (
            <MoodButton
              key={face}
              selected={mood === face}
              onClick={() => setMood(face)}
              aria-label={face}
            >
              {face}
            </MoodButton>
          ))}
        </MoodTracker>
      </Widget>
      <Widget>
        <WidgetTitle>Quick Notes</WidgetTitle>
        <NotesInput
          placeholder="Jot down ideas, reminders, or anything..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      </Widget>
    </DashboardGrid>
  );
}; 