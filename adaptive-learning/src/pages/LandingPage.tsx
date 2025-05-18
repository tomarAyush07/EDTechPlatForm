import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { motion, useScroll, useTransform, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { theme, CustomTheme } from '../styles/theme';
import { Experience3D } from '../components/sections/Experience3D';

type ThemedProps = { theme: CustomTheme };
type MotionProps = HTMLMotionProps<'div'>;
type ThemedMotionProps = ThemedProps & MotionProps;

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.neutral[50]};
`;

const Nav = styled(motion.nav)<ThemedProps & MotionProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.theme.zIndex.sticky};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const Logo = styled(motion(Link))<ThemedProps & MotionProps>`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary[600]};
  text-decoration: none;
`;

const NavLinks = styled(motion.div)<ThemedProps & MotionProps>`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

const NavLink = styled(motion(Link))<ThemedProps & MotionProps>`
  color: ${props => props.theme.colors.neutral[700]};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PrimaryButton = styled(motion.button)`
  background: #64FFDA;
  color: #0A192F;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    background: #4CD8B2;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #64FFDA;
  padding: 1rem 2rem;
  border: 2px solid #64FFDA;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.1);

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const DashboardButton = styled(motion(Button))<ThemedProps & MotionProps>`
  background: ${props => props.theme.colors.success[600]};
  color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: background-color ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.success[700]};
  }
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 0;
    filter: blur(4px);
    transform: translateZ(-100px);
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  transform-style: preserve-3d;
  
  h1 {
    font-size: 4.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    line-height: 1.1;
    background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateZ(50px);
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    font-size: 1.25rem;
    color: #8892B0;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.8;
    transform: translateZ(30px);
    max-width: 600px;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: rgba(17, 34, 64, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 320px;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  .icon {
    font-size: 2.5rem;
    color: #64FFDA;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    transition: transform 0.3s ease;
  }
  
  h3 {
    color: #E6F1FF;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    transition: color 0.3s ease;
  }
  
  p {
    color: #8892B0;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: 1.6;
    transition: color 0.3s ease;
  }
  
  &.card-1 {
    top: 5%;
    left: 5%;
    transform: translateZ(100px) rotateY(-15deg);
    z-index: 3;
  }
  
  &.card-2 {
    top: 40%;
    right: 5%;
    transform: translateZ(150px) rotateY(15deg);
    z-index: 2;
  }
  
  &.card-3 {
    bottom: 5%;
    left: 15%;
    transform: translateZ(50px) rotateY(-5deg);
    z-index: 1;
  }

  &:hover {
    transform: translateZ(200px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(100, 255, 218, 0.4);
    background: rgba(17, 34, 64, 0.98);

    .icon {
      transform: scale(1.1);
    }

    h3 {
      color: #64FFDA;
    }

    p {
      color: #E6F1FF;
    }
  }
`;

const HeroStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform: translateZ(40px);
`;

const StatItem = styled(motion.div)`
  text-align: center;
  
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    color: #64FFDA;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: #8892B0;
    margin: 0;
  }
`;

const FeaturesSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    .icon {
      transform: scale(1.1) rotate(5deg);
      color: #64FFDA;
    }

    h3 {
      color: #64FFDA;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #E6F1FF;
`;

const FeatureDescription = styled.p`
  color: #8892B0;
  line-height: 1.6;
`;

const CTA = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #E6F1FF;
  max-width: 800px;
  line-height: 1.2;
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: #8892B0;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #64FFDA;
  transform-origin: left;
  z-index: ${({ theme }) => theme.zIndex.fixed};
`;

const StatsSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #0A192F;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const LearningPathsSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #112240;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const PathsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const PathCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .path-image {
      transform: scale(1.1);
    }

    h3 {
      color: #64FFDA;
    }
  }
`;

const PathImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: transform 0.5s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(10, 25, 47, 0.9));
  }
`;

const TestimonialsSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .quote {
      color: #64FFDA;
    }

    .author-image {
      transform: scale(1.1);
      border-color: #64FFDA;
    }
  }
`;

const TestimonialContent = styled.p`
  color: #E6F1FF;
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
`;

const AuthorInfo = styled.div`
  h4 {
    color: #64FFDA;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: #8892B0;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const InteractiveStats = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const StatCounter = styled(motion.div)`
  text-align: center;
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    color: #64FFDA;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  p {
    color: #8892B0;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const ComparisonTable = styled(motion.div)`
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const TableRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeatureHighlight = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
  
  .icon {
    font-size: 24px;
    color: #64FFDA;
  }
  
  .text {
    color: #E6F1FF;
  }
`;

const SuccessStory = styled(motion.div)`
  background: rgba(17, 34, 64, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  
  .quote {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: #E6F1FF;
    font-style: italic;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  .author {
    color: #64FFDA;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;

const CourseShowcase = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #112240;
  position: relative;
  overflow: hidden;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const CourseCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CourseImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(10, 25, 47, 0.9));
  }
`;

const CourseContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CourseTitle = styled.h3`
  color: #64FFDA;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const CourseDescription = styled.p`
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const LearningJourney = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #0A192F;
  position: relative;
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #64FFDA, transparent);
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled(motion.div)<{ side: 'left' | 'right' }>`
  width: 45%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  margin-left: ${props => props.side === 'right' ? '55%' : '0'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.side === 'left' ? 'right: -60px;' : 'left: -60px;'}
    width: 20px;
    height: 20px;
    background: #64FFDA;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
  }
`;

const TimelineContent = styled.div`
  background: rgba(17, 34, 64, 0.95);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineTitle = styled.h3`
  color: #64FFDA;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimelineDescription = styled.p`
  color: #8892B0;
`;

const InteractiveDemo = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, #112240 0%, #0A192F 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DemoContent = styled.div`
  h2 {
    color: #64FFDA;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
  }

  p {
    color: #8892B0;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const DemoPreview = styled(motion.div)`
  background: rgba(10, 25, 47, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .demo-image {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 0.8;
    }
  }
`;

const DemoImage = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  position: relative;
`;

const DemoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.2) 0%, rgba(10, 25, 47, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const DemoFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const DemoFeature = styled(motion.div)`
  background: rgba(17, 34, 64, 0.5);
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    background: rgba(17, 34, 64, 0.8);

    .icon {
      color: #64FFDA;
      transform: scale(1.1);
    }
  }

  .icon {
    font-size: 1.5rem;
    color: #8892B0;
    transition: all 0.3s ease;
  }

  .text {
    color: #E6F1FF;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const ProductRoadmap = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #0A192F;
  position: relative;
`;

const RoadmapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`;

const RoadmapCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const RoadmapTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RoadmapDescription = styled.p`
  color: #8892B0;
  line-height: 1.6;
`;

const APIIntegration = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: #112240;
  position: relative;
`;

const APIContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
`;

const APIContent = styled.div`
  h2 {
    color: #64FFDA;
    font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  p {
    color: #8892B0;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.6;
  }
`;

const APIFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const APIFeature = styled(motion.div)<ThemedMotionProps>`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  
  .icon {
    color: #64FFDA;
    font-size: 24px;
  }
  
  .content {
    h3 {
      color: #E6F1FF;
      margin-bottom: ${props => props.theme.spacing.xs};
    }
    
    p {
      color: #8892B0;
      margin: 0;
    }
  }
`;

const PartnersSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    .partner-logo {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .partner-name {
      color: #64FFDA;
    }
  }
`;

const PartnerLogo = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
  }
`;

const PartnerName = styled.h3`
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: color 0.3s ease;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const PartnerType = styled.p`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.8;
`;

const PartnerStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  width: 100%;
  justify-content: center;
`;

const Stat = styled.div`
  text-align: center;
  
  .value {
    color: #64FFDA;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
  
  .label {
    color: #8892B0;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

const AICharacter = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  background: rgba(17, 34, 64, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  border: 2px solid #64FFDA;
  box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(100, 255, 218, 0.3);
  }

  .ai-face {
    width: 60%;
    height: 60%;
    position: relative;
  }

  .eye {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #64FFDA;
    border-radius: 50%;
    top: 30%;
    animation: blink 3s infinite;
  }

  .eye.left {
    left: 25%;
  }

  .eye.right {
    right: 25%;
  }

  .mouth {
    position: absolute;
    width: 20px;
    height: 10px;
    border: 2px solid #64FFDA;
    border-radius: 0 0 20px 20px;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    animation: smile 3s infinite;
  }

  @keyframes blink {
    0%, 45%, 55%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.1); }
  }

  @keyframes smile {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.2); }
  }
`;

const AIBubble = styled(motion.div)`
  position: absolute;
  bottom: 120px;
  right: 30px;
  background: rgba(17, 34, 64, 0.95);
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid #64FFDA;
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 250px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: ${({ theme }) => theme.zIndex.fixed};

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 30px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(17, 34, 64, 0.95);
  }
`;

const FunFactButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(17, 34, 64, 0.95);
  border: 2px solid #64FFDA;
  color: #64FFDA;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
  animation: bounce 3s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(100, 255, 218, 0.3);
    border-color: #64FFDA;
    background: rgba(17, 34, 64, 0.98);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const FunFactModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(17, 34, 64, 0.98);
  padding: 30px;
  border-radius: 25px;
  border: 3px solid rgba(100, 255, 218, 0.3);
  max-width: 400px;
  width: 90%;
  z-index: 1001;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(100, 255, 218, 0.2);
`;

const FunFactContent = styled.div`
  color: #E6F1FF;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;
  padding: 20px;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const FunFactTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.3);
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #64FFDA;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: rotate(90deg);
  }
`;

const funFacts = [
  "Did you know? 🎯 Adaptive learning can increase student performance by up to 30% compared to traditional methods!",
  "Fun fact: 💻 The first adaptive learning system was developed in the 1970s using a computer the size of a room!",
  "Interesting: ⚡ Students using adaptive learning complete courses 25% faster than traditional methods!",
  "Cool fact: 🎓 Adaptive learning can reduce study time by up to 50% while improving retention!",
  "Amazing: 🌟 90% of students report better engagement with adaptive learning systems!",
  "Fascinating: 🧠 Our AI can adapt to your learning style in real-time, just like a personal tutor!",
  "Exciting: 🚀 Adaptive learning platforms can process over 1 million data points per student!",
  "Wonderful: 💫 Students using adaptive learning show 40% higher confidence in their abilities!"
];

export const LandingPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showAIBubble, setShowAIBubble] = useState(false);
  const [aiMessage, setAIMessage] = useState("Hi! I'm your AI learning companion. How can I help you today?");
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAIClick = () => {
    setShowAIBubble(!showAIBubble);
    if (!showAIBubble) {
      const messages = [
        "Hi! I'm your AI learning companion. How can I help you today?",
        "Ready to start your learning journey? I'm here to guide you!",
        "Need help finding the right course? Just ask me!",
        "I can help you track your progress and suggest new courses!",
        "Let's make learning fun and effective together!"
      ];
      setAIMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
  };

  const handleFunFactClick = () => {
    setCurrentFact(Math.floor(Math.random() * funFacts.length));
    setShowFunFact(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <ScrollProgress style={{ scaleX: scrollYProgress }} />
        
        {/* Hero Section */}
        <HeroSection>
          <HeroContent
            animate={{
              rotateX: mousePosition.y * 0.3,
              rotateY: mousePosition.x * 0.3
            }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
          >
            <HeroText
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>Transform Your Learning Journey with AI</h1>
              <p>
                Experience personalized education that adapts to your learning style,
                pace, and goals. Our AI-powered platform helps you master new skills
                faster and more effectively.
              </p>
              <ButtonGroup>
                <Link to="/onboarding">
                  <PrimaryButton
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </PrimaryButton>
                </Link>
                <Link to="/courses">
                  <SecondaryButton
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Courses
                  </SecondaryButton>
                </Link>
              </ButtonGroup>
            </HeroText>
            <HeroImage
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FloatingCard
                className="card-1"
                initial={{ opacity: 0, y: -50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: hoveredCard === 'card-1' ? -5 : -15,
                  scale: hoveredCard === 'card-1' ? 1.05 : 1
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onHoverStart={() => setHoveredCard('card-1')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="icon">🎯</div>
                <h3>AI-Powered Learning</h3>
                <p>Personalized learning paths tailored to your goals and learning style</p>
              </FloatingCard>
              
              <FloatingCard
                className="card-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: hoveredCard === 'card-2' ? 5 : 15,
                  scale: hoveredCard === 'card-2' ? 1.05 : 1
                }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onHoverStart={() => setHoveredCard('card-2')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="icon">📊</div>
                <h3>Real-time Analytics</h3>
                <p>Track your progress with detailed insights and recommendations</p>
              </FloatingCard>
              
              <FloatingCard
                className="card-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: hoveredCard === 'card-3' ? 0 : -5,
                  scale: hoveredCard === 'card-3' ? 1.05 : 1
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onHoverStart={() => setHoveredCard('card-3')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="icon">🤖</div>
                <h3>Smart Recommendations</h3>
                <p>Get personalized content suggestions based on your performance</p>
              </FloatingCard>
            </HeroImage>
          </HeroContent>
        </HeroSection>

        {/* Features Section */}
        <FeaturesSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle>Key Features</SectionTitle>
          <FeaturesGrid>
            {[
              {
                icon: '🎯',
                title: 'Personalized Learning',
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
              }
            ].map((feature, index) => (
              <FeatureCard
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <FeatureIcon className="icon">{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesSection>

        {/* Learning Paths Section */}
        <LearningPathsSection>
          <SectionTitle>Learning Paths</SectionTitle>
          <PathsGrid>
            {[
              {
                title: 'Web Development',
                description: 'Master modern web technologies and build responsive applications.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
              },
              {
                title: 'Data Science',
                description: 'Learn data analysis, machine learning, and AI fundamentals.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              {
                title: 'Mobile Development',
                description: 'Create powerful mobile applications for iOS and Android.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              }
            ].map((path, index) => (
              <PathCard
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PathImage imageUrl={path.image} />
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </PathCard>
            ))}
          </PathsGrid>
        </LearningPathsSection>

        {/* Course Showcase */}
        <CourseShowcase>
          <SectionTitle>Featured Courses</SectionTitle>
          <CourseGrid>
            {[
              {
                title: 'Advanced Machine Learning',
                description: 'Master the latest ML algorithms and techniques',
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                duration: '12 weeks',
                level: 'Advanced'
              },
              {
                title: 'Web Development Bootcamp',
                description: 'Build modern web applications from scratch',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
                duration: '16 weeks',
                level: 'Intermediate'
              },
              {
                title: 'Data Science Fundamentals',
                description: 'Learn data analysis and visualization',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                duration: '10 weeks',
                level: 'Beginner'
              }
            ].map((course, index) => (
              <CourseCard
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseImage imageUrl={course.image} />
                <CourseContent>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
                  <CourseMeta>
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </CourseMeta>
                </CourseContent>
              </CourseCard>
            ))}
          </CourseGrid>
        </CourseShowcase>

        {/* Experience3D Section */}
        <Experience3D />

        {/* Learning Journey - Moved after Experience3D */}
        <LearningJourney
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle>Your Learning Journey</SectionTitle>
          <Timeline>
            {[
              {
                title: 'Assessment & Goal Setting',
                description: 'Take our AI-powered assessment to determine your current skill level and set personalized learning goals.',
                side: 'left'
              },
              {
                title: 'Personalized Learning Path',
                description: 'Get a customized curriculum that adapts to your learning style and pace.',
                side: 'right'
              },
              {
                title: 'Interactive Learning',
                description: 'Engage with interactive exercises, projects, and real-world applications.',
                side: 'left'
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your progress with detailed analytics and receive personalized recommendations.',
                side: 'right'
              }
            ].map((item, index) => (
              <TimelineItem
                key={item.title}
                side={item.side as 'left' | 'right'}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineContent>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </LearningJourney>

        {/* Interactive Demo */}
        <InteractiveDemo>
          <DemoContainer>
            <DemoContent>
              <h2>Experience the Future of Learning</h2>
              <p>
                Try our interactive demo and see how our AI-powered platform adapts to your learning style.
                Get a personalized experience that helps you learn faster and more effectively.
              </p>
              <DemoFeatures>
                <DemoFeature
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="icon">🎯</span>
                  <span className="text">Personalized Learning Path</span>
                </DemoFeature>
                <DemoFeature
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="icon">📊</span>
                  <span className="text">Real-time Progress Tracking</span>
                </DemoFeature>
                <DemoFeature
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="icon">🤖</span>
                  <span className="text">AI-Powered Recommendations</span>
                </DemoFeature>
                <DemoFeature
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="icon">🎮</span>
                  <span className="text">Interactive Exercises</span>
                </DemoFeature>
              </DemoFeatures>
              <ButtonGroup>
                <Link to="/demo">
                  <PrimaryButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Demo
                  </PrimaryButton>
                </Link>
              </ButtonGroup>
            </DemoContent>
            <DemoPreview>
              <DemoImage className="demo-image" />
              <DemoOverlay className="overlay">
                <PrimaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Launch Interactive Demo
                </PrimaryButton>
              </DemoOverlay>
            </DemoPreview>
          </DemoContainer>
        </InteractiveDemo>

        {/* AI Character */}
        <AICharacter
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={handleAIClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="ai-face">
            <div className="eye left" />
            <div className="eye right" />
            <div className="mouth" />
          </div>
        </AICharacter>

        <AnimatePresence>
          {showAIBubble && (
            <AIBubble
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {aiMessage}
            </AIBubble>
          )}
        </AnimatePresence>

        {/* Partners Section */}
        <PartnersSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle>Trusted by Leading Organizations</SectionTitle>
          <PartnersContainer>
            <PartnersGrid>
              {[
                {
                  name: 'Google',
                  type: 'Technology Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
                  stats: {
                    employees: '500+',
                    courses: '50+'
                  }
                },
                {
                  name: 'Microsoft',
                  type: 'Enterprise Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png',
                  stats: {
                    employees: '1000+',
                    courses: '75+'
                  }
                },
                {
                  name: 'Amazon',
                  type: 'Cloud Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
                  stats: {
                    employees: '800+',
                    courses: '60+'
                  }
                },
                {
                  name: 'IBM',
                  type: 'Research Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
                  stats: {
                    employees: '600+',
                    courses: '45+'
                  }
                },
                {
                  name: 'Apple',
                  type: 'Technology Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
                  stats: {
                    employees: '400+',
                    courses: '30+'
                  }
                },
                {
                  name: 'Meta',
                  type: 'Innovation Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
                  stats: {
                    employees: '300+',
                    courses: '25+'
                  }
                },
                {
                  name: 'Stanford',
                  type: 'Academic Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png',
                  stats: {
                    students: '2000+',
                    courses: '100+'
                  }
                },
                {
                  name: 'MIT',
                  type: 'Research Partner',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png',
                  stats: {
                    students: '1500+',
                    courses: '80+'
                  }
                }
              ].map((partner, index) => (
                <PartnerCard
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <PartnerLogo className="partner-logo">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      style={{
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.9
                      }}
                    />
                  </PartnerLogo>
                  <PartnerName className="partner-name">{partner.name}</PartnerName>
                  <PartnerType>{partner.type}</PartnerType>
                  <PartnerStats>
                    <Stat>
                      <div className="value">
                        {partner.stats.employees || partner.stats.students}
                      </div>
                      <div className="label">
                        {partner.stats.employees ? 'Employees Trained' : 'Students Enrolled'}
                      </div>
                    </Stat>
                    <Stat>
                      <div className="value">{partner.stats.courses}</div>
                      <div className="label">Courses</div>
                    </Stat>
                  </PartnerStats>
                </PartnerCard>
              ))}
            </PartnersGrid>
          </PartnersContainer>
        </PartnersSection>

        {/* Testimonials Section */}
        <TestimonialsSection>
          <SectionTitle>What Our Learners Say</SectionTitle>
          <TestimonialsGrid>
            {[
              {
                content: "The adaptive learning system has transformed how I learn. It's like having a personal tutor that knows exactly what I need.",
                author: "Sarah Johnson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                content: "I've tried many learning platforms, but this one stands out. The AI coach is incredibly helpful and responsive.",
                author: "Michael Chen",
                role: "Data Scientist",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                content: "The personalized learning paths and progress tracking have helped me achieve my goals faster than I expected.",
                author: "Emily Rodriguez",
                role: "UX Designer",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              }
            ].map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialContent>"{testimonial.content}"</TestimonialContent>
                <TestimonialAuthor>
                  <AuthorImage src={testimonial.image} alt={testimonial.author} />
                  <AuthorInfo>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>

        <FunFactButton
          onClick={handleFunFactClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💫
        </FunFactButton>

        <AnimatePresence>
          {showFunFact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(10, 25, 47, 0.8)',
                zIndex: 1000,
              }}
              onClick={() => setShowFunFact(false)}
            >
              <FunFactModal
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <CloseButton
                  onClick={() => setShowFunFact(false)}
                  whileHover={{ rotate: 90 }}
                >
                  ✕
                </CloseButton>
                <FunFactTitle>
                  <span>✨</span> Fun Fact <span>✨</span>
                </FunFactTitle>
                <FunFactContent>
                  {funFacts[currentFact]}
                </FunFactContent>
              </FunFactModal>
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </ThemeProvider>
  );
}; 