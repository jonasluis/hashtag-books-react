import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brasCubasImg from './assets/bras_cubas.jpeg'
import Capa from './Capa'
import SeletorCapitulos from './SeletorCapitulos'
import BotoesControle from './BotoesControle'

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
      <SeletorCapitulos capituloAtual='1'/>
      <BotoesControle />
    </>
  )
}

export default App
