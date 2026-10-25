import './Cabecalho.css'

// Recebe os dados por props e devolve o topo da página.
// As chaves { } nos parâmetros "desestruturam" o objeto props.
function Cabecalho({ nome, emoji, descricao, foto, linkedin, github }) {
  return (
    <header className="cabecalho">
      <h1>
        {nome} {emoji}
      </h1>
      
      <p className='descricao-sobre-mim'>{descricao}</p>

      <img src={foto} alt={`Foto de perfil do ${nome}`} />

      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        Acesse meu LinkedIn
      </a>

      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </header>
  )
}

export default Cabecalho
