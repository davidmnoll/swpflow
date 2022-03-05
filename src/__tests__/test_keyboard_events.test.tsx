// import { render, fireEvent, waitFor, screen, queryByAttribute, queryByText } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'
// import SwpFlow from '../swp/SwpFlow'
// import type {
//   SwpFlowSettings,
//   SwpFlowState,
//   SwpFlowEnvironment,
//   SwpFlowNodes,
//   PathElem,
//   NodePath
// } from '../swp'
// import DefaultTreeNode from '../swp/DefaultTreeNode'
// import DefaultContainer from '../swp/DefaultContainer'


// const l1 = {
//   '0' : { text: 'blah0', rel: {'child': ['1','3']}, isCollapsed: false },
//   '1' : { text: 'blah1', rel: {'child': ['5', '2']}, isCollapsed: false  },
//   '2' : { text: 'blah2', rel: {'child': ['4']}, isCollapsed: false  },
//   '3' : { text: 'blah3', rel: {'child': []}, isCollapsed: false  },
//   '4' : { text: 'blah4', rel: {'child': []}, isCollapsed: false  },
//   '5' : { text: 'blah5', rel: {'child': ['6','7']}, isCollapsed: false  },
//   '6' : { text: 'blah6', rel: {'child': []}, isCollapsed: false  },
//   '7' : { text: 'blah7', rel: {'child': []}, isCollapsed: false  },
// }

// let environment = {
//   homePath: [{rel:'root', id:'0'}, {rel:'child', id:'1'}] as NodePath,
//   activeNode: null
// }
// let state: SwpFlowState = {
//   environment: environment,
//   nodes: l1,
//   defaultNodes: l1,
//   defaultEnvironment: environment,
//   showDummies: false,
//   nodeComponent: DefaultTreeNode,
//   containerComponent: DefaultContainer,
//   setStateCallback: ()=>{}
// }
// function cursorIsAtEnd(element: HTMLDivElement): boolean{
//   let selection = document.getSelection();
//   if (selection){
//     console.log("at end of node")
//     return ( element.innerText.length == selection.anchorOffset && element.innerText.length == selection.focusOffset )
//   }
//   return false
// }


// describe('handling keyboard events properly', ()=>{

//   it('adds node below when pressing enter', async () => {
//     expect(null).toBeNull()
//   })


// })
