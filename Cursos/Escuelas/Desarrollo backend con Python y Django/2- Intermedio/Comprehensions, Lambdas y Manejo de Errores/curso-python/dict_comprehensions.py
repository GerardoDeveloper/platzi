from ast import For
import math


def get_number_naturals():
    my_dict = {}

    for i in range(0, 101):
        if i % 3 != 0:
            my_dict[i] = round(math.pow(i, 3))

    print(my_dict)


def get_number_naturals_comprehensions():
    """
    Obtiene los números naturales elevados al cuadrado.

    Return: void
    """

    number_naturals = {i: round(math.pow(i, 3))
                       for i in range(0, 101) if i % 3 != 0}
    print("number_naturals: ", number_naturals)


if __name__ == '__main__':
    # get_number_naturals_comprehensions()
    get_number_naturals()
