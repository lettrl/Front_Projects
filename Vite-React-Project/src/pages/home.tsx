import { Link } from 'react-router-dom';

export function Home() {
  return (
     <main>
      <h1>Home</h1>

      <p>Escolha uma nota para abrir:</p>

      <ul>
        <li>
          <Link to="/notes/1">Nota 1</Link>
        </li>
        <li>
          <Link to="/notes/2">Nota 2</Link>
        </li>
        <li>
          <Link to="/notes/3">Nota 3</Link>
        </li>
      </ul>
    </main>
  );
}
