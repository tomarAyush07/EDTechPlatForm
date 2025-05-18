import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0A192F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoaderContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Logo = styled(motion.div)`
  font-size: 3rem;
  color: #64FFDA;
  font-weight: bold;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 30px rgba(100, 255, 218, 0.7);
  }
`;

const LoadingText = styled(motion.div)`
  color: #8892B0;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const LoadingProgress = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #64FFDA, #4FD1C5);
  border-radius: 2px;
`;

const LoadingDots = styled(motion.div)`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: #64FFDA;
  border-radius: 50%;
`;

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  return (
    <LoaderContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LoaderContent>
        <Logo
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Adaptive Learning
        </Logo>
        <LoadingText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Loading your learning experience...
        </LoadingText>
        <LoadingBar>
          <LoadingProgress
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </LoadingBar>
        <LoadingDots>
          {[0, 1, 2].map((index) => (
            <Dot
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </LoadingDots>
      </LoaderContent>
    </LoaderContainer>
  );
}; 