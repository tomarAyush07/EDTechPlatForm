import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../atoms';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0A192F 0%, #112240 100%);
  color: #E6F1FF;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  backdrop-filter: blur(10px);
  background: rgba(10, 25, 47, 0.8);
  border-bottom: 1px solid rgba(230, 241, 255, 0.1);
`;

const Logo = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #64FFDA;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #BAE3FF;
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #64FFDA;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #0A192F;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
`;

const NavLink = styled(motion(Link))<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#64FFDA' : '#E6F1FF')};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #64FFDA;
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #64FFDA;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Height of the navbar
  min-height: calc(100vh - 80px - 400px); // Viewport height minus navbar and footer
`;

const Footer = styled.footer`
  background: #0A192F;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  border-top: 1px solid rgba(230, 241, 255, 0.1);
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: #64FFDA;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;

const FooterDescription = styled.p`
  color: #8892B0;
  margin-top: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 400px;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 400px;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: rgba(230, 241, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #E6F1FF;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  height: 40px;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #64FFDA;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: #8892B0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64FFDA;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  &:hover {
    background: #64FFDA;
    color: #0A192F;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.2);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: #8892B0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-top: 1px solid rgba(230, 241, 255, 0.1);
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled.li`
  a {
    color: #8892B0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    display: inline-block;
    padding: ${({ theme }) => theme.spacing.xs} 0;

    &:hover {
      color: #64FFDA;
      transform: translateX(4px);
    }
  }
`;

const DashboardButton = styled(Button)`
  background: rgba(100, 255, 218, 0.1);
  color: #64FFDA;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 1px solid #64FFDA;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.1);
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  onLogoClick?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogoClick }) => {
  const location = useLocation();

  return (
    <PageContainer>
      <Navbar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo
          to="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onLogoClick}
        >
          <LogoIcon>AL</LogoIcon>
          AdaptiveLearn
        </Logo>
        <NavLinks>
          {[
            { name: 'Courses', href: '/courses' },
            { name: 'Features', href: '/features' },
            { name: 'Resources', href: '/resources' },
            { name: 'Blog', href: '/blog' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              isActive={location.pathname === link.href}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/dashboard">
            <DashboardButton
              variant="outline"
              size="md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Dashboard
            </DashboardButton>
          </Link>
        </NavLinks>
      </Navbar>

      <MainContent>
        {children}
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterColumn>
            <Logo to="/">
              <LogoIcon>AL</LogoIcon>
              AdaptiveLearn
            </Logo>
            <FooterDescription>
              Empowering learners worldwide with AI-driven education. Join our community
              and transform your learning journey today.
            </FooterDescription>
            <NewsletterForm>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <Button
                variant="primary"
                size="sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </Button>
            </NewsletterForm>
            <SocialLinks>
              {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                <SocialLink
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`fab fa-${social}`} />
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Platform</h3>
            <FooterLinks>
              {[
                { name: 'Features', path: '/features' },
                { name: 'Learning Paths', path: '/learning-paths' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <FooterLink key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Company</h3>
            <FooterLinks>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((link) => (
                <FooterLink key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Support</h3>
            <FooterLinks>
              {[
                { name: 'Help Center', path: '/help' },
                { name: 'Documentation', path: '/docs' },
                { name: 'Community', path: '/community' },
                { name: 'Status', path: '/status' },
                { name: 'Contact Support', path: '/support' }
              ].map((link) => (
                <FooterLink key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        <FooterBottom>
          <p>© 2025 AdaptiveLearn. All rights reserved.</p>
          <div>
            <Link to="/privacy" style={{ color: '#8892B0', marginRight: '1rem' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#8892B0' }}>Terms of Service</Link>
          </div>
        </FooterBottom>
      </Footer>
    </PageContainer>
  );
}; 