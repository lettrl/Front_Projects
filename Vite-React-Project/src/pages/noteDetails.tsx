import { Link, useParams } from 'react-router-dom';

export function NoteDetails() {
    const { id } = useParams();
  
    return (
    <main>
      <h1>Detalhes da Nota{id}</h1>
      <p>Aqui estão os detalhes da nota selecionada com ID: {id}</p>
      <Link to="/">Voltar para a home com a lista de notas</Link>
    </main>
  );
}
