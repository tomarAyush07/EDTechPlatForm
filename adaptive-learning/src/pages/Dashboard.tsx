import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { Topics } from '../components/molecules/Topics';
import { ProgressOverview } from '../components/organisms/ProgressOverview';
import { StudyStreak } from '../components/organisms/StudyStreak';
import { Leaderboard } from '../components/organisms/Leaderboard';
import { HabitTracker } from '../components/organisms/HabitTracker';
import { AIChatCoach } from '../components/organisms/AIChatCoach';
import { Achievements } from '../components/organisms/Achievements';
import { Dashboard as DashboardWidget } from '../components/organisms/Dashboard';
import { useUser } from '../context/UserContext';
import { AILearningAnalytics } from '../components/organisms/AILearningAnalytics';
import { AIStudyRecommendations } from '../components/organisms/AIStudyRecommendations';

const courses = [
  { id: 1, name: 'Mathematics', icon: '📐', progress: 0 },
  { id: 2, name: 'Physics', icon: '⚛️', progress: 0 },
  { id: 3, name: 'Chemistry', icon: '🧪', progress: 0 },
  { id: 4, name: 'Biology', icon: '🧬', progress: 0 },
  { id: 5, name: 'Computer Science', icon: '💻', progress: 0 },
  { id: 6, name: 'English', icon: '📚', progress: 0 },
  { id: 7, name: 'History', icon: '🏛️', progress: 0 },
  { id: 8, name: 'Geography', icon: '🌍', progress: 0 },
];

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({ theme }) => theme.spacing.xl};
  perspective: 2000px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const DashboardHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: rgba(17, 34, 64, 0.6);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateZ(30px) rotateX(5deg);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const WelcomeSection = styled(motion.div)`
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);

    &:hover {
      transform: translateZ(40px) scale(1.05);
      text-shadow: 0 4px 20px rgba(100, 255, 218, 0.3);
    }
  }
  p {
    color: #8892B0;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    transition: all 0.3s ease;

    &:hover {
      color: #64FFDA;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledButton = styled(Button)`
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px) translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.15);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) translateZ(10px);
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled(motion.div)`
  background: rgba(17, 34, 64, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(10px);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #64FFDA, transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(40px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StatCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.6);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(30px) rotateX(5deg);
    background: rgba(17, 34, 64, 0.8);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.2);

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #64FFDA;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: #8892B0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
`;

const QuickActions = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const QuickActionButton = styled(motion.button)`
  background: rgba(17, 34, 64, 0.6);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64FFDA;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(17, 34, 64, 0.8);
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-3px) translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.15);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) translateZ(10px);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.2);
  max-width: 600px;
  width: 90%;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(100, 255, 218, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ModalTitle = styled.h2`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #8892B0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #64FFDA;
    transform: rotate(90deg);
  }
`;

const AIChatContainer = styled(motion.div)`
  position: fixed;
  top: 180px;
  right: 30px;
  z-index: 9999;
  transform-style: preserve-3d;
  pointer-events: none;

  * {
    pointer-events: auto;
  }
`;

const AIChatButton = styled(motion.button)`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 3px solid rgba(100, 255, 218, 0.4);
  color: #64FFDA;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(100, 255, 218, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: pulse 2s infinite;
  backdrop-filter: blur(5px);

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.3), transparent);
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateZ(30px) scale(1.1);
    border-color: rgba(100, 255, 218, 0.6);
    box-shadow: 0 8px 30px rgba(100, 255, 218, 0.4);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateZ(15px) scale(0.95);
  }
`;

const AIChatModal = styled(motion.div)`
  position: fixed;
  top: 260px;
  right: 30px;
  width: 360px;
  background: rgba(17, 34, 64, 0.98);
  border-radius: 25px;
  border: 3px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 15px 35px rgba(100, 255, 218, 0.2);
  overflow: hidden;
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);
  z-index: 9999;
`;

const AIChatHeader = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(79, 209, 197, 0.15));
  border-bottom: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const AIChatAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64FFDA, #4FD1C5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #0A192F;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.4);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }
`;

const AIChatTitle = styled.div`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.3);
`;

const AIChatContent = styled.div`
  padding: 20px;
  max-height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(100, 255, 218, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 255, 218, 0.3);
    border-radius: 4px;
  }
`;

const AIChatMessage = styled(motion.div)<{ isUser?: boolean }>`
  padding: 12px 18px;
  border-radius: 20px;
  max-width: 85%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background: ${({ isUser }) =>
    isUser
      ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2))'
      : 'rgba(17, 34, 64, 0.8)'};
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: ${({ isUser }) => (isUser ? '#64FFDA' : '#E6F1FF')};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateZ(15px);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.15);
  }
`;

const AIChatInput = styled.div`
  padding: 20px;
  border-top: 2px solid rgba(100, 255, 218, 0.2);
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(17, 34, 64, 0.5);
`;

const AIChatTextField = styled.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  background: rgba(17, 34, 64, 0.8);
  border: 2px solid rgba(100, 255, 218, 0.2);
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: rgba(230, 241, 255, 0.5);
  }
`;

const AIChatSendButton = styled(motion.button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(79, 209, 197, 0.2));
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.3), rgba(79, 209, 197, 0.3));
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }
`;

const AIChatCloseButton = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  border: 2px solid rgba(100, 255, 218, 0.3);
  color: #64FFDA;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.2), transparent);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.5);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;

export const Dashboard: React.FC = () => {
  const { userData } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { text: "👋 Hey there! I'm your cute AI study buddy! Ready to help you learn? 💫", isUser: false },
  ]);
  const [aiInput, setAiInput] = useState('');

  useEffect(() => {
    // Check if user data exists in localStorage
    const savedData = localStorage.getItem('userData');
    if (!savedData) {
      navigate('/onboarding');
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return (
      <DashboardContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: '#64FFDA',
          fontSize: '1.5rem'
        }}>
          Loading your dashboard...
        </div>
      </DashboardContainer>
    );
  }

  if (!userData) {
    return null;
  }

  const selectedCourses = courses.filter(course => 
    userData.selectedCourses.includes(course.id)
  );

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  const handleCloseModal = () => {
    setSelectedSection(null);
  };

  const handleAIChatToggle = () => {
    setIsAIChatOpen(!isAIChatOpen);
  };

  const handleAISendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    setAiMessages(prev => [...prev, { text: aiInput, isUser: true }]);
    setAiInput('');

    // Simulate AI response
    setTimeout(() => {
      setAiMessages(prev => [...prev, {
        text: "That's a great question! Let me help you with that...",
        isUser: false
      }]);
    }, 1000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const stats = [
    { value: '42h', label: 'Total Study Hours' },
    { value: '12', label: 'Completed Courses' },
    { value: '85%', label: 'Average Score' },
    { value: '7', label: 'Current Streak' },
  ];

  const quickActions = [
    { icon: '🎯', label: 'Set Daily Goal' },
    { icon: '⏱️', label: 'Start Timer' },
    { icon: '📝', label: 'Take Notes' },
    { icon: '🎮', label: 'Practice Quiz' },
  ];

  return (
    <DashboardContainer>
      <DashboardHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WelcomeSection>
          <h1>Welcome, {userData.name}! 👋</h1>
          <p>Let's continue your learning journey</p>
        </WelcomeSection>
        <ActionButtons>
          <StyledButton
            onClick={() => navigate('/courses')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Courses
          </StyledButton>
          <StyledButton
            onClick={() => navigate('/profile')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </StyledButton>
        </ActionButtons>
      </DashboardHeader>

      <QuickActions
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {quickActions.map((action, index) => (
          <QuickActionButton
            key={action.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span>{action.icon}</span>
            {action.label}
          </QuickActionButton>
        ))}
      </QuickActions>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleSectionClick(stat.label.toLowerCase())}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <MainContent>
        <div>
          <Section
            onClick={() => handleSectionClick('analytics')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>📊 AI Learning Analytics</SectionTitle>
            <AILearningAnalytics />
          </Section>

          <Section
            onClick={() => handleSectionClick('recommendations')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>🎯 AI Study Recommendations</SectionTitle>
            <AIStudyRecommendations />
          </Section>

          <Section
            onClick={() => handleSectionClick('progress')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>📈 Progress Overview</SectionTitle>
            <ProgressOverview />
          </Section>

          <Section
            onClick={() => handleSectionClick('topics')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>📚 Learning Topics</SectionTitle>
            <Topics />
          </Section>
        </div>

        <div>
          <Section
            onClick={() => handleSectionClick('streak')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>🔥 Study Streak</SectionTitle>
            <StudyStreak />
          </Section>

          <Section
            onClick={() => handleSectionClick('leaderboard')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>🏆 Leaderboard</SectionTitle>
            <Leaderboard />
          </Section>

          <Section
            onClick={() => handleSectionClick('achievements')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>🏅 Achievements</SectionTitle>
            <Achievements />
          </Section>

          <Section
            onClick={() => handleSectionClick('habits')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SectionTitle>✅ Daily Habits</SectionTitle>
            <HabitTracker />
          </Section>
        </div>
      </MainContent>

      <AIChatCoach />

      <AnimatePresence>
        {selectedSection && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <ModalContent
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)} Details
                </ModalTitle>
                <CloseButton onClick={handleCloseModal}>×</CloseButton>
              </ModalHeader>
              
              {selectedSection === 'analytics' && <AILearningAnalytics />}
              {selectedSection === 'recommendations' && <AIStudyRecommendations />}
              {selectedSection === 'progress' && <ProgressOverview />}
              {selectedSection === 'topics' && <Topics />}
              {selectedSection === 'streak' && <StudyStreak />}
              {selectedSection === 'leaderboard' && <Leaderboard />}
              {selectedSection === 'achievements' && <Achievements />}
              {selectedSection === 'habits' && <HabitTracker />}
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </DashboardContainer>
  );
}; 