import './App.css';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="naluri-app">
      <header className="naluri-header">
        <img src="./logo-naluri.svg" alt="Naluri" title="Naluri" width="300" className="mb-5"/>
      </header>
      <MainBody/>
    </div>
  );
}

export default App;
