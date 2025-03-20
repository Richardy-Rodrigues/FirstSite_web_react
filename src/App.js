import { useState } from "react";
// import Nome from "./Components/Nome";

function App() {
  const [aluno, setAluno] = useState('Aluno');

  function handleChangeName(nome) {
    setAluno(nome)
  }

  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <h1>Olá {aluno}</h1>
      <button onClick={ () => handleChangeName('Richardy') }>
        Mudar nome
      </button>
    </div>
  );
}

export default App;
