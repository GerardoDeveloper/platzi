objective = int(input("Ingresa un número: "))
requests = 0

while requests ** 2 < objective:
  requests += 1
if requests ** 2 == objective:
  print(f'La raíz cuadrada de {objective} es {requests}')
else:
  print(f'No tiene una raíz cuadrada exacta.')