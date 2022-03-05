import './App.css';
import SwpFlow from './swp';
import type {
  SwpFlowEnvironment,
  SwpFlowNodes,
  SwpFlowSettings,
  SwpFlowState,
  SwpFlowNode
} from './swp'

function getNodes(): SwpFlowNodes | undefined{
  let savedNodes = window.localStorage.getItem('flowNodes')

  if (savedNodes) {
    console.log('retrieved nodes')
    let nodes = JSON.parse(savedNodes)
    return nodes;
  }

}

function getEnv(): SwpFlowEnvironment | undefined{
  let savedEnv = window.localStorage.getItem('flowEnvironment')
  if (savedEnv){
    console.log('retrieved environment')
    let environment = JSON.parse(savedEnv);
    return environment
  }
}


function setStateCallback(state: SwpFlowState): void{
  window.localStorage.setItem('flowEnvironment', JSON.stringify(state.environment));
  window.localStorage.setItem('flowNodes', JSON.stringify(state.nodes));
}

function App() {

  

  const nodes = getNodes();
  const environment = getEnv();
  const settings: SwpFlowSettings = {
    setStateCallback: setStateCallback,
    nodes: nodes as SwpFlowNodes,
    environment: environment as SwpFlowEnvironment,
    showDummies: true
  }  



  return (
    <div className="App">
      <SwpFlow {...settings} />
    </div>
  );
}

export default App;
