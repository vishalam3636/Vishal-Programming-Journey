import './App.css';
import { NameContextProvider } from './context/NameContext';
import ComponentA from './pages/ComponentA';

function App() {
  return (
    <div className="App">
      <h3>App Component</h3>

      <NameContextProvider>
        <ComponentA />
      </NameContextProvider>
    </div>
  );
}

export default App;
