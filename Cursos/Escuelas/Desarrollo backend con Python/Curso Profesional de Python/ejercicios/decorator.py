from datetime import datetime


def execution_time(func):
    def wrapper(*args, **kwargs):
        """
        *args: Hace referencia a los argumentos posicionales.
        **kwargs: Hace referencia a los argumentos nombrados.

        Estos son los operadores de decestructuraci├│n de python.


        By {Gerardoveloper┬«}

        """
        initial_time = datetime.now()
        func(*args, **kwargs)
        final_time = datetime.now()
        time_elapsed = final_time - initial_time
        print(f'Pasaron {time_elapsed.total_seconds()} segundos')
    return wrapper


@execution_time
def random_func():
    for _ in range(1, 1000000):
        pass


def suma(a: int, b: int) -> int:
    return a + b


def saludo(nombre="Cesar"):
    print("Hola " + nombre)


random_func()
suma(5, 9)
saludo("Facundo")

