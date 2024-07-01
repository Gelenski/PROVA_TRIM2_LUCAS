# meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

# deve ser aplicado um método try para lidar com os dias tipo 32...
def estacao():
    mes = input("Digite o mês desejado: \n")
    dia = int(input("Digite o dia desejado: \n"))
    if (mes == "Dezembro" and dia >= 21):
        print("Verão")

estacao()