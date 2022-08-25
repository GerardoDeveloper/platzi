import random

def busqueda_binaria(lista, inicio, final, objetivo):
    if inicio > final:
        False

    medio = (inicio + final) // 2

    if lista[medio] == objetivo:
        return True
    elif lista[medio] < objetivo:
        busqueda_binaria(lista, medio + 1, final, objetivo)
    else:
        busqueda_binaria(lista, inicio, medio - 1, objetivo)



if __name__ == '__main__':
  tamanio_de_lista = int(input('De que tamaño será la lista: '))
  objetivo = int(input('Que número quieres encontrar: '))
  lista = sorted([random.randint(0, 100) for i in range(tamanio_de_lista)])
  encontrado = busqueda_binaria(lista, 0, len(lista), objetivo)
  print(lista)
  print(f'El elemento {objetivo} {"esta" if encontrado else "no esta"} en la lista')