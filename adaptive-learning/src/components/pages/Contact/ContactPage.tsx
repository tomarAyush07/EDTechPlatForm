import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  padding: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.05;
    z-index: 0;
    transform: translateZ(-100px);
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) rotateX(2deg) rotateY(2deg);
  }
`;

const FormGroup = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  color: #E6F1FF;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
    transform: translateZ(10px);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
    transform: translateZ(10px);
  }
`;

const SubmitButton = styled(motion.button)`
  background: #64FFDA;
  color: #0A192F;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transform: translateZ(-10px);
    transition: all 0.3s ease;
  }

  &:hover {
    background: #4FD1C5;
    transform: translateZ(20px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);

    &::before {
      transform: translateZ(-20px);
    }
  }

  &:active {
    transform: translateZ(10px);
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateZ(20px) rotateX(-2deg) rotateY(-2deg);
  }
`;

const InfoTitle = styled.h2`
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

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(10, 25, 47, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.05);
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transform: translateZ(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateZ(15px) translateX(10px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateZ(-15px);
    }

    .info-icon {
      transform: translateZ(20px) rotateY(180deg);
    }
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #64FFDA;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  class: info-icon;
`;

const InfoText = styled.div`
  color: #8892B0;
`;

const InfoLabel = styled.div`
  color: #E6F1FF;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  color: #64FFDA;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.1);
    border-radius: 50%;
    transform: translateZ(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #4FD1C5;
    transform: translateZ(20px) rotateY(180deg);
    background: rgba(100, 255, 218, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateZ(-20px);
    }
  }
`;

const MapContainer = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  iframe {
    transform-style: preserve-3d;
    transition: all 0.3s ease;
  }
`;

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </PageTitle>

      <ContactGrid>
        <ContactForm
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <FormGroup
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>

        <ContactInfo
          variants={infoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <InfoTitle>Get in Touch</InfoTitle>
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <i className="fas fa-map-marker-alt"></i>
            </InfoIcon>
            <InfoText>
              ABES Engineering College<br />
              19th KM Stone, NH-24, Ghaziabad<br />
              Uttar Pradesh, India - 201009
            </InfoText>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <i className="fas fa-phone"></i>
            </InfoIcon>
            <InfoText>
              +91 9876543210<br />
              +91 9876543211
            </InfoText>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <i className="fas fa-envelope"></i>
            </InfoIcon>
            <InfoText>
              info@adaptivelearning.com<br />
              support@adaptivelearning.com
            </InfoText>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoIcon>
              <i className="fas fa-clock"></i>
            </InfoIcon>
            <InfoText>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM
            </InfoText>
          </InfoItem>

          <SocialLinks>
            <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: 10 }}>
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: -10 }}>
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: 10 }}>
              <i className="fab fa-facebook"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" whileHover={{ scale: 1.1, rotate: -10 }}>
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>

          <MapContainer variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8766503781724!2d77.4932!3d28.6698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </ContactInfo>
      </ContactGrid>
    </PageContainer>
  );
}; 