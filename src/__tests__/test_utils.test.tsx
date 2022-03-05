
// import { getVisuallyNextNodePath, 
//     getVisuallyPreviousNodePath, 
//     delArrayPrefix,
//     moveUnderParent,
//     getSubs,
//     moveUnderPreviousNode
// } from '../swp/Utils'
// import type {
//     SwpFlowSettings,
//     SwpFlowState,
//     SwpFlowEnvironment,
//     SwpFlowNodes,
//     PathElem,
//     NodePath
// } from '../swp'
// import SwpFlow from '../swp/SwpFlow'
// // import DefaultTreeNode from '../swp/DefaultTreeNode'
// // import DefaultContainer from '../swp/DefaultContainer'
// import * as R from 'ramda'

// const l1 = {
//     '0' : { text: 'blah0', rel: {'child': ['1','3']}, isCollapsed: false },
//     '1' : { text: 'blah1', rel: {'child': ['5', '2']}, isCollapsed: false  },
//     '2' : { text: 'blah2', rel: {'child': ['4']}, isCollapsed: false  },
//     '3' : { text: 'blah3', rel: {'child': []}, isCollapsed: false  },
//     '4' : { text: 'blah4', rel: {'child': []}, isCollapsed: false  },
//     '5' : { text: 'blah5', rel: {'child': ['6','7']}, isCollapsed: false  },
//     '6' : { text: 'blah6', rel: {'child': []}, isCollapsed: false  },
//     '7' : { text: 'blah7', rel: {'child': []}, isCollapsed: false  },
// }

// const l2 = {
//     '0' : { text: 'blah0', rel: {'child': ['1','3']}, isCollapsed: false },
//     '1' : { text: 'blah1', rel: {'child': ['5', '2']}, isCollapsed: false  },
//     '2' : { text: 'blah2', rel: {'child': ['4']}, isCollapsed: false  },
//     '3' : { text: 'blah3', rel: {'child': []}, isCollapsed: false  },
//     '4' : { text: 'blah4', rel: {'child': []}, isCollapsed: false  },
//     '5' : { text: 'blah5', rel: {'child': ['6','7']}, isCollapsed: false  },
//     '6' : { text: 'blah6', rel: {'child': []}, isCollapsed: false  },
//     '7' : { text: 'blah7', rel: {'child': []}, isCollapsed: false  },
// }
// const l3 = {
//     '0' : { text: 'blah0', rel: {'child': ['1','3']}, isCollapsed: false },
//     '1' : { text: 'blah1', rel: {'child': ['5','6','2']}, isCollapsed: false  },
//     '2' : { text: 'blah2', rel: {'child': ['4']}, isCollapsed: false  },
//     '3' : { text: 'blah3', rel: {'child': []}, isCollapsed: false  },
//     '4' : { text: 'blah4', rel: {'child': []}, isCollapsed: false  },
//     '5' : { text: 'blah5', rel: {'child': ['7']}, isCollapsed: false  },
//     '6' : { text: 'blah6', rel: {'child': []}, isCollapsed: false  },
//     '7' : { text: 'blah7', rel: {'child': []}, isCollapsed: false  },
// }
// const l4 = {
//     '0' : { text: 'blah0', rel: {'child': ['1','3']}, isCollapsed: false },
//     '1' : { text: 'blah1', rel: {'child': ['5', '2']}, isCollapsed: false  },
//     '2' : { text: 'blah2', rel: {'child': ['4']}, isCollapsed: false  },
//     '3' : { text: 'blah3', rel: {'child': []}, isCollapsed: false  },
//     '4' : { text: 'blah4', rel: {'child': []}, isCollapsed: false  },
//     '5' : { text: 'blah5', rel: {'child': ['7','6']}, isCollapsed: false  },
//     '6' : { text: 'blah6', rel: {'child': []}, isCollapsed: false  },
//     '7' : { text: 'blah7', rel: {'child': []}, isCollapsed: false  },
// }

// let environment1 = {
//     homePath: [{rel:'root', id:'0'}, {rel:'child', id:'1'}, {rel:'child', id:'5'}] as NodePath,
//     activeNode: null
// }
// let environment2 = {
//     homePath: [{rel:'root', id:'0'}, {rel:'child', id:'1'}] as NodePath,
//     activeNode: null
// }
// let environment3 = {
//     homePath: [{rel:'root', id:'0'}] as NodePath,
//     activeNode: null
// }

// let state1: SwpFlowState = {
//     environment: environment1,
//     nodes: l1,
//     defaultNodes: l1,
//     defaultEnvironment: environment1,
//     showDummies: false,
//     // nodeComponent: DefaultTreeNode,
//     // containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }
// let state2: SwpFlowState = {
//     environment: environment2,
//     nodes: l2,
//     defaultNodes: l2,
//     defaultEnvironment: environment2,
//     showDummies: false,
//     // nodeComponent: DefaultTreeNode,
//     // containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }
// let state3: SwpFlowState = {
//     environment: environment3,
//     nodes: l2,
//     defaultNodes: l2,
//     defaultEnvironment: environment3,
//     showDummies: false,
//     // nodeComponent: DefaultTreeNode,
//     // containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }
// let state4: SwpFlowState = {
//     environment: environment2,
//     nodes: l3,
//     defaultNodes: l1,
//     defaultEnvironment: environment2,
//     showDummies: false,
//     nodeComponent: DefaultTreeNode,
//     containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }

// let state5: SwpFlowState = {
//     environment: environment2,
//     nodes: l1,
//     defaultNodes: l1,
//     defaultEnvironment: environment2,
//     showDummies: false,
//     nodeComponent: DefaultTreeNode,
//     containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }
// let state6: SwpFlowState = {
//     environment: environment2,
//     nodes: l4,
//     defaultNodes: l1,
//     defaultEnvironment: environment2,
//     showDummies: false,
//     nodeComponent: DefaultTreeNode,
//     containerComponent: DefaultContainer,
//     setStateCallback: ()=>{}
// }




// describe('properly runs node utilies & operations', ()=>{

//     it('gets child paths from node & state', ()=>{
//         expect(null).toBeNull();
//     })
// });