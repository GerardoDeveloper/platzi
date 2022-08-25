package main

import "fmt"

func main() {
	//defer: Se utiliza para ejecutar la ultima función antes de que todo finalice.
	defer fmt.Println("Hola")
	fmt.Println("Mundo")

	//continue y break
	for i := 0; i < 10; i++ {

		//continue: Sigue ejecutando la siguiente linea 
		if i == 2 {
			fmt.Println("i ES IGUAL A 2")
			continue
		}

		//break: Termina la ejecución abruptamente según una determinada condición.
		if i == 8 {
			fmt.Println("i ES IGUAL A 8")
			break
		}
	}
}
