import { useState, useEffect, use } from "react";

function Cadastro() {
    const[input, setInput] = useState('');
    const[tarefas, setTarefas] = useState([]);
    const[nome, setNome] = useState(localStorage.getItem('@nome'));
    const[cor, setCor] = useState(localStorage.getItem('@cor'));

    const tarefasStorage = localStorage.getItem('@tarefa');

    /// Pega informação do Prompt e salva no LocalStorage
    useEffect(() => {
        if(!nome){
            const nomeStorage = prompt('Digite seu nome: ');
            if(nomeStorage){
                setNome(nomeStorage);
                localStorage.setItem('@nome', nomeStorage);
            }
        }
        document.body.style.background = cor;
    }, [cor])

    /// Pega informações do LocalStorage
    useEffect(() => {
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, [])

    /// Função para salvar dado no LocalStorage
    useEffect(() => {
        
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));

    },[tarefas]);

    /// Função pegar valor do input
    function handleRegistro(e) {
        e.preventDefault();
        
        setTarefas([...tarefas, input])
        setInput('')
    }

    /// Função salvar cor escolhida no LocalStorage
    function handleCor(e) {
        const novaCor = e.target.value;
        setCor(novaCor);
        localStorage.setItem('@cor', novaCor);
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
            <div>
                <ul>
                    <li>
                        <input
                        type="radio"
                        value='cadetblue'
                        checked={cor === 'cadetblue'}
                        onChange={handleCor}
                        ></input>
                        Cadet blue
                    </li>
                    <li>
                        <input
                        type="radio"
                        value='darkcyan'
                        checked={cor === 'darkcyan'}
                        onChange={handleCor}
                        ></input>
                        Ciano
                    </li>
                    <li>
                        <input
                        type="radio"
                        value='darkgrey'
                        checked={cor === 'darkgrey'}
                        onChange={handleCor}
                        ></input>
                        Cinza
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Cadastro;