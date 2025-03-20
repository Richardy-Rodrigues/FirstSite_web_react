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

    return (
        <div>
            <form onSubmit={handleRegistro}>
                <label>Nome:</label><br/>
                <input placeholder="Digite seu nome"
                value={nome}
                onChange={ (e) => setNome(e.target.value)}/><br/>

                <label>Idade:</label><br/>
                <input placeholder="Digite sua idade"
                value={idade}
                onChange={ (e) => setIdade(e.target.value)}/><br/>

                <label>E-mail:</label><br/>
                <input placeholder="Digite seu e-mail"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}/><br/>
                
                <button type="submit">Registrar</button>
            </form>
            <br/><br/>

            <div>
                <span>Seja bem vindo, {user.nome}</span><br/>
                <span>você tem: {user.idade}</span><br/>
                <span>e seu e-mail é: {user.email}</span><br/>
            </div>
        </div>
    )

}
export default Cadastro;