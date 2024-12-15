
import './App.css';
import Delivering from './components/delivering/Delivering';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className='main'>
            <Hero/>
            <Delivering/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
