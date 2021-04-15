
function medico() {
    var verba = Number.parseInt(prompt("Você possui verba para a pesquisa? Digite 1 para SIM ou 2 para NÃO!"))
    if (verba === 1) {
        var equipamentos = Number.parseInt(prompt("Conta com equipamentos e equipe? Digite 1 para SIM ou 2 para NÃO!"));

    }
    if (equipamentos === 1) {
        return alert("Você colaborou com a pesquisa e ajudou a vencer a COVID-19");
    }
    else if (verba === 2) {
        var meiosPesquisa = Number.parseInt(prompt("Você tem outros meios para ajudar na pesquisa? Digite 1 para SIM ou 2 para NÃO"));
    }
    if (meiosPesquisa === 1) {
        return alert("Você colaborou com a pesquisa e ajudou a vencer a COVID-19");
    }
    else if (meiosPesquisa === 2) {
        return alert("Game over!");


    }
    else if (equipamentos === 2) {
        return alert("Game over!");



    } else {
        return alert("Número invalido, tente novamente com um número válido");
    }
}

