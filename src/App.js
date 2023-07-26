import './App.css';
import Calculator from './components/Template/calculator';
import logo from './logo.svg'

function App() {
  return (

    <div className="App">
       
      <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
       <Calculator/>
      </header>
      
    </div>
  );
}

export default App;
