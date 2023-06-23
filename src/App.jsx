import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BibliotecaActiva from './components/Paginas/BibliotecaActiva/BibliotecaActiva';
import Nosotros from './components/Paginas/Nosotros/Nosotros';
import Contacto from './components/Paginas/Contacto/Contacto';
import Asociate from './components/Paginas/Asociate/Asociate';
import Actividades from './components/Paginas/Actividades/Actividades';
import Servicios from './components/Paginas/Servicios/Servicios';
import Espacios from './components/Paginas/Espacios/Espacios';
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
          <Route path='/paginas/actividades' element={<Actividades />} />
          <Route path='/paginas/servicios' element={<Servicios />} />
          <Route path='/paginas/espacios' element={<Espacios />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
