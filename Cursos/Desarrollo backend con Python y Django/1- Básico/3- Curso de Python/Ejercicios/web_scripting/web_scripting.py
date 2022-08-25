import requests
import urllib.request
from bs4 import BeautifulSoup


def run():
    for i in range(1,6):
        #Hacemos una petición 'get' a la página y la formateamos pasandole el indice.
        response = requests.get('https://xkcd.com/{}'.format(i))
        #Paerseamos el documento
        soup = BeautifulSoup(response.content, 'html.parser')
        #Obtenemos una referencia al contenedor de la imagen que se encuentra dentro del
        # contedido del html.
        image_container = soup.find(id='comic')
        #obtenemos la url de la imagen.
        image_url = image_container.find('img')['src']
        #Obtenemos una referencia al nombre de la imagen. agarramos la url de la imagen
        # y la dividimos por las diagonales que contiene, por ultimo, obtenemos la referencia
        # a la ultima diagonal 
        image_name =image_url.split('/')[-1]
        #Imprimimos en pantalla lo que el sistema está haciendo.
        print('descangando la imagen {}'.format(image_name))
        #Guardamos la imagen.
        urllib.request.urlretrieve('https:{}'.format(image_url), image_name)

if __name__ == '__main__':
    run()