import { useEffect } from 'react';
import Aos from 'aos';


import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Modal from './components/UI/Modal';


function App() {
useEffect(()=>{
  Aos.init();
},[]);





  return <>
  <Header/>
<main>
<Hero/>
<Services/>
<Portfolio/>
<Modal/>
</main>
  <Footer/>
  </>
}

export default App;
