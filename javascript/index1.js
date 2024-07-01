const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
function lista() {
    for (let i = 0; i < meses.length; i++) {
        const mes_data = meses[i];
        if(mes_data !== "Dezembro") {
            console.log(mes_data)
        } else {
            console.log(`O aniversário da lenda é ${mes_data}`)
        }
    }
}
lista()