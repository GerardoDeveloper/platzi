def devisors(num):
    divisor = [i for i in range(1, num + 1) if num % i == 0]
    print(divisor)

def run():
    num = input("Ingresa un número: ")
    assert num.isnumeric(), "Debes ingresar un número."
    devisors(int(num))
    print("Termino el programa")


# Punto de entrada del script.
if __name__ == '__main__':
    run()
