import React, {Component} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';


class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route path='/' element={< Layout />}>
                    <Route index element ={<Home/>}></Route>
                    <Route path='about' element={< About />}></Route>
                    <Route path='contact' element={< Contact />}></Route>
                 </Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Body/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
