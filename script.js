
document.addEventListener('DOMContentLoaded', (event) => {// Carregamento do DOM
    const handleSubmit = (event) => {//Funcao submit do form
        event.preventDefault();


        const Nome = document.getElementById("Nome").value;//puxando valor dos inputs no HTML - Nome
        const Email = document.getElementById("Email").value;//puxando valor dos inputs no HTML Email
        const Senha = document.getElementById("Senha").value;//puxando valor dos inputs no HTML Senha
        const url = document.getElementById("planilha").value;
        
        

        
        fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({Nome, Email, Senha})

        })// manipulando o HTTP.
    };

    document.querySelector('form').addEventListener('submit', handleSubmit);
});
