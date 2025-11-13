import './App.css'
import CalendarDashBoard from './components/CalendarDashBoard';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  return (
    <div className='bg-dark'>
      <CalendarDashBoard />
    </div>
  );

}

export default App
