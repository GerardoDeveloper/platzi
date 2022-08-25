from ast import Assert


def make_repeater_of(n):
    def repeater(string):
        assert type(string) == str, "Debes usar cadenas"
        return string * n
    return repeater


def run():
    # La variable 'repeater_5' recordará en N° 5
    repeater_5 = make_repeater_of(5)

    # Imprime 5 veces el string pasado por parámetro.
    print(repeater_5("Hola"))

# ===============================================================================


def make_division_by(n):
    def division(x):
        assert type(x) == int, "Debes ingresar sólo números"
        return x / n
    return division


# Punto de entrada del script.
if __name__ == '__main__':
    # run()
    division_by_3 = make_division_by(5)
    print(division_by_3(100))
