import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navigation from './home/Navigation';
import './styles/navigation.css'
import HouseProvider from './HouseContext';
import './styles/header.css'
import './styles/mission.css'
import './styles/feature.css'
import './styles/lists.css'
import './styles/details.css'
import PropertyLists from './pages/HouseLists';
import PropertyDetails from './pages/PropertyDetails';


function App() {
  
  return (
    <Router>
      <>
        <Navigation />
        <HouseProvider>
          <Routes>
            <Route path='/' element= {<Home />}></Route>

            <Route path='/properties' element = { <PropertyLists /> } ></Route>

            <Route path='/details' element = { <PropertyDetails /> } ></Route>
          </Routes>
        </HouseProvider>
          
      </>
    </Router>
    
  );
}

export default App;
