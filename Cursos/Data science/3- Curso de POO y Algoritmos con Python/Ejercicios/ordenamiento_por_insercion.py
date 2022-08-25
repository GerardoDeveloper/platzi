import random

def ordenamiento_por_insercion(lista):
  for i in range(1, len(lista)):
     valor_actual = lista[i]
     pocision_actual = i
     
     while pocision_actual > 0 and lista[pocision_actual - 1] > valor_actual:
       lista[pocision_actual] = lista[pocision_actual - 1]
       pocision_actual -= 1
    
     lista[pocision_actual] = valor_actual
  return lista


if __name__ == '__main__':
  tamanio_de_lista = int(input('De que tamaño será la lista: '))
  lista_random = [random.randint(0, 100) for i in range(tamanio_de_lista)]
  lista_ordenada = ordenamiento_por_insercion(lista_random)
  print(f'lista random {lista_random}')
  print(f'lista ordenada {lista_ordenada}')