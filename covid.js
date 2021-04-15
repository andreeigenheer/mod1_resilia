function covid() {
    var aglomeracao = Number.parseInt(prompt("Você está em um local com aglomeração? Digite 1 para SIM e 2 para NÃO"));

    if (aglomeracao === 1) {
        var mascaras = Number.parseInt(prompt("Estão usando máscaras? Digte 1 para SIM e 2 para NÃO"));

    } else if (aglomeracao === 2) {
        var distanciamento = Number.parseInt(prompt("As pessoas ao seu redor estão  mantendo distanciamento social? Digite 1 para SIM e 2 para NÃO"));
    }
    if (mascaras === 1) {
        var alcool = Number.parseInt(prompt("Fazem uso de álcool em gel? Digite 1 para SIM e 2 para NÃO"));

    } else if (mascaras === 2) {
        return alert("Sucesso! Você contaminou rápidamente população e está presente no mundo todo!");
    }
    if (distanciamento === 1) {
        var mascaras2 = Number.parseInt(prompt("Estão usando máscaras? Digte 1 para SIM e 2 para NÃO"));
    }
    else if (distanciamento === 2) {
        return alert("Sucesso! Você contaminou rápidamente população e está presente no mundo todo!");
    }
    if (mascaras2 ===1){
        var vacina2 = Number.parseInt(prompt("Estão vacinadas? Digite 1 para SIM e 2 para NÃO"));
    }

    else if (mascaras2===2){
        return alert("Game Over")
    }

    if (alcool === 1) {
        var vacina = Number.parseInt(prompt("Estão vacinadas? Digite 1 para SIM e 2 para NÃO"));
    }
    else if (alcool === 2) {
        var vacina = Number.parseInt(prompt("Estão vacinadas? Digite 1 para SIM e 2 para NÃO"));
    }

    if (vacina === 1) {
        return alert("Game Over")
    }
    else if (vacina === 2) {
        return alert("Sucesso! Você contaminou rápidamente população e está presente no mundo todo!");
    }

    else {
        return alert("Número invalido, tente novamente com um número válido");
    }


}
