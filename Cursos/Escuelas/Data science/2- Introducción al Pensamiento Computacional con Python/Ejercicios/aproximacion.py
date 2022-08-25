objective = int(input('Escoge un numero: '))
epsilon = 0.00001
paso = epsilon ** 2
resquests = 0.0

while abs(resquests ** 2 - objective) >= epsilon and resquests <= objective:
  resquests += paso

if abs(resquests **2 - objective) >= epsilon:
  print(f'No se encontro la raíz cuadrada {objective}')
else:
  print(f'La raízcuadra de {objective} es de {resquests}')