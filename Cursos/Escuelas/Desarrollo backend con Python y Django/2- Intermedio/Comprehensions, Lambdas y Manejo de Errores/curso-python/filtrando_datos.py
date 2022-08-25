DATA = [
    {
        'name': 'Facundo',
        'age': 72,
        'organization': 'Platzi',
        'position': 'Technical Coach',
        'language': 'python',
    },
    {
        'name': 'Luisana',
        'age': 33,
        'organization': 'Globant',
        'position': 'UX Designer',
        'language': 'javascript',
    },
    {
        'name': 'Héctor',
        'age': 19,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'ruby',
    },
    {
        'name': 'Gabriel',
        'age': 20,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'javascript',
    },
    {
        'name': 'Isabella',
        'age': 30,
        'organization': 'Platzi',
        'position': 'QA Manager',
        'language': 'java',
    },
    {
        'name': 'Karo',
        'age': 23,
        'organization': 'Everis',
        'position': 'Backend Developer',
        'language': 'python',
    },
    {
        'name': 'Ariel',
        'age': 32,
        'organization': 'Rappi',
        'position': 'Support',
        'language': '',
    },
    {
        'name': 'Juan',
        'age': 17,
        'organization': '',
        'position': 'Student',
        'language': 'go',
    },
    {
        'name': 'Pablo',
        'age': 32,
        'organization': 'Master',
        'position': 'Human Resources Manager',
        'language': 'python',
    },
    {
        'name': 'Lorena',
        'age': 56,
        'organization': 'Python Organization',
        'position': 'Language Maker',
        'language': 'python',
    },
]


def run():
    """
    Ejecuta


    Keyword arguments:
    argument -- description
    Return: return_description


    By {Gerardoveloper®}

    """

    all_python_developers = [worker['name']
                             for worker in DATA if worker['language'] == "python"]
    all_platzi_workers = [worker['name']
                          for worker in DATA if worker['organization'] == 'Platzi']

    # Filtra las edades.
    adults = list(filter(lambda worker: worker['age'] >= 18, DATA))

    # Extrae solamente los nombres
    adults = list(map(lambda worker: worker['name'], adults))

    # Agrega un nuevo diccionario con la clave 'old'
    old_people = list(map(lambda worker: worker | {
                      "old": worker['age'] > 70}, DATA))

    for i in old_people:
        print(i)


if __name__ == '__main__':
    run()
