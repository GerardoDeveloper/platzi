def main():
    """
    Listas común y corrientes.

    Keyword arguments:
    argument -- description
    Return: return_description
    """

    squares = []

    for i in range(1, 1000):
        if i % 3 != 0:
            squares.append(i**2)

    print(squares)


def listcomprehensions():
    """
    List comprehensions

    Keyword arguments:
    argument -- description
    Return: return_description
    """

    # Se lee así, para cada 'i' en el rango que va de 1 a 101, voy a elevar esa 'i' al cuadrado sólo sí 'i' modulo 3 es distinto de 0.
    squares = [i**2 for i in range(1, 101) if i % 3 != 0]
    print(squares)


if __name__ == '__main__':
    # main()
    listcomprehensions()
