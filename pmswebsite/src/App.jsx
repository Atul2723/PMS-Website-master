import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spinner from './components/Contact/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails'
import blogsData from './components/Blog/blogs'
import Error from './components/Error/Error';


// Lazy-loaded components
const Home = React.lazy(() => import('./components/Homepage/Home'));
const FundDetails = React.lazy(() => import('./components/FundDetails/FundDetails'));
const Sme = React.lazy(() => import('./components/SME/Sme'));
const CaseStudies = React.lazy(() => import('./components/CaseStudies/CaseStudies'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const HowWeDoIt = React.lazy(() => import('./components/HowWeDoIt/HowWeDoIt'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      easing: 'ease-in-out', // Adjust the easing function as needed
      delay:100
      
    });
  }, []);
  return (
    <>
      <Router>
        <div>
          <React.Suspense fallback={<Spinner/>}>
            <ScrollToTop/>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/fund-details' element={<FundDetails/>}/>
              <Route path='/sme' element={<Sme/>}/>
              <Route path='/case-studies' element={<CaseStudies/>}/>
              <Route path='/how-we-do-it' element={<HowWeDoIt/>}/>
              <Route path='/blog' element={<Blog blogs={blogsData} />} />
              <Route path="/blog/:id" element={<BlogDetails blogs={blogsData} />} />
              <Route path='/contact-us' element={<Contact/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
