import './App.css';
import './Global-Style.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Uslugi from './Components/Uslugi/Uslugi'
import About from './Components/About/About';
import HowI from './Components/HowI/HowI';
import FreeCons from './Components/FreeCons/FreeCons';
import MyClients from './Components/MyClients/MyClients';
import Reviews from './Components/Reviews/Reviews';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Uslugi />
      <About />
      <HowI />
      <FreeCons />
      <MyClients />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
