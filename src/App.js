// Dhura Mistry
import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurBlog from './components/OurBlog';
import ContactUs from './components/ContactUs';
import OurWork from './components/OurWork';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/contactus",
    element: <ContactUs/>,
  },
  {
    path: "/ourblog",
    element: <OurBlog/>,
  },
  {
    path: "/ourwork",
    element: <OurWork/>,
  },
]);

function App() {
  return (
    <div className="App">
<Navbar/>
<RouterProvider router={router} />
<Footer/>
    </div>
  );
}

export default App;
