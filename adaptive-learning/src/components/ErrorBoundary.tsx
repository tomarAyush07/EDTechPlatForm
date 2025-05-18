import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ErrorContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(17, 34, 64, 0.95);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(100, 255, 218, 0.1);
  color: #E6F1FF;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl};
`;

const ErrorTitle = styled.h2`
  color: #64FFDA;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
`;

const ErrorMessage = styled.p`
  color: #8892B0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const RetryButton = styled.button`
  background: #64FFDA;
  color: #0A192F;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4CD8B2;
    transform: translateY(-2px);
  }
`;

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || 'An unexpected error occurred'}
          </ErrorMessage>
          <RetryButton onClick={() => window.location.reload()}>
            Refresh Page
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
} 