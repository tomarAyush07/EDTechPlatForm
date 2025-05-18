import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #E6F1FF;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  perspective: 2000px;
`;

const Card3D = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid #64FFDA;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    z-index: 1;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  transform: translateZ(50px);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #64FFDA;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const CardDescription = styled.p`
  color: #E6F1FF;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 1rem;
  text-align: center;
`;

const InteractiveStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(17, 34, 64, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(10, 25, 47, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
  }

  h3 {
    font-size: 2rem;
    color: #64FFDA;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  }

  p {
    color: #E6F1FF;
    font-size: 1rem;
  }
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(100, 255, 218, 0.2) 0%, rgba(100, 255, 218, 0) 70%);
  filter: blur(20px);
  pointer-events: none;
  z-index: 0;
`;

export const Experience3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Personalized Learning Path',
      description: 'AI-powered adaptive learning that adjusts to your pace and style'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your progress with detailed insights and recommendations'
    },
    {
      icon: '🤖',
      title: 'AI Tutor Support',
      description: 'Get instant help from our AI tutors available 24/7'
    },
    {
      icon: '🎮',
      title: 'Interactive Learning',
      description: 'Engage with interactive exercises and real-world projects'
    }
  ];

  const stats = [
    { value: '95%', label: 'Success Rate' },
    { value: '10K+', label: 'Active Learners' },
    { value: '500+', label: 'Courses' },
    { value: '24/7', label: 'AI Support' }
  ];

  return (
    <ExperienceContainer ref={containerRef}>
      <GlowingOrb
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      
      <SectionTitle>Experience Learning in 3D</SectionTitle>
      
      <CardsContainer>
        {features.map((feature, index) => (
          <Card3D
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
          >
            <CardContent>
              <CardIcon>{feature.icon}</CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card3D>
        ))}
      </CardsContainer>

      <InteractiveStats
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </StatCard>
        ))}
      </InteractiveStats>
    </ExperienceContainer>
  );
}; 