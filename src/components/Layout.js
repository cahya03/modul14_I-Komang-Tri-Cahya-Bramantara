import Header from "../header.js";
import Footer from "../footer.js";
import Navigation from "../navigation";
import {Outlet} from "react-router-dom";

const Layout= () => {
    return (
       <div className="App">
          <Header />
          <Navigation />
          <Outlet />
          <Footer />
       </div>
    );
  }
  
export default Layout;