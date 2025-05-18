import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import * as d3 from 'd3';
import { useKnowledgeMap, Node, Link } from '../../../hooks/useKnowledgeMap';

interface KnowledgeMapProps {
  nodes: Node[];
  links: Link[];
}

const MapContainer = styled(motion.div)`
  width: 100%;
  height: 600px;
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Legend = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[800]};

  h4 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.xs};

    &:last-child {
      margin-bottom: 0;
    }
  }

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  .link-legend {
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.neutral[400]};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

export const KnowledgeMap: React.FC<KnowledgeMapProps> = ({ nodes, links }) => {
  const svgRef = useKnowledgeMap(nodes, links);

  return (
    <MapContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <svg ref={svgRef}></svg>
      <Legend>
        <h4>Legend</h4>
        <div>
          <span style={{ background: '#47A3F3' }}></span> High Mastery
        </div>
        <div>
          <span style={{ background: '#FADB5F' }}></span> Medium Mastery
        </div>
        <div>
          <span style={{ background: '#F86A6A' }}></span> Low Mastery
        </div>
        <div>
          <div className="link-legend"></div> Connection Strength
        </div>
      </Legend>
    </MapContainer>
  );
}; 