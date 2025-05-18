import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

interface CardProps {
  children: React.ReactNode;
  padding?: keyof Theme['spacing'];
  elevation?: keyof Theme['shadows'];
  borderRadius?: keyof Theme['borderRadius'];
  backgroundColor?: string;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.neutral[50]};
  padding: ${({ padding = 'lg', theme }) => theme.spacing[padding]};
  border-radius: ${({ borderRadius = 'lg', theme }) =>
    theme.borderRadius[borderRadius]};
  box-shadow: ${({ elevation = 'md', theme }) => theme.shadows[elevation]};
  transition: box-shadow ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ elevation = 'md', theme }) => theme.shadows[elevation]};
  }
`;

export const Card: React.FC<CardProps> = ({
  children,
  padding,
  elevation,
  borderRadius,
  backgroundColor,
}) => {
  return (
    <StyledCard
      padding={padding}
      elevation={elevation}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledCard>
  );
}; 