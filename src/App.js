
import './App.css';
import Delivering from './components/delivering/Delivering';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className='main'>
            <Hero/>
            <Delivering/>
            <Pricing/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
