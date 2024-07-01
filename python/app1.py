meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

def lista():
    for i in meses:
        if i != "Dezembro":
            print(i)
        else:
            print(f"O aniversário da lenda é {i}")
    
lista()
