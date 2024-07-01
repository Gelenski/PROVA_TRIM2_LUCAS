def programa():
    estacoes = ["verão", "outono", "inverno", "primavera"]
    data = input("Digite a data desejada no formato dd/mm: \n")
    data_div = data.split("/")

    if len(data_div) != 2:
        print("Por favor, digite no formato solicitado.")
        return

    try:
        mes = int(data_div[1])
        if mes < 1 or mes > 12:
            print("Por favor, digite um mês válido.")
            return
        if mes in [12, 1, 2]:
            estacao = estacoes[0]
        elif mes in [3, 4, 5]:
            estacao = estacoes[1]
        elif mes in [6, 7, 8]:
            estacao = estacoes[2]
        elif mes in [9, 10, 11]:
            estacao = estacoes[3]
        print(f"Nesta data: {data} é {estacao}")

    except ValueError:
        print("formato de data incorreto.")


programa()
