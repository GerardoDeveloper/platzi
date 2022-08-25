objective = int(input('Escoge un número: '))
epsilon = 0.01
bajo = 0.0
alto = max(1.0, objective)
resquest = (alto + bajo) / 2

while abs(resquest ** 2 - objective) >= epsilon:
  if resquest ** 2 < objective:
    low = resquest
  else:
    alto = resquest
  resquest = (alto - bajo) / 2
print(f'La raíz cuadrada de {objective} es {resquest}')