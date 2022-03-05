import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SwpFlow from "./swp"





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



export { default as SwpFlow } from "./swp"
export default SwpFlow
export type {
    SwpFlowSettings,
    SwpFlowNode,
    SwpFlowState,
    SwpFlowEnvironment,
    SwpFlowNodes
} from "./swp"