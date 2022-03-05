import React from "react";
import { Types } from "./SwpFlow";
import { 
    trace,
    traceBreak,
    traceFunc,
    traceQuiet
} from "./Utils"



interface SwpFlowState extends SwpFlowOptions {
    nodes: SwpFlowNodes;
    environment: SwpFlowEnvironment;
}


/**
 * Default Props for UI elements
 */

type SwpFlowOptions = {
    nodeComponent: TreeNodeComponent;
    containerComponent: ContainerComponent;
    defaultNodes: SwpFlowNodes;
    defaultEnvironment: SwpFlowEnvironment;
    setStateCallback: (state: SwpFlowState)=> void;
    showDummies: boolean;
}

type SwpFlowEnvironment = {
    homePath: NodePath,
    activeNode: NodePath | null
}

type SwpFlowSettings = Partial<SwpFlowState>

type NodeId = string
type PathElem = {rel: string, id: NodeId}
type NodePath = [PathElem, ...PathElem[]]



type SwpFlowNodes = { 
    '0': SwpFlowNode, 
    [nodeId:string]: SwpFlowNode
}


interface SwpFlowNode extends BaseNodeInfo{
    rel: { 
        [key:string]: NodeId[]
    },
}

interface BaseNodeInfo {
    text: string,
    isCollapsed: boolean
}


/**Display Components &  Props */

interface TreeNodeProps {
    nodePath: NodePath;
    children: TreeNodeComponent[];
    nodeInfo: SwpFlowNode;
    pathElem: PathElem;
    activeNode: NodePath;
    setActiveNode: (path:NodePath) => void;
    updateNode: (path: NodePath, data: SwpFlowNode) => void;
    setPath: (path: NodePath) => void;
    newChildUnderThisNode: (path: NodePath) => void;
    getRelation: (path:NodePath) => NodeId;
    setRelation: (path:NodePath, rel:NodeId) => void;
    moveChildFromPath: (path:NodePath, newParent: NodeId) => void;
    moveUnderPreviousNode: (path:NodePath) => void;
    moveUnderGrandParentBelowParent: (path:NodePath) => void;
    toggleCollapse: (path:NodePath) => void;
    newChildUnderThisNode: (path:NodePath) => void;
    moveCursorToVisuallyNextNode: (path:NodePath) => void
    moveCursorToVisuallyPreviousNode: (path:NodePath) => void
}
// interface TreeNodeState<T extends BaseNodeInfo> {

// }

interface ContainerProps {
    environment: SwpFlowEnvironment;
    nodes: SwpFlowNodes;
    children: TreeNodeComponent[];
    setPath: (path: NodePath) => void;
    resetNodes: () => void;
}


type TreeNodeComponent = React.FC<TreeNodeProps> | React.Component<TreeNodeProps>
type ContainerComponent = React.FC<ContainerProps> | React.Component<ContainerProps>





export type {
    SwpFlowState,
    SwpFlowSettings,
    SwpFlowEnvironment,
    SwpFlowNodes,
    SwpFlowNode,
    TreeNodeProps,
    ContainerProps,
    ContainerComponent,
    TreeNodeComponent,
    NodeId,
    PathElem,
    NodePath,
    BaseNodeInfo,
}