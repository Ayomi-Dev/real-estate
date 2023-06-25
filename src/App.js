import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Importing all css files
import './App.css';
import './styles/navigation.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/service.css'
import './styles/feature.css'
import './styles/review.css'
import './styles/lists.css'
import './styles/details.css'
import './styles/bookmark.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/newsletter.css'


// importing all components
import Home from './components/Home';
import Navigation from './home/Navigation';
import HouseProvider from './HouseContext';
import PropertyLists from './components/HouseLists';
import PropertyDetails from './components/PropertyDetails';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './home/Footer';


function App() {
  
  return (
    <Router>
      <>
        
        <HouseProvider>

          <Navigation />
          
          <Routes>
            
            <Route path='/' element= {<Home />}></Route>

            <Route path='/properties' element = { <PropertyLists /> } ></Route>

            <Route path='/details/:id' element = { <PropertyDetails /> } ></Route>

            <Route path='/bookmarks' element = { <Bookmark />} ></Route>
            
            <Route path='/about' element = { <About />} ></Route>

            <Route path='/contact' element = { <Contact />}></Route>

          </Routes>

          <Footer />

        </HouseProvider>
          
      </>
    </Router>
    
  );
}

export default App;
