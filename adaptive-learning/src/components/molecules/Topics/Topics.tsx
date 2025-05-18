import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button } from '../../atoms/Button';

const TopicsContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TopicCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
`;

const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TopicTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: #E6F1FF;
  margin: 0;
`;

const TopicDescription = styled.p`
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TopicStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Stat = styled.div`
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #64FFDA;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-top: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background: #64FFDA;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: width 0.3s ease;
  }
`;

export const Topics: React.FC = () => {
  const topics = [
    {
      id: '1',
      name: 'React Fundamentals',
      description: 'Core concepts and best practices of React development',
      masteryLevel: 75,
      confidenceLevel: 80
    },
    {
      id: '2',
      name: 'TypeScript',
      description: 'Type-safe JavaScript development',
      masteryLevel: 60,
      confidenceLevel: 65
    },
    {
      id: '3',
      name: 'Node.js',
      description: 'Server-side JavaScript development',
      masteryLevel: 45,
      confidenceLevel: 50
    }
  ];

  return (
    <TopicsContainer>
      {topics.map((topic, index) => (
        <TopicCard
          key={topic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TopicHeader>
            <TopicTitle>{topic.name}</TopicTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                // Add edit functionality here
              }}
            >
              Edit
            </Button>
          </TopicHeader>
          <TopicDescription>{topic.description}</TopicDescription>
          <TopicStats>
            <Stat>
              <StatLabel>Mastery</StatLabel>
              <StatValue>{topic.masteryLevel}%</StatValue>
              <ProgressBar progress={topic.masteryLevel} />
            </Stat>
            <Stat>
              <StatLabel>Confidence</StatLabel>
              <StatValue>{topic.confidenceLevel}%</StatValue>
              <ProgressBar progress={topic.confidenceLevel} />
            </Stat>
          </TopicStats>
        </TopicCard>
      ))}
    </TopicsContainer>
  );
}; 