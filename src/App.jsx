import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BibliotecaActiva from './components/Paginas/BibliotecaActiva/BibliotecaActiva';
import Nosotros from './components/Paginas/Nosotros/Nosotros';
import Contacto from './components/Paginas/Contacto/Contacto';
import Asociate from './components/Paginas/Asociate/Asociate';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<BibliotecaActiva />} />
          <Route path='/paginas/nosotros' element={<Nosotros />} />
          <Route path='/paginas/contacto' element={<Contacto />} />
          <Route path='/paginas/asociate' element={<Asociate />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
