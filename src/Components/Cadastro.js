import { useState } from "react";

function Cadastro() {
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[idade, setIdade] = useState('');
    const[user, setUser] = useState({});

    function handleRegistro(e) {
        e.preventDefault();
        setUser({
            nome: nome,
            idade: idade,
            email: email,
        })
    }
}

return (
    <div>
        <form onSubmit={handleRegistro}>
            <label>Nome:</label><br/>
            <input placeholder="Digite seu nome"
            value={nome}
            onChange={ (e) => setNome(e.target.value)}/><br/>
        </form>
    </div>
)

export default Cadastro;