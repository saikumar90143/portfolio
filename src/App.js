
import './App.css';
import Header from './components/Header';
import Cursor from './components/Cursor';
import AnimateRoute from './components/AnimateRoute';
import { GlobalStyle } from './components/GlobalStyle';
import Pages from './components/Pages';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <GlobalStyle/>
      
     <Cursor/>
    <Header/>
    <Pages/>
   {/* routes start */}
      <AnimateRoute/>
   {/* routes end */}

   {/* footer */}
   <Footer/>

   
    </div>
  );
}

export default App;
