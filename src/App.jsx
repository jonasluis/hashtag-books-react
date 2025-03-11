import { useState, useRef } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brasCubasImg from './assets/bras_cubas.jpeg'
import Capa from './Capa'
import SeletorCapitulos from './SeletorCapitulos'
import BotoesControle from './BotoesControle'
import livro from './assets/capitulos/livro'
import GerenciadorFaixa from './GerenciadorFaixa'

function App() {

  //let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false);
  const [faixaAtual, definirFaixaAtual] = useState(0);
const tagAudio = useRef(null)
  

  const informacoesLivros = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  }

  const tocarFaixa = () => {
    definirTaTocando(true);
    tagAudio.current.play()
  }
  
  const pausarFaixa = () => {
    definirTaTocando(false);
    tagAudio.current.pause()
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
      <Capa imagemCapa={informacoesLivros.capa} textoAlternativo={informacoesLivros.textoAlternativo} faixa={informacoesLivros.capitulos[faixaAtual]}/>
      <SeletorCapitulos capituloAtual={faixaAtual + 1}/>
      <GerenciadorFaixa faixa={informacoesLivros.capitulos[faixaAtual]} referencia={tagAudio}/>
      <BotoesControle 
      taTocando={taTocando} 
      tocarOuPausarFaixa={tocarOuPausarFaixa}
      />
    </>
  )
}

export default App
