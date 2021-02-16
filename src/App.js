import './App.css';
import  NavBar  from './components/nav';
import Section1 from './components/section1'
import Section2 from'./components/section2'
import Section3 from'./components/section3'
import Section4 from './components/section4'
import Footer from'./components/foot'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>

      
    </div>
  );
}

export default App;
