import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
    <Navbar />
    <div className='section_padding'>
    <Dashboard />
    </div>
    </div>
  );
}

export default App;
