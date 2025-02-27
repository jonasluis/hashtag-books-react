import './App.css'
import brasCubasImg from './assets/bras_cubas.jpeg'

function App() {

  const informacoesLivros = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: ""
  }

  return(
    <>
      <img src={brasCubasImg} alt="Capa do Livro." />
    </>
  )
}

export default App
