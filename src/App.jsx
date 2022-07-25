import './App.css'
import { HashRouter, Routes , Route} from 'react-router-dom'
import Home from './components/Home' 
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import PrivateRoutes from './components/PrivateRoutes'



function App() { 

  return (
    <div className="App">

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/:id" element={<PokemonDetail/>}/>
          </Route>
        </Routes>  
      </HashRouter>  
    </div>
  )
}

export default App
