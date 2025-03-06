import './App.css'
import brasCubasImg from './assets/bras_cubas.jpeg'
import Capa from './Capa'
function App() {

  const informacoesLivros = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  }

  return(
    <>
      <Capa imagemCapa={informacoesLivros.capa} textoAlternativo={informacoesLivros.textoAlternativo} />
    </>
  )
}

export default App
