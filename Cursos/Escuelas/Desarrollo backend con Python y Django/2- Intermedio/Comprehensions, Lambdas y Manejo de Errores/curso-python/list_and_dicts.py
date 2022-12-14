def run():
    my_list = [1, "Hello", True, 4.5]
    my_dict = {"firstName": "Gerardo", "lastName": "Ferreyra"}

    super_list = [
        {"firstname": "Facundo", "lastname": "García"},
        {"firstname": "Miguel", "lastname": "Rodriguez"},
        {"firstname": "Pablo", "lastname": "Trinidad"},
        {"firstname": "Susana", "lastname": "Martinez"},
        {"firstname": "José", "lastname": "Fernandez"},
    ]

    super_dict = {
        "natural_nums": [1, 2, 3, 4, 5],
        "integer_nums": [-1, -2, 3, 0, 1],
        "floating_nums": [1.1, 4.55, 6.43],
    }

    for key, value in super_dict.items():
        print(key, " - ", value) # Colocando la coma dentro de los parentisis, podemos concatenar variables.

    for i in super_list:
        print(i["firstname"], " - ", i["lastname"])

# Entrada del scrits
if __name__ == '__main__':
    run()
