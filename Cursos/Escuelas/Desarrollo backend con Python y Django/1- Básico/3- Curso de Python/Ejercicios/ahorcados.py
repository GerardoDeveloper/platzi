# -*- coding: utf-8 -*-
import random

#Creamos una lista como constante la cual contendrá en cada índice porciones del ahorgados.
IMAGES = ['''

    +---+
    |   |
        |
        |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
        |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
    |   |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|   |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
        |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
        |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
   /    |
        =========''', '''

    +---+
    |   |
    O   |
   /|\  |
    |   |
   / \  |
        =========''', '''
''']

#Creamos una lista como constante, que contendrán las palabras a buscar.
WORDS = [
    'lavadora',
    'secadora',
    'sofa',
    'gobierno',
    'diputado',
    'democracia',
    'computadora',
    'teclado'
]


def random_word():
    
    #Generamos un número aleatorio de 0 a la longitud de la palábra que se encuentra en nuestra lista.
    idx = random.randint(0, len(WORDS) - 1)
    
    #Retornamos el índice
    return WORDS[idx]


def display_board(hidden_word, tries):
    
    #Muestra la imagen con el indice de intentos.
    print(IMAGES[tries])
    print('')
    
    #Mostrar la palabra escondida.
    print(hidden_word)
    
    #Separamos.
    print('--- * --- * --- * --- * --- * --- ')


def run():
    
    #Tomamos una palabra aleatoria de nuestra lista
    word = random_word()
    
    #Ocultamos la palábra por la longitud de la palábra.
    hidden_word = ['-'] * len(word)
    
    #Intentos
    tries = 0

    while True:
        
        #Mostramos el tablero.
        display_board(hidden_word, tries)
        
        #Solicitamos al usuario que escriba una letra.
        current_letter = str(input('Escoge una letra: '))
        
        #lista auxiliar para guardar el índice de la letra.
        letter_indexes = []
        for idx in range(len(word)):
            
            #Preguntamos si la letra escrita por el usuario es igual a alguna de las que se encuentran
            #dentro de la lista.
            if word[idx] == current_letter:
                
                #Si es igual, asignamos el índice a la lista.
                letter_indexes.append(idx)
        
        #Preguntamos si la lista de índices es igual a 0 (cero)
        if len(letter_indexes) == 0:
            
            #Aumentamos 'intentos' + 1
            tries += 1
            
            #Si intentos es igual a 7
            if tries == 7:
                
                #Mostramos el tablero
                display_board(hidden_word, tries)
                print('')
                print('¡Perdiste! La palabra correcta era {}'.format(word))
                
                #Salimos del loop infinito.
                break
        else:
            for idx in letter_indexes:
                
                #Si la letra que ingreso el usuario se encuentra dentro de la lista de WORD, asignamos
                #la letra ingresada a la palabra escondida. 
                hidden_word[idx] = current_letter
            #Vaciamos la lista.
            letter_indexes = []

        try:
            #Comprobamos si quedan algunos de los simbolos, en el caso que aún queden se vuelve a iterar.
            hidden_word.index('-')
        except ValueError:
            '''La funcion "index" a diferencia de otros lenguajes, que si no encuentra el valor buscado
            arrojan -1, en python esto no es así, lanza un error de tipo "ValueError" '''
            
            print('')
            print('¡Felicidades! Ganaste. La palabra es: {}'.format(word))
            break


if __name__ == '__main__':
    print('B I E N V E N I D O S  A  A H O R C A D O S')
    
    #Llamamos a la funcion.
    run()
