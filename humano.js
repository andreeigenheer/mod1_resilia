
function humano() {
    var informacao = Number.parseInt(prompt("Você se mantém informado sobre a pandemia? Digite 1 para SIM ou 2 para NÃO!"));
    if (informacao === 1) {
        var precaucoes = Number.parseInt(prompt("Você toma as precauções informadas? Digite 1 para SIM ou 2 para NÃO!"));
    }
    else if (informacao === 2) {
        return alert("Game Over!");
    }
    if (precaucoes === 1) {
        var maos = Number.parseInt(prompt("Lava as mãos com frequencia? Digite 1 para SIM ou 2 para NÃO!"));
    }
    else if (precaucoes === 2) {
        var fakeNews = Number.parseInt(prompt("Acredita em Fake News? Digite 1 para SIM ou 2 para Não!"));
    }
    if (maos === 1) {
        var ficaEmCasa = Number.parseInt(prompt("Você consegue ficar em Lockdow? Digite 1 para SIM ou 2 para NÃO"));
    }
    else if (maos === 2) {
        var lock = Number.parseInt(prompt("Você consegue ficar em Lockdow? Digite 1 para SIM ou 2 para NÃO!"));
    }
    if (fakeNews === 1) {
        return alert("GAME OVER");
    }
    else if (fakeNews === 2) {
        return alert("QUAL O SEU PROBLEMA?");
    }
    if (lock === 1) {
        return alert("Sucesso!Você tem grandes chances de sobreviver até a vacina ficar pronta!E lave suas mãos!");
    }
    else if (lock === 2) {
        var continua = Number.parseInt(prompt("Você continua tomando as precauções Informadas? Digite 1 para SIM ou 2 para NÃO"));
    }
    if (continua === 1) {
        return alert("Sucesso! Você tem grandes chances de sobreviver até a vacina ficar pronta!")
    }
    else if (continua === 2) {
        return alert("Game Over")
    }

    if (ficaEmCasa === 1) {
        return alert("Sucesso!Você tem grandes chances de sobreviver até a vacina ficar pronta")
    }
    else if (ficaEmCasa === 2) {
        var rueiro = Number.parseInt(prompt("Você continua tomando as precauções informadas? Digite 1 para SIM ou 2 para NÃO"));
    }
    if (rueiro === 1) {
        return alert("Sucesso! Você tem grandes chances de sobreviver até a vacina ficar pronta!");
    }

    else if (rueiro === 2) {
        return alert("Game over");
    }

    else {
        return alert("Número Inválido!");
    }
}