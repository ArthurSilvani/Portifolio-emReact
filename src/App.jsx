import Cabecalho from './components/Cabecalho.jsx'
import Secao from './components/Secao.jsx'
import ListaTecnologias from './components/ListaTecnologias.jsx'
import ListaNumerada from './components/ListaNumerada.jsx'
import Citacao from './components/Citacao.jsx'
import Rodape from './components/Rodape.jsx'
import foto from "./assets/minha_foto.jpg"
import './App.css'

// ── Dados da página ──────────────────────────────────────
// Ficam separados do layout. Para trocar o conteúdo,
// basta editar aqui; os componentes continuam iguais.

const tecnologias = ['Python', 'Java', 'SpringBoot', 'CSS', 'HTML', 'JavaScript', 'PostgreSQL', 'React']

const estudos = [
  'Arquitetura de Software',
  'System Design',
  'Cloud Computing',
  'DevOps',
  'Inteligência Artificial',
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
            Sou um ser comunicativo, extrovertido. No meu tempo livre gosto de jogar, 
            gosto de ouvir músicas (rock) e tomar chimarrão,
            além de gostar de estudar e aprender coisas novas. 
          </p>
        </Secao>

        <Secao titulo="Tecnologias favoritas">
          <ListaTecnologias itens={tecnologias} />
        </Secao>

        <Secao titulo="O que gosto de fazer?"> 
          <ListaNumerada itens={estudos} />
        </Secao>

        <Secao titulo="Objetivos🎯">
          <p>
            Criar novos softwares, aplicações web e poder automatizar tudo que eu puder.
          </p>
        </Secao>

        <Secao titulo="Uma frase que me representa">
          <Citacao texto="O problema é sempre o usuário! 😂" />
        </Secao>        
      </main>

      <Rodape />
      </>


  )

}

export default App
