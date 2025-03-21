import { useState, useEffect } from "react";

function Cadastro() {
    const[input, setInput] = useState('');
    const[tarefas, setTarefas] = useState([]);

    const tarefasStorage = localStorage.getItem('@tarefa');

    useEffect(() => {
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, [])

    useEffect(() => {
        
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));

    },[tarefas]);

    function handleRegistro(e) {
        e.preventDefault();
        
        setTarefas([...tarefas, input])
        setInput('')
    }

    return (
        <div>
            <h1>Cadastro de Tarefas</h1>
            <form onSubmit={handleRegistro}>
                <label>Nome da tarefas:</label><br/>
                <input placeholder="Digite uma tarefa:"
                value={input}
                onChange={ (e) => setInput(e.target.value)}/><br/>

                <button type="submit">Registrar</button>
            </form>
            <br/><br/>

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )

}
export default Cadastro;