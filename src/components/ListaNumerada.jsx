import './ListaNumerada.css'

// Mesma ideia da ListaTecnologias, mas com <ol> (lista numerada).
function ListaNumerada({ itens }) {
  return (
    <ol className="lista-numerada">
      {itens.map((item, key) => (
        <li key={key}>{key+1} - {item}</li>
      ))}
    </ol>
  )
}

export default ListaNumerada
