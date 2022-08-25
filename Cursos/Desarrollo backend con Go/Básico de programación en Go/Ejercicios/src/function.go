/*
	-----------------------------------------------------------------------------------
	Uso de funciones
*/
func normalFunction(message string) {
	fmt.Println(message)
}

//Forma de pasar argumentos de manera convencional
func TripleArgument(a int, b int, c string) {
	fmt.Println(a, b, c)
}

//Forma de pasar argumentos si hay más de un argumento del mismo tipo
func TripleArgument2(a, b int, c string) {
	fmt.Println(a, b, c)
}

//Forma de retornar un valor en una función
func returnValue(a int) int {
	return a * 2
}

/*
Forma de retornar más de un valor en una función.

- Se debe llamar de la forma 'value1, valu2 := doubleReturn(5)'
- Sí se quiere descartar uno de los dos valores devueltos, se debe llamar 'value1, _ := doubleReturn(5)'
*/
func doubleReturn(a int) (b, c int) {
	return a, a * 2
}