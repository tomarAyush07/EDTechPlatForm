import React from 'react';
import styled from '@emotion/styled';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'onAnimationStart'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return `
        background: #64FFDA;
        color: #0A192F;
        &:hover {
          background: #4FD1C5;
        }
        &:active {
          background: #3DB8A8;
        }
      `;
    case 'secondary':
      return `
        background: #112240;
        color: #E6F1FF;
        &:hover {
          background: #1D3461;
        }
        &:active {
          background: #2A4B8C;
        }
      `;
    case 'outline':
      return `
        background: transparent;
        border: 2px solid #64FFDA;
        color: #64FFDA;
        &:hover {
          background: rgba(100, 255, 218, 0.1);
        }
        &:active {
          background: rgba(100, 255, 218, 0.2);
        }
      `;
    case 'ghost':
      return `
        background: transparent;
        color: #64FFDA;
        &:hover {
          background: rgba(100, 255, 218, 0.1);
        }
        &:active {
          background: rgba(100, 255, 218, 0.2);
        }
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return `
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      `;
    case 'md':
      return `
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.typography.fontSize.md};
      `;
    case 'lg':
      return `
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
      `;
  }
};

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  position: relative;
  overflow: hidden;

  ${({ variant = 'primary' }) => getVariantStyles(variant)}
  ${({ size = 'md' }) => getSizeStyles(size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  .loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const Button: React.FC<Omit<ButtonProps, 'children'> & { children: React.ReactNode }> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {isLoading ? (
        <div className="loading-spinner" />
      ) : (
        <div className="button-content">
          {leftIcon}
          {children}
          {rightIcon}
        </div>
      )}
    </StyledButton>
  );
}; 