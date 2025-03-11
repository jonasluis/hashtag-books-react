import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brasCubasImg from './assets/bras_cubas.jpeg'
import Capa from './Capa'
import SeletorCapitulos from './SeletorCapitulos'
import BotoesControle from './BotoesControle'

function App() {

  //let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false);
  

  const informacoesLivros = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  }

  const tocarFaixa = () => {
    definirTaTocando(true);
  }

  const pausarFaixa = () => {
    definirTaTocando(false);
  }

  const tocarOuPausarFaixa = () => {
    if(taTocando){
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  }
  

  return(
    <>
      <Capa imagemCapa={informacoesLivros.capa} textoAlternativo={informacoesLivros.textoAlternativo} />
      <SeletorCapitulos capituloAtual='1'/>
      <BotoesControle 
      taTocando={taTocando} 
      tocarOuPausarFaixa={tocarOuPausarFaixa}
      />
    </>
  )
}

export default App
