import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Theme } from '@emotion/react';

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  masteryLevel: number;
  confidenceLevel: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: Node;
  target: Node;
  strength: number;
}

interface KnowledgeMapConfig {
  width: number;
  height: number;
  nodeRadius: number;
  linkDistance: number;
  chargeStrength: number;
}

const defaultConfig: KnowledgeMapConfig = {
  width: 800,
  height: 600,
  nodeRadius: 30,
  linkDistance: 100,
  chargeStrength: -100,
};

export const useKnowledgeMap = (
  nodes: Node[],
  links: Link[],
  config: Partial<KnowledgeMapConfig> = {}
) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<Node, Link> | null>(null);

  const createSimulation = () => {
    const mergedConfig = { ...defaultConfig, ...config };

    return d3
      .forceSimulation<Node>(nodes)
      .force(
        'link',
        d3
          .forceLink<Node, Link>(links)
          .id((d) => d.id)
          .distance(mergedConfig.linkDistance)
      )
      .force('charge', d3.forceManyBody().strength(mergedConfig.chargeStrength))
      .force('center', d3.forceCenter(mergedConfig.width / 2, mergedConfig.height / 2));
  };

  const drawNodes = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => {
    const nodeGroup = svg
      .selectAll<SVGGElement, Node>('.node')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .call(
        d3
          .drag<SVGGElement, Node>()
          .on('start', (event, d) => {
            if (!event.active) simulationRef.current?.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulationRef.current?.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    nodeGroup
      .append('circle')
      .attr('r', defaultConfig.nodeRadius)
      .attr('fill', (d) => {
        const hue = (d.masteryLevel / 100) * 120; // 0-120 for red to green
        return `hsl(${hue}, 70%, 50%)`;
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    nodeGroup
      .append('text')
      .text((d) => d.label)
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('fill', '#fff')
      .style('font-size', '12px')
      .style('pointer-events', 'none');
  };

  const drawLinks = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => {
    svg
      .selectAll('.link')
      .data(links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', (d) => d.strength * 2);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    simulationRef.current = createSimulation();

    drawLinks(svg);
    drawNodes(svg);

    simulationRef.current.on('tick', () => {
      svg
        .selectAll<SVGLineElement, Link>('.link')
        .attr('x1', (d) => d.source.x || 0)
        .attr('y1', (d) => d.source.y || 0)
        .attr('x2', (d) => d.target.x || 0)
        .attr('y2', (d) => d.target.y || 0);

      svg
        .selectAll<SVGGElement, Node>('.node')
        .attr('transform', (d) => `translate(${d.x || 0},${d.y || 0})`);
    });

    return () => {
      simulationRef.current?.stop();
    };
  }, [nodes, links, config]);

  return svgRef;
}; 