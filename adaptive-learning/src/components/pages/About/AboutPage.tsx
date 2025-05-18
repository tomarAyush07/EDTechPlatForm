import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxxl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: #E6F1FF;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #64FFDA;
    margin: ${({ theme }) => theme.spacing.md} auto;
    border-radius: 2px;
  }
`;

const ContentSection = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FounderSection = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FounderImage = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #64FFDA;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`;

const FounderInfo = styled.div`
  flex: 1;
`;

const FounderName = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const FounderRole = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: #64FFDA;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const FounderBio = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: #64FFDA;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #4FD1C5;
    transform: translateY(-3px);
    background: rgba(100, 255, 218, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const MissionSection = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #64FFDA;
    margin: ${({ theme }) => theme.spacing.md} auto;
    border-radius: 2px;
  }
`;

const MissionText = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const StatsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const StatCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(100, 255, 218, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  color: #64FFDA;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ValuesSection = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ValueCard = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ValueTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const ValueDescription = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.6;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  width: 90%;
  position: relative;
  border: 2px solid #64FFDA;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.2);
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: transparent;
  border: none;
  color: #64FFDA;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

const ModalText = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.8;
  text-align: center;
`;

const ShinchanImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: 3px solid #64FFDA;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`;

const FunFactButton = styled(motion.button)`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  border: 1px solid #64FFDA;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }
`;

const funFacts = [
  "Did you know? Our platform was inspired by Shinchan's curiosity and love for learning!",
  "Just like Shinchan, we believe learning should be fun and exciting!",
  "Our mascot, inspired by Shinchan, helps make learning more engaging!",
  "We use AI to adapt to each student's learning style, just like how Shinchan adapts to new situations!",
  "Our platform has helped over 50,000 students achieve their learning goals!",
  "Shinchan's favorite subject is now our most popular course!",
  "We have a special 'Shinchan's Learning Adventure' program for young learners!"
];

const achievements = [
  {
    title: "Best EdTech Platform 2025",
    description: "Recognized for innovative learning solutions",
    icon: "🏆"
  },
  {
    title: "Global Impact Award",
    description: "Reaching students in 50+ countries",
    icon: "🌍"
  },
  {
    title: "AI Innovation Prize",
    description: "Leading in adaptive learning technology",
    icon: "🤖"
  },
  {
    title: "Student Success Rate",
    description: "95% of students achieve their goals",
    icon: "📈"
  }
];

const teamMembers = [
  {
    name: "Shinchan's Learning Squad",
    role: "Educational Experts",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Our team of passionate educators, inspired by Shinchan's curiosity"
  },
  {
    name: "Tech Wizards",
    role: "Development Team",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Creating magical learning experiences with cutting-edge technology"
  }
];

const AchievementsSection = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const AchievementCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const AchievementIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AchievementTitle = styled.h3`
  color: #64FFDA;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const AchievementDescription = styled.p`
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const TeamSection = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TeamCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  border: 3px solid #64FFDA;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const AboutPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 30,
      transition: {
        duration: 0.3
      }
    }
  };

  const showRandomFact = () => {
    setCurrentFact(Math.floor(Math.random() * funFacts.length));
    setShowModal(true);
  };

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </PageTitle>

      <ContentSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <FounderSection variants={itemVariants}>
          <FounderImage
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <img src="https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg" alt="Ayush Singh Tomar" />
          </FounderImage>
          <FounderInfo>
            <FounderName>Ayush Singh Tomar</FounderName>
            <FounderRole>Founder & CEO</FounderRole>
            <FounderBio>
              A visionary leader and passionate educator with over 8 years of experience in educational technology. 
              Ayush founded Adaptive Learning in 2025 with a mission to revolutionize personalized education through 
              innovative technology and data-driven approaches. His expertise in AI and machine learning has been 
              instrumental in creating our adaptive learning platform. Inspired by Shinchan's curiosity and love for 
              learning, Ayush has created a platform that makes education fun, engaging, and effective for everyone.
            </FounderBio>
            <SocialLinks>
              <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: 10 }}>
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: -10 }}>
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: 10 }}>
                <i className="fab fa-github"></i>
              </SocialLink>
            </SocialLinks>
            <FunFactButton
              onClick={showRandomFact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click for a Fun Fact! 🎉
            </FunFactButton>
          </FounderInfo>
        </FounderSection>

        <MissionSection variants={itemVariants}>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionText>
            At Adaptive Learning, we're committed to transforming education through personalized learning experiences. 
            Our mission is to make quality education accessible to everyone by leveraging cutting-edge technology and 
            innovative teaching methods. We believe that every learner is unique, and our platform adapts to individual 
            learning styles, pace, and goals. Inspired by Shinchan's curiosity and enthusiasm, we make learning fun 
            and engaging while maintaining high educational standards.
          </MissionText>
        </MissionSection>

        <AchievementsSection variants={itemVariants}>
          <SectionTitle>Our Achievements</SectionTitle>
          <AchievementsGrid>
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AchievementIcon>{achievement.icon}</AchievementIcon>
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementDescription>{achievement.description}</AchievementDescription>
              </AchievementCard>
            ))}
          </AchievementsGrid>
        </AchievementsSection>

        <TeamSection variants={itemVariants}>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.name}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamImage
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img src={member.image} alt={member.name} />
                </TeamImage>
                <ValueTitle>{member.name}</ValueTitle>
                <ValueDescription>{member.description}</ValueDescription>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>

        <StatsSection variants={itemVariants}>
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatNumber>50K+</StatNumber>
            <StatLabel>Active Students</StatLabel>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatNumber>100+</StatNumber>
            <StatLabel>Courses Available</StatLabel>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatNumber>95%</StatNumber>
            <StatLabel>Success Rate</StatLabel>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }}>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support Available</StatLabel>
          </StatCard>
        </StatsSection>

        <ValuesSection variants={itemVariants}>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard whileHover={{ scale: 1.02 }}>
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We constantly push the boundaries of educational technology to create better learning experiences.
              </ValueDescription>
            </ValueCard>
            <ValueCard whileHover={{ scale: 1.02 }}>
              <ValueTitle>Accessibility</ValueTitle>
              <ValueDescription>
                We believe education should be accessible to everyone, regardless of their background or circumstances.
              </ValueDescription>
            </ValueCard>
            <ValueCard whileHover={{ scale: 1.02 }}>
              <ValueTitle>Excellence</ValueTitle>
              <ValueDescription>
                We strive for excellence in everything we do, from course content to user experience.
              </ValueDescription>
            </ValueCard>
            <ValueCard whileHover={{ scale: 1.02 }}>
              <ValueTitle>Community</ValueTitle>
              <ValueDescription>
                We foster a supportive learning community where students can grow and succeed together.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <AnimatePresence>
          {showModal && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalContent
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <CloseButton
                  onClick={() => setShowModal(false)}
                  whileHover={{ rotate: 90 }}
                >
                  ×
                </CloseButton>
                <ShinchanImage
                  initial={{ rotateY: -30 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Team Celebration" />
                </ShinchanImage>
                <ModalTitle>Fun Fact!</ModalTitle>
                <ModalText>{funFacts[currentFact]}</ModalText>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </ContentSection>
    </PageContainer>
  );
}; 