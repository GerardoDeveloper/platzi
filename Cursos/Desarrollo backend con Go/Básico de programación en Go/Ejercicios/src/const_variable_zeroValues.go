	//Constantes
	const pi float64 = 3.14 //metodo 1
	const pi2 = 3.1415      //metodo 2

	/*
		Existen 4 tipos de declaración de variables enteras
	*/

	//1- Si la variable no ha sido declarada antes
	base := 21

	//2- Si se declaro anteriormente.
	base = 21

	//3- Declarando el nombre, tipo y el valor
	var altura int = 14

	//4- Declarando el nombre y el tipo solamente.
	var area int

	fmt.Println(base, altura, area)
	/*
		Zero values

		En otros lenguajes, no agregar un valor a una variable, se setea un valor null, en go no sucede lo mismo,
		ellos toman un valor por defecto. Es muy importante tenerlo encuenta al momento de hacer un script en go.
	*/
	var a int     //= 0
	var b float64 //= 0
	var c string  //= ""
	var d bool    //false

	fmt.Println(a, b, c, d)

	//Calcular el area del cuadrado.
	const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado
	fmt.Println("El area del cuadrado es: ", areaCuadrado)