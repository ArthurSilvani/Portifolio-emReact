import './Secao.css'

// Cartão reutilizável.
// "titulo" é uma prop comum.
// "children" é tudo o que for escrito entre <Secao> e </Secao>.
function Secao({ titulo, children }) {
  return (
    <section className="secao">
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

export default Secao
