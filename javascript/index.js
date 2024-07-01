function lista() {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    for (let i = 0; i < meses.length; i++) {
        const data = meses[i];
        if(data !== "Dezembro") {
            console.log(data)
        } else {
            console.log(`O aniversário da lenda Gelenski é ${data}`)
        }
    }
}
lista()