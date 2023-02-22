
import './App.css';
import LoginsinBar from './Navbar/loginsign';
import Nav from './Navbar/Components/navbar';
import Footer from './Navbar/Components/footer';
import Allroutes from './Navbar/Components/Routing/routing';
import Signup from './Navbar/Components/signin/signup/signup';
import  {Checkcreate}  from './Navbar/Components/signin/signup/check.jsx';
function App() {
  return (
    <div className="App">
     <LoginsinBar/>
      
     <Nav/>

     <Allroutes/>
     <Footer/>
    
   
    </div> 
     );
}


export default App;

// {/* <Signup/>
//    <Checkcreate/> */}