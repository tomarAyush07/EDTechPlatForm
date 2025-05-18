import { css, Theme } from '@emotion/react';
import './types';

export const globalStyles = (theme: Theme) => css`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.5;
    color: ${theme.colors.neutral[900]};
    background-color: ${theme.colors.neutral[50]};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.secondary};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.typography.fontSize.xxxl};
  }

  h2 {
    font-size: ${theme.typography.fontSize.xxl};
  }

  h3 {
    font-size: ${theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  /* Links */
  a {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
    transition: color ${theme.transitions.fast} ease;

    &:hover {
      color: ${theme.colors.primary[700]};
    }
  }

  /* Lists */
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${theme.spacing.md};
  }

  /* Forms */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${theme.spacing.md};
  }

  th, td {
    padding: ${theme.spacing.sm};
    border-bottom: 1px solid ${theme.colors.neutral[200]};
    text-align: left;
  }

  th {
    font-weight: ${theme.typography.fontWeight.semibold};
    background-color: ${theme.colors.neutral[100]};
  }

  /* Code */
  code {
    font-family: ${theme.typography.fontFamily.mono};
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    background-color: ${theme.colors.neutral[100]};
    border-radius: ${theme.borderRadius.sm};
  }

  pre {
    font-family: ${theme.typography.fontFamily.mono};
    padding: ${theme.spacing.md};
    background-color: ${theme.colors.neutral[100]};
    border-radius: ${theme.borderRadius.md};
    overflow-x: auto;
    margin-bottom: ${theme.spacing.md};

    code {
      padding: 0;
      background-color: transparent;
    }
  }

  /* Focus styles */
  :focus {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Selection */
  ::selection {
    background-color: ${theme.colors.primary[200]};
    color: ${theme.colors.primary[900]};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.neutral[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.neutral[300]};
    border-radius: ${theme.borderRadius.full};

    &:hover {
      background: ${theme.colors.neutral[400]};
    }
  }

  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`; 