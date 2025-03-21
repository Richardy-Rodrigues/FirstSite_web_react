import { useState, useEffect, use } from "react";

function Cadastro() {
    const[input, setInput] = useState('');
    const[tarefas, setTarefas] = useState([]);
    const[nome, setNome] = useState(localStorage.getItem('@nome'));

    const tarefasStorage = localStorage.getItem('@tarefa');

    useEffect(() => {
        if(!nome){
            const nomeStorage = prompt('Digite seu nome: ');
            if(nomeStorage){
                setNome(nomeStorage);
                localStorage.setItem('@nome', nomeStorage);
            }
        }
    }, [])

    useEffect(() => {
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, [])

    useEffect(() => {
        
        // localStorage.setItem('@nome', JSON.stringify(nomeStorage))
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));

    },[tarefas]);

    function handleRegistro(e) {
        e.preventDefault();
        
        setTarefas([...tarefas, input])
        setInput('')
    }

    return (
        <div>
            <h1>{nome}, sua lista de Tarefas</h1>
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