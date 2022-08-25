# -*- coding: utf-8 -*-

#Creamos la función B la cual recíbe como parámetro una función A
def protected(func): #Función B

    def wrapper(password): #Función C

        if password == 'platzi':
            return func() #Retorna función A recibida por parámetro.
        else:
            print('La contraseña es incorrecta')
    
    #Retornamos el objeto 'wrapper' solamente, porque sólo queremos ejecutar la función C. 
    return wrapper


#Decorador, en este caso, se llama igual que la función B.
@protected
def protected_func(): #Función A
    print('Tu contraseña es correcta.')


if __name__ == '__main__':
    #Ingresamos por teclado el password.
    password = str(input('Ingresa tu contraseña: '))
    #Llamamos a la función A la cúal no posee parámetros, pero la función C a la que haremos
    #referencia con el decorador sí posee parámetros, por eso aquí se pasa el parámetro 
    #'password'
    protected_func(password)
