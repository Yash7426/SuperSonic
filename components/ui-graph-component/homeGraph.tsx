"use client"
import {
  ReactFlow,
  type ProOptions,
  ReactFlowProvider,
  type NodeOrigin,
  addEdge,
  type OnConnect,
  Background,
  type Edge,
  type Node,
  Controls,
  Handle,
  Position, 
  applyEdgeChanges, 
  applyNodeChanges,
  type EdgeChange,
  type NodeChange
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import useForceLayout from "@/hooks/use-force-layout";

export const initialNodes: Node[] = [
  // social sentiment analyzer
  {
    id: "2",
    position: { x: 0, y: 200 },
    data: {
      icon: "BotMessageSquare",
      name: "Sentiment Analyzer",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "2.11",
    position: { x: 0, y: 200 },
    data: {
      icon: "BotMessageSquare",
      name: "ZerePy Social AI-Agent",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "2.1",
    position: { x: 200, y: 500 },
    data: {
      icon: "Twitter",
      name: "Twitter API",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "2.2",
    position: { x: -200, y: 500 },
    data: {
      icon: "MessagesSquare",
      name: "Telegram",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "2.3",
    position: { x: -200, y: 500 },
    data: {
      icon: "MessagesSquare",
      name: "Discord",
    },
    className: styles.node,
    type: "agent",
  },
  // financial sentiment analyzer
  {
    id: "3",
    position: { x: -300, y: 0 },
    data: {
      icon: "ChartCandlestick",
      name: "AI based Arbitrage Predection",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "3.1",
    position: { x: -500, y: 200 },
    data: {
      icon: "Landmark",
      name: "Prophet ML Model",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "3.11",
    position: { x: -500, y: 200 },
    data: {
      icon: "Landmark",
      name: "DEX Aggretator",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "3.111",
    position: { x: -500, y: 200 },
    data: {
      icon: "Landmark",
      name: "DEX A",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "3.112",
    position: { x: -500, y: 200 },
    data: {
      icon: "Landmark",
      name: "DEX B",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "3.113",
    position: { x: -500, y: -200 },
    data: {
      icon: "Droplet",
      name: "DEX C",
    },
    className: styles.node,
    type: "agent",
  },
  // news sentiment analyzer
  {
    id: "4",
    position: { x: 300, y: 0 },
    data: {
      icon: "Tractor",
      name: "Yield Farmer",
    },
    className: styles.node,
    type: "agent",
  },
  // news sentiment analyzer
  {
    id: "4.1",
    position: { x: 500, y: 200 },
    data: {
      icon: "Beef",
      name: "Liquid Staking Agent",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "4.11",
    position: { x: 500, y: -200 },
    data: {
      icon: "Coins",
      name: "Beets Staked Sonic",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "4.12",
    position: { x: 500, y: -200 },
    data: {
      icon: "Coins",
      name: "Origin Sonic",
    },
    className: styles.node,
    type: "agent",
  },
  // news sentiment analyzer
  {
    id: "5",
    position: { x: 0, y: -300 },
    data: {
      icon: "Vault",
      name: "Cross-chain Transactions",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "5.1",
    position: { x: -200, y: -500 },
    data: {
      icon: "ShieldAlert",
      name: "debridge",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "6",
    position: { x: 200, y: -500 },
    data: {
      icon: "ChartLine",
      name: "AI Chat agent",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "6.1",
    position: { x: 200, y: -500 },
    data: {
      icon: "ChartLine",
      name: "ZerePy LLM",
    },
    className: styles.node,
    type: "agent",
  },
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: "SUPERSONIC",
    },
    className: styles.node,
    type: "central",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "1->2",
    source: "1",
    target: "2",
  },
  // {
  //   id: "2->2.1",
  //   source: "2",
  //   target: "2.1",
  // },
  // {
  //   id: "2->2.2",
  //   source: "2",
  //   target: "2.2",
  // },
  // {
  //   id: "2->2.3",
  //   source: "2",
  //   target: "2.3",
  // },
  {
    id: "2->2.11",
    source: "2",
    target: "2.11",
  },
  {
    id: "2.11->2.1",
    source: "2.11",
    target: "2.1",
  },
  {
    id: "2.11->2.3",
    source: "2.11",
    target: "2.3",
  },
  {
    id: "2.11->2.2",
    source: "2.11",
    target: "2.2",
  },
  {
    id: "1->3",
    source: "1",
    target: "3",
  },
  {
    id: "3->3.1",
    source: "3",
    target: "3.1",
  },
  {
    id: "3.1->3.11",
    source: "3.1",
    target: "3.11",
  },
  {
    id: "3.11->3.111",
    source: "3.11",
    target: "3.111",
  },
  {
    id: "3.11->3.112",
    source: "3.11",
    target: "3.112",
  },
  {
    id: "3.11->3.113",
    source: "3.11",
    target: "3.113",
  },
  {
    id: "1->4",
    source: "1",
    target: "4",
  },
  {
    id: "1->5",
    source: "1",
    target: "5",
  },
  {
    id: "4->4.1",
    source: "4",
    target: "4.1",
  },
  {
    id: "4.1->4.11",
    source: "4.1",
    target: "4.11",
  },
  {
    id: "4.1->4.12",
    source: "4.1",
    target: "4.12",
  },
  {
    id: "5->5.1",
    source: "5",
    target: "5.1",
  },
  {
    id: "3->5",
    source: "3",
    target: "5",
  },
  {
    id: "4->5",
    source: "4",
    target: "5",
  },
  {
    id: "2->3",
    source: "2",
    target: "3",
  },
  {
    id: "1->6",
    source: "1",
    target: "6",
  },
  {
    id: "6->6.1",
    source: "6",
    target: "6.1",
  },
];
interface AgentNodeProps {
  data: {
    name: string;
  };
}
const AgentNode = ({ data }: AgentNodeProps) => {
  return (
    <div className="p-2 h-32 w-32 shadow-lg rounded-full bg-[#CAA0EB] dark:bg-neutral-800 border border-brand-600 dark:border-brand-600">
      <Handle type="source" position={Position.Right} className="" />
      <div className="flex flex-col items-center justify-center h-full w-full text-neutral-800 dark:text-white">
        <span className="text-sm font-semibold text-center">{data.name}</span>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-teal-500"
      />
    </div>
  );
};
interface CentralNodeProps {
  data: {
    label: string;
  };
}
const proOptions: ProOptions = { account: "paid-pro", hideAttribution: true };
const CentralNode = ({ data }: CentralNodeProps) => {
  return (
    <div className="p-8 rounded-full border-2 border-brand-600 bg-[#8902F4] text-white font-marvin text-[20px] dark:bg-[#4f3e17] z-[100] shadow-brand-600/40 shadow-lg">
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-violet-500"
      />
      <div className="flex items-center justify-center">{data.label}</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];
type ExampleProps = {
  strength?: number;
  distance?: number;
};
const defaultEdgeOptions = { style: { stroke: "#8902F4", strokeWidth: 2 } };
const nodeTypes = {
  central: CentralNode,
  agent: AgentNode,
};

function Flow({ strength = -500, distance = 150 }: ExampleProps = {}) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes:NodeChange<Node>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
      );
      const onEdgesChange = useCallback(
        (changes:EdgeChange<Edge>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
      );

  useEffect(() => {
    if (nodes.length === 0) {
      setNodes(initialNodes);
    }
  }, [nodes.length, setNodes]);

  const dragEvents = useForceLayout({ strength, distance });

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className="h-full mx-auto border rounded-[30px] ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        proOptions={proOptions}
        onConnect={onConnect}
        onNodeDragStart={dragEvents.start}
        onNodeDrag={dragEvents.drag}
        onNodeDragStop={dragEvents.stop}
        nodeOrigin={nodeOrigin}
        defaultEdgeOptions={defaultEdgeOptions}
        panOnDrag={true}
        zoomOnDoubleClick={false}
        zoomOnScroll={false}
        fitView
      >
        <Background/>
        <Controls />
      </ReactFlow>
    </div>
  );
}

function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
