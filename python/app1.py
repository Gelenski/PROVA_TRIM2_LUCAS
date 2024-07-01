meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro",
         "novembro", "dezembro"]


def lista():
    for i in meses:
        if i != "Dezembro":
            print(i)
        else:
            print(f"O aniversário da lenda é em {i}")


lista()
