import react from 'react'
import {Navbar,Home,Gallery,about,Services } from './Components';
import {Header,footer} from './Container';
import './App.css';

function App() {
  return (
   <div className = "App">
    <div className="gradient">
      <Navbar/>
      <Header/>
    </div>
    <div>
      <Gallery/>
    </div>
   </div>
  );
}

export default App;
