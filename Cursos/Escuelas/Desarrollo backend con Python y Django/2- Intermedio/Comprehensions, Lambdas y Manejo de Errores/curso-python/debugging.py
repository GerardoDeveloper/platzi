def devisors(num):
    divisor = [i for i in range(1, num + 1) if num % i == 0]
    print(divisor)

def run():
    try:
        num = int(input("Ingresa un número: "))
        devisors(num)
        print("Termino el programa")
    except Exception as e:
        print("Ha ocurrido un error: " + str(e))


# Punto de entrada del script.
if __name__ == '__main__':
    run()
