import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const RecommendationsContainer = styled(motion.div)`
  background: rgba(17, 34, 64, 0.98);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  padding: 20px;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
`;

const Title = styled.h3`
  color: #64FFDA;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RecommendationCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SubjectIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #64FFDA;
`;

const SubjectInfo = styled.div`
  flex: 1;
`;

const SubjectName = styled.div`
  color: #64FFDA;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 4px;
`;

const SubjectProgress = styled.div`
  color: #8892B0;
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 3px;
`;

const RecommendationContent = styled.div`
  color: #8892B0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled(motion.button)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

export const AIStudyRecommendations: React.FC = () => {
  const recommendations = [
    {
      subject: 'Mathematics',
      icon: '📐',
      progress: 75,
      description: 'Based on your learning patterns, you should focus on calculus concepts next. Your understanding of derivatives is strong, but integration needs more practice.',
      actions: ['Start Practice', 'View Resources', 'Schedule Session']
    },
    {
      subject: 'Physics',
      icon: '⚛️',
      progress: 60,
      description: 'Your mechanics concepts are solid, but electromagnetism shows room for improvement. Consider reviewing Maxwell\'s equations and electromagnetic induction.',
      actions: ['Review Concepts', 'Take Quiz', 'Watch Tutorial']
    },
    {
      subject: 'Computer Science',
      icon: '💻',
      progress: 85,
      description: 'Great progress in algorithms! Time to dive deeper into data structures. Focus on advanced tree structures and graph algorithms.',
      actions: ['Start Learning', 'Practice Coding', 'Join Discussion']
    }
  ];

  return (
    <RecommendationsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🎯</span>
        AI Study Recommendations
      </Title>

      <RecommendationsList>
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={rec.subject}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardHeader>
              <SubjectIcon>{rec.icon}</SubjectIcon>
              <SubjectInfo>
                <SubjectName>{rec.subject}</SubjectName>
                <SubjectProgress>Current Progress: {rec.progress}%</SubjectProgress>
                <ProgressBar>
                  <ProgressFill
                    percentage={rec.progress}
                    initial={{ width: 0 }}
                    animate={{ width: `${rec.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </ProgressBar>
              </SubjectInfo>
            </CardHeader>

            <RecommendationContent>
              {rec.description}
            </RecommendationContent>

            <ActionButtons>
              {rec.actions.map((action) => (
                <ActionButton
                  key={action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action}
                </ActionButton>
              ))}
            </ActionButtons>
          </RecommendationCard>
        ))}
      </RecommendationsList>
    </RecommendationsContainer>
  );
}; 