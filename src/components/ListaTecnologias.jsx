import './ListaTecnologias.css'

// Recebe um array de textos e gera um <li> para cada um com .map().
// Cada item de uma lista precisa de uma "key" única.
function ListaTecnologias({ itens }) {
  return (
    <ul className="tech-list">
      {itens.map((tecnologia) => (
        <li className="tecnologias-fav" key={tecnologia}>{tecnologia}</li>
      ))}
    </ul>
  )
}

export default ListaTecnologias
