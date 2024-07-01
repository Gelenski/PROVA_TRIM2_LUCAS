function programa() {
    const estacoes = ["verão", "outono", "inverno", "primavera"];
    const data = "30/10";
    const data_div = data.split("/");

    if (data_div.length !== 2) {
        console.log("Por favor, digite no formato solicitado.");
        return;
    }

    try {
        const mes = parseInt(data_div[1], 10); // ParseInt com base decimal explícita
        if (isNaN(mes) || mes < 1 || mes > 12) {
            console.log("Por favor, digite um mês válido.");
            return;
        }

        let estacao = "";
        if ([12, 1, 2].includes(mes)) {
            estacao = estacoes[0];
        } else if ([3, 4, 5].includes(mes)) {
            estacao = estacoes[1];
        } else if ([6, 7, 8].includes(mes)) {
            estacao = estacoes[2];
        } else if ([9, 10, 11].includes(mes)) {
            estacao = estacoes[3];
        }

        console.log(`Nesta data: ${data} é ${estacao}.`);
    } catch (error) {
        console.log("Formato de data incorreto.");
    }
}

programa();
