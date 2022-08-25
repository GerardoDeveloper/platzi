def search_binary(numbers, numero_a_buscar, lower, higher):
    #Preguntamos si el índice mas bajo es mayor al índice más alto
    if lower > higher:
        return False
    
    #Calculamos el índice medio de la lista.
    medio = int((lower + higher) / 2)
    
    #Preguntamos si el índice medio de la lista es igual al núm ingresado por teclado.
    if numbers[medio] == numero_a_buscar:
        return True
    elif numbers[medio] > numero_a_buscar:
        return search_binary(numbers, numero_a_buscar, lower, medio - 1)
    else:
        return search_binary(numbers, numero_a_buscar, medio + 1, higher)


if __name__ == '__main__':
    #Creamos nuestra lista ordenada
    numbers = [0, 2, 5, 7, 9, 10, 12, 13, 15, 17,
               19, 22, 33, 35, 65, 78, 88, 99, 102, 110]
    
    #Ingresamos por teclado el número a búscar.
    numero_a_buscar = int(input("Ingresa un número: "))
    #Amacenamos en una variable el resultado de la función.
    resultado = search_binary(numbers, numero_a_buscar, 0, len(numbers) - 1)
    
    #Preguntamos si el resultado de la busqueda binaria es verdadera, imprime que el número
    #se encontro, sino no se ha encontrado.
    if resultado is True:
        print("El número se encuentra en la lista")
    else:
        print("El número NO se encontro en la lista.")
