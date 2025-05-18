import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AnalyticsContainer = styled(motion.div)`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
`;

const StatCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
`;

const StatValue = styled.div`
  color: #64FFDA;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #8892B0;
  font-size: 0.9rem;
`;

const InsightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InsightCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const InsightIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #64FFDA;
  flex-shrink: 0;
`;

const InsightContent = styled.div`
  flex: 1;
`;

const InsightTitle = styled.div`
  color: #64FFDA;
  font-weight: 500;
  margin-bottom: 5px;
`;

const InsightDescription = styled.div`
  color: #8892B0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 3px;
`;

export const AILearningAnalytics: React.FC = () => {
  const stats = [
    { value: '85%', label: 'Learning Efficiency' },
    { value: '92%', label: 'Concept Mastery' },
    { value: '78%', label: 'Practice Score' },
    { value: '15h', label: 'Study Time' },
  ];

  const insights = [
    {
      icon: '🎯',
      title: 'Learning Pattern Detected',
      description: 'You learn best in the morning. Consider scheduling important topics during this time.',
    },
    {
      icon: '📈',
      title: 'Performance Trend',
      description: 'Your understanding of Mathematics has improved by 25% this week.',
    },
    {
      icon: '💡',
      title: 'Recommended Focus',
      description: 'Physics concepts need more practice. Try solving more problems in this area.',
    },
  ];

  return (
    <AnalyticsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🤖</span>
        AI Learning Analytics
      </Title>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
            <ProgressBar>
              <ProgressFill
                percentage={parseInt(stat.value)}
                initial={{ width: 0 }}
                animate={{ width: `${parseInt(stat.value)}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </ProgressBar>
          </StatCard>
        ))}
      </StatsGrid>

      <InsightsList>
        {insights.map((insight, index) => (
          <InsightCard
            key={insight.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <InsightIcon>{insight.icon}</InsightIcon>
            <InsightContent>
              <InsightTitle>{insight.title}</InsightTitle>
              <InsightDescription>{insight.description}</InsightDescription>
            </InsightContent>
          </InsightCard>
        ))}
      </InsightsList>
    </AnalyticsContainer>
  );
}; 