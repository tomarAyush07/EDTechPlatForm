import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { theme } from '../../../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0A192F;
  color: #E6F1FF;
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
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

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  line-height: 1.1;
  background: linear-gradient(120deg, #E6F1FF 0%, #64FFDA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(100, 255, 218, 0.2);
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FloatingEmoji = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  pointer-events: none;
  z-index: 10;
`;

const FeatureCard = styled(motion.div)`
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
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(100, 255, 218, 0.1);

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

    .feature-image {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    .floating-emoji {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FeatureImage = styled(motion.div)<{ imageUrl: string }>`
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

const FeatureContent = styled(motion.div)`
  transform-style: preserve-3d;
  transform: translateZ(20px);
`;

const FeatureIcon = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #8892B0;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(30px);
`;

const FeatureTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #E6F1FF;
  transition: color 0.3s ease;
  transform-style: preserve-3d;
  transform: translateZ(25px);
`;

const FeatureDescription = styled(motion.p)`
  color: #8892B0;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transform-style: preserve-3d;
  transform: translateZ(20px);
`;

const FeatureBenefits = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
  transform-style: preserve-3d;
  transform: translateZ(15px);

  li {
    color: #E6F1FF;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    transition: all 0.3s ease;

    &::before {
      content: '→';
      color: #64FFDA;
    }

    &:hover {
      transform: translateX(10px);
      color: #64FFDA;
    }
  }
`;

const FeatureBadge = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: #64FFDA;
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(5px);
`;

const FeatureStats = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const Stat = styled(motion.div)`
  text-align: center;
  flex: 1;

  .value {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: #64FFDA;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  .label {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: #8892B0;
  }
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
    background: url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
    filter: blur(4px);
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
  }

  p {
    color: #8892B0;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.6;
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
  background: url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
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

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #64FFDA;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #0A192F;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #53C4FF;
  }

  &:active {
    background: #4299E0;
  }
`;

const features = [
  {
    id: 1,
    icon: '🎯',
    title: 'AI-Powered Learning Paths',
    description: 'Experience truly personalized learning with our advanced AI algorithms',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    badge: 'New',
    stats: {
      users: '10K+',
      satisfaction: '98%'
    },
    benefits: [
      'Dynamic content adaptation based on your performance',
      'Personalized difficulty scaling',
      'Custom learning pace optimization',
      'Individual progress tracking'
    ]
  },
  {
    id: 2,
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your learning journey with comprehensive analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    benefits: [
      'Real-time performance metrics',
      'Learning pattern analysis',
      'Progress visualization',
      'Achievement tracking'
    ]
  },
  {
    id: 3,
    icon: '🤖',
    title: 'Intelligent AI Tutors',
    description: 'Get instant, personalized assistance from our AI tutors',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    benefits: [
      '24/7 availability',
      'Context-aware responses',
      'Personalized feedback',
      'Adaptive explanations'
    ]
  },
  {
    id: 4,
    icon: '🎮',
    title: 'Interactive Learning',
    description: 'Engage with hands-on exercises and real-world projects',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    benefits: [
      'Interactive coding challenges',
      'Real-world project scenarios',
      'Live coding environments',
      'Peer code reviews'
    ]
  },
  {
    id: 5,
    icon: '📱',
    title: 'Cross-Platform Learning',
    description: 'Learn seamlessly across all your devices',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    benefits: [
      'Responsive design',
      'Offline mode support',
      'Cross-device sync',
      'Mobile-optimized content'
    ]
  },
  {
    id: 6,
    icon: '👥',
    title: 'Collaborative Learning',
    description: 'Connect with peers and learn through collaboration',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    benefits: [
      'Real-time collaboration',
      'Group projects',
      'Peer mentoring',
      'Knowledge sharing'
    ]
  }
];

export const FeaturesPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number }>>([]);

  const addFloatingEmoji = (e: React.MouseEvent, emoji: string) => {
    const newEmoji = {
      id: Date.now(),
      emoji,
      x: e.clientX,
      y: e.clientY
    };
    setFloatingEmojis(prev => [...prev, newEmoji]);
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
    }, 2000);
  };

  return (
    <PageContainer>
      <HeroSection style={{ y: headerY }}>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Learning Experience
          </HeroTitle>
          <HeroDescription
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how our AI-powered platform revolutionizes learning with cutting-edge features
            designed to maximize your success and accelerate your growth.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredFeature(feature.id)}
            onHoverEnd={() => setHoveredFeature(null)}
            onClick={(e) => addFloatingEmoji(e, feature.icon)}
          >
            {feature.badge && (
              <FeatureBadge
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {feature.badge}
              </FeatureBadge>
            )}
            <FeatureImage
              imageUrl={feature.image}
              className="feature-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            />
            <FeatureContent>
              <FeatureIcon className="icon">{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureBenefits>
                {feature.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, color: '#64FFDA' }}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </FeatureBenefits>
              {feature.stats && (
                <FeatureStats>
                  <Stat>
                    <div className="value">{feature.stats.users}</div>
                    <div className="label">Active Users</div>
                  </Stat>
                  <Stat>
                    <div className="value">{feature.stats.satisfaction}</div>
                    <div className="label">Satisfaction</div>
                  </Stat>
                </FeatureStats>
              )}
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      <InteractiveDemo>
        <DemoContainer>
          <DemoContent>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experience the Future of Learning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Try our interactive demo and see how our AI-powered platform adapts to your learning style.
              Get a personalized experience that helps you learn faster and more effectively.
            </motion.p>
          </DemoContent>
          <DemoPreview
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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

      <AnimatePresence>
        {floatingEmojis.map(emoji => (
          <FloatingEmoji
            key={emoji.id}
            initial={{ opacity: 0, y: emoji.y, x: emoji.x }}
            animate={{ opacity: 1, y: emoji.y - 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {emoji.emoji}
          </FloatingEmoji>
        ))}
      </AnimatePresence>
    </PageContainer>
  );
}; 