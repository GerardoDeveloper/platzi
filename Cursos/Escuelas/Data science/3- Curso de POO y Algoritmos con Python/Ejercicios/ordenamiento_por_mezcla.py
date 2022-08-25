import random

def ordenamiento_por_mezcla(lista):
    if len(lista) > 1:
      medio = len(lista) // 2
      lista_izquierda = lista[:medio]
      lista_derecha = lista[medio:]
      
      #Llamada recursiva en cada mitad.
      ordenamiento_por_mezcla(lista_izquierda)
      ordenamiento_por_mezcla(lista_derecha)
      
      #Iteradores para recorrer las dos sublistas
      i = 0
      j = 0
      #Iterador para recorrer la lista principal.
      k = 0
      
      while i < len(lista_izquierda) and j < len(lista_derecha):
        if lista_izquierda[i] < lista_derecha[j]:
          lista[k] = lista[i]
          i += 1
        else:
          lista[k] = lista[j]
          j += 1
      k += 1
      
      while i <len(lista_izquierda):
        lista[k] = lista_izquierda[i]
        i += 1
        k += 1
      
      while j < len(lista_derecha):
        lista[k] = lista_derecha[j]
        i += 1
        k += 1
    
    return lista

if __name__ == '__main__':
  tamanio_de_lista = int(input('De que tamaño será la lista: '))
  lista_random = [random.randint(0, 100) for i in range(tamanio_de_lista)]
  lista_ordenada = ordenamiento_por_mezcla(lista_random)