import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { theme } from '../../../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0A192F;
  color: #E6F1FF;
`;

const HeroSection = styled(motion.section)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
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
    opacity: 0.15;
    z-index: 0;
    filter: blur(4px);
  }
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const ResourceCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

    .resource-image {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .resource-icon {
      transform: scale(1.1) rotate(5deg);
      color: #64FFDA;
    }
  }
`;

const ResourceImage = styled(motion.div)<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(17, 34, 64, 0.9));
  }
`;

const ResourceIcon = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
`;

const ResourceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #E6F1FF;
`;

const ResourceDescription = styled.p`
  color: #8892B0;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ResourceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const ResourceTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const ResourceStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const resources = [
  {
    id: 1,
    title: 'Interactive Coding Challenges',
    description: 'Practice coding with real-world challenges and get instant feedback',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: '💻',
    tag: 'Coding',
    stats: {
      challenges: '100+',
      difficulty: 'Beginner to Advanced'
    }
  },
  {
    id: 2,
    title: 'Video Tutorials',
    description: 'High-quality video content from industry experts',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: '🎥',
    tag: 'Video',
    stats: {
      videos: '500+',
      duration: '5-30 min'
    }
  },
  {
    id: 3,
    title: 'E-Books & Documentation',
    description: 'Comprehensive guides and documentation for all topics',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    icon: '📚',
    tag: 'Reading',
    stats: {
      books: '50+',
      pages: '1000+'
    }
  },
  {
    id: 4,
    title: 'Community Projects',
    description: 'Collaborate with other learners on real-world projects',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: '👥',
    tag: 'Community',
    stats: {
      projects: '200+',
      members: '1000+'
    }
  },
  {
    id: 5,
    title: 'Practice Exercises',
    description: 'Reinforce your learning with hands-on exercises',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    icon: '✍️',
    tag: 'Practice',
    stats: {
      exercises: '300+',
      categories: '10+'
    }
  },
  {
    id: 6,
    title: 'Webinars & Workshops',
    description: 'Live sessions with industry experts and mentors',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: '🎓',
    tag: 'Live',
    stats: {
      sessions: '50+',
      experts: '20+'
    }
  }
];

export const ResourcesPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <PageContainer>
      <HeroSection style={{ y: headerY }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.h1
            style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Learning Resources
          </motion.h1>
          <motion.p
            style={{
              fontSize: '1.25rem',
              color: '#8892B0',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Explore our comprehensive collection of learning resources designed to help you
            master new skills and advance your career.
          </motion.p>
        </motion.div>
      </HeroSection>

      <ResourceGrid>
        {resources.map((resource, index) => (
          <ResourceCard
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ResourceImage
              imageUrl={resource.image}
              className="resource-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            />
            <ResourceIcon className="resource-icon">{resource.icon}</ResourceIcon>
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceDescription>{resource.description}</ResourceDescription>
            <ResourceMeta>
              <ResourceTag>{resource.tag}</ResourceTag>
              <ResourceStats>
                <span>{resource.stats.challenges || resource.stats.videos || resource.stats.books || resource.stats.projects || resource.stats.exercises || resource.stats.sessions}</span>
                <span>{resource.stats.difficulty || resource.stats.duration || resource.stats.pages || resource.stats.members || resource.stats.categories || resource.stats.experts}</span>
              </ResourceStats>
            </ResourceMeta>
          </ResourceCard>
        ))}
      </ResourceGrid>
    </PageContainer>
  );
}; 