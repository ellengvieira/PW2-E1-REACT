import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './telas/Home'
import Menu from './telas/Menu'
import Equipamento from './telas/equipamentos/Equipamento'
import Manutencao from './telas/manutencoes/Manutencao'
import Login from './telas/Login'

function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/equipamentos" element={<Equipamento/>}/>
          <Route exact path="/manutencoes" element={<Manutencao/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;