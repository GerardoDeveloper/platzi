//1ra forma de declararlo y mejor practica.
modulo := 4 % 2
switch modulo {
case 0:
	fmt.Println("Es par")
default:
	fmt.Println("Es impar")
}

//2da forma
switch modulo := 4 % 2; modulo {
case 0:
	fmt.Println("Es par")
default:
	fmt.Println("Es impar")
}

//3ra forma, en caso que se tenga que evaluar varias cndiciones.
value := 200
switch {
case value > 100:
	fmt.Println("Es mayor")
case value < 0:
	fmt.Println("Es menor")
default:
	fmt.Println("No es condiciones")
}