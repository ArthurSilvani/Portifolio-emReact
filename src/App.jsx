import Cabecalho from './components/Cabecalho.jsx'
import Secao from './components/Secao.jsx'
import ListaTecnologias from './components/ListaTecnologias.jsx'
import ListaNumerada from './components/ListaNumerada.jsx'
import Citacao from './components/Citacao.jsx'
import Rodape from './components/Rodape.jsx'
import foto from "./assets/minha_foto.jpg"
import './App.css'

const tecnologias = ['Python', 'Java', 'SpringBoot', 'CSS', 'HTML', 'JavaScript', 'PostgreSQL', 'React']

const estudos = [
  'Desenvolver',
  'Estudar',
  'Ouvir rock',
  'Codar',
  'Assistir filmes',
]

function App() {
  return ( 
    <>
      <Cabecalho 
      nome="Arthur Silvani"
      emoji=""
      descricao={"Futuro \nDesenvolvedor"}
      foto = {foto}
      linkedin="https://www.linkedin.com/in/arthur-tapparo-silvani"
      github="https://github.com/ArthurSilvani"
      />

      <main className='conteudo'>

        <Secao titulo="Sobre mim">
          <p>
            Trabalho com assistência a usúarios, gerenciamento de firewall e VLANs.
          </p>
          <p>
            Sou uma pessoa comunicativa e extrovertida. No meu tempo livre gosto de jogar, 
            gosto de ouvir músicas (rock) e tomar chimarrão,
            além de gostar de estudar. Sempre que consigo busco estar estudando.
          </p>
        </Secao>

        <Secao titulo="Tecnologias favoritas">
          <ListaTecnologias itens={tecnologias} />
        </Secao>

        <Secao titulo="O que gosto de fazer?"> 
          <ListaNumerada itens={estudos} />
        </Secao>

        <Secao titulo="Objetivos">
          <p>
            Criar novos softwares, aplicações web e poder automatizar tudo que eu puder.
          </p>
        </Secao>

        <Secao titulo="Uma frase que me inspira">
          <Citacao texto="Quanto menos inteligente um homem é, menos misteriosa lhe parece a existência."/>
        </Secao>        
      </main>

      <Rodape />
      </>


  )

}

export default App
