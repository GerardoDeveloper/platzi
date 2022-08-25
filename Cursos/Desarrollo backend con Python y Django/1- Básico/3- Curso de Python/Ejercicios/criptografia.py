# -*- coding: utf-8 -*-

KEYS = {
    'a': 'w',
    'b': 'E',
    'c': 'x',
    'd': '1',
    'e': 'a',
    'f': 't',
    'g': '0',
    'h': 'C',
    'i': 'b',
    'j': '!',
    'k': 'z',
    'l': '8',
    'm': 'M',
    'n': 'I',
    'o': 'd',
    'p': '.',
    'q': 'U',
    'r': 'Y',
    's': 'i',
    't': '3',
    'u': ',',
    'v': 'J',
    'w': 'N',
    'x': 'f',
    'y': 'm',
    'z': 'W',
    'A': 'G',
    'B': 'S',
    'C': 'j',
    'D': 'n',
    'E': 's',
    'F': 'Q',
    'G': 'o',
    'H': 'e',
    'I': 'u',
    'J': 'g',
    'K': '2',
    'L': '9',
    'M': 'A',
    'N': '5',
    'O': '4',
    'P': '?',
    'Q': 'c',
    'R': 'r',
    'S': 'O',
    'T': 'P',
    'U': 'h',
    'V': '6',
    'W': 'q',
    'X': 'H',
    'Y': 'R',
    'Z': 'l',
    '0': 'k',
    '1': '7',
    '2': 'X',
    '3': 'L',
    '4': 'p',
    '5': 'v',
    '6': 'T',
    '7': 'V',
    '8': 'y',
    '9': 'K',
    '.': 'Z',
    ',': 'D',
    '?': 'F',
    '!': 'B',
}

# Encriptamos


def cypher(message):

    # Por cada palabra escrita por teclado, si encuentra un espacio, lo separamos.
    words = message.split(' ')

    # Creamos una lista auxiliar del msj encriptado
    cypher_message = []

    # Recorremos las palabras
    for word in words:

        # Creamos una variable auxiliar que almacenará las palabras encriptadas.
        cypher_word = ''

        # Recorremos cada letras en la palabra
        for letter in word:

            # Almacenamos el valor coorrespondiente a la llave de la letra en la variable auxiliar.
            cypher_word += KEYS[letter]

        # Agregamos al msj encriptado las letras encriptadas.
        cypher_message.append(cypher_word)

    # Retornamos nuestro msj encriptado
    # Por cada espacio junte nuestro msj cifrado.
    return ' '.join(cypher_message)


def decipher(message):

    # Por cada palabra escrita por teclado, si encuentra un espacio, lo separamos.
    words = message.split(' ')

    # Creamos una lista auxiliar del msj desencriptado.
    decipher_message = []

    # Recorremos las palabras.
    for word in words:

        # Creamos una variable auxiliar que almacenará las palabras desencriptadas.
        decipher_word = ''

        # Recorremos las letras de cada palabra.
        for letter in word:

            # Recorremos por cada llave y por cada valor en el diccionario.
            for key, value in KEYS.iteritems():
                
                #Si el valor es igual a la letra
                if value == letter:
                    #Almacenamos la lleve coorrespondiente al valor de la key en la variable auxiliar.
                    decipher_word += key
        
        #Agregamos el msj desencriptado a la variable.
        decipher_message.append(decipher_word)
    
    #Retornamos el msj desencriptado.
    return ' '.join(decipher_message)


def run():

    while True:

        command = str(input('''--- * --- * --- * --- * --- * --- * --- * ---

            Bienvenido a criptografía. ¿Qué deseas hacer?

            [c]ifrar mensaje
            [d]ecifrar mensaje
            [s]alir
        '''))

        if command == 'c':
            message = str(input('Escribe tu mensaje: '))
            cypher_message = cypher(message)
            print(cypher_message)

        elif command == 'd':
            message = str(input('Escribe tu mensaje tu cifrado: '))
            decypher_message = decipher(message)
            print(decypher_message)
        elif command == 's':
            print('salir')
        else:
            print('¡Comando no encontrado!')


if __name__ == '__main__':
    print('M E N S A J E S  C I F R A D O S')
    run()
