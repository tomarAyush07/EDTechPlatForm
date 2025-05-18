import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary[50]}, ${({ theme }) => theme.colors.primary[100]});
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Headline = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subheadline = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CTAButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
`;

const Illustration = styled(motion.img)`
  width: 400px;
  max-width: 90vw;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  max-width: 260px;
  flex: 1 1 220px;
`;

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.primary[50]};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  margin: 0 ${({ theme }) => theme.spacing.md};
  display: inline-block;
  max-width: 350px;
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero>
        <Headline initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          Unlock Your Potential with Adaptive Learning
        </Headline>
        <Subheadline initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          The all-in-one platform for mastering skills, building habits, and boosting productivity—powered by AI.
        </Subheadline>
        <CTAButton variant="primary" size="lg">Get Started Free</CTAButton>
        <Illustration
          src="/illustrations/hero-animated.svg"
          alt="Adaptive Learning Illustration"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </Hero>

      <FeaturesSection>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <img src="/icons/ai.svg" alt="AI" width={48} />
          <h3>AI Recommendations</h3>
          <p>Personalized study paths and productivity tips powered by AI.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <img src="/icons/progress.svg" alt="Progress" width={48} />
          <h3>Progress Analytics</h3>
          <p>Visualize your mastery, confidence, and daily achievements.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <img src="/icons/habits.svg" alt="Habits" width={48} />
          <h3>Habit Tracker</h3>
          <p>Build and track habits for learning and life.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <img src="/icons/music.svg" alt="Focus Music" width={48} />
          <h3>Focus Music</h3>
          <p>Curated playlists to help you focus and relax.</p>
        </FeatureCard>
        <FeatureCard whileHover={{ scale: 1.05 }}>
          <img src="/icons/community.svg" alt="Community" width={48} />
          <h3>Community</h3>
          <p>Join study groups, compete on leaderboards, and grow together.</p>
        </FeatureCard>
      </FeaturesSection>

      <TestimonialsSection>
        <h2>What Our Users Say</h2>
        <TestimonialCard initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p>“This platform changed the way I learn and stay productive. The AI coach is a game changer!”</p>
          <strong>- Alex, Student</strong>
        </TestimonialCard>
        <TestimonialCard initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <p>“I love the habit tracker and the beautiful dashboard. It keeps me motivated every day.”</p>
          <strong>- Priya, Developer</strong>
        </TestimonialCard>
      </TestimonialsSection>

      <Footer>
        &copy; {new Date().getFullYear()} Adaptive Learning Platform &mdash; Made with ❤️ for lifelong learners.
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ color: '#818CF8', margin: '0 0.5rem' }}>About</a>
          <a href="#" style={{ color: '#818CF8', margin: '0 0.5rem' }}>Privacy</a>
          <a href="#" style={{ color: '#818CF8', margin: '0 0.5rem' }}>Contact</a>
        </div>
      </Footer>
    </>
  );
}; 