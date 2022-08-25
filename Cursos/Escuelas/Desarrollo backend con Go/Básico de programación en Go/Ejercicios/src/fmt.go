/*
	-----------------------------------------------------------------------------------
	Uso de fmt
*/
helloMensage := "Hello"
wordMensage := "word"

//Println
fmt.Println(helloMensage, wordMensage)

//Printf
nombre := "Platzi"
cursos := 500
fmt.Printf("%s tiene más de %d cursos\n", nombre, cursos) //En caso que sepas cual es el tipo de dato. En caso es un string (%s) y un entero (%d)
fmt.Printf("%v tiene más de %v cursos\n", nombre, cursos) //En caso que no se sepa el tipo de dato a imprimir, se colocará '%v'

//Sprintf
message := fmt.Sprintf("%s tiene más de %d cursos", nombre, cursos)
fmt.Println(message)

//Para saber que tipo de dato es una variable.
fmt.Printf("helloMesage: %T\n", helloMensage)
fmt.Printf("Cursos: %T\n", cursos)