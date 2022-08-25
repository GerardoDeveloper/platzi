package main

import "fmt"

func main() {
	//Arrays: Son inmutables
	var array [4]int
	array[0] = 1
	array[1] = 2
	fmt.Println(array, len(array), cap(array))

	//Slice: Son mutables
	slice := []int{1, 2, 3, 4, 5, 6}
	fmt.Println(slice, len(slice), cap(slice))

	//Métodos en los slice
	fmt.Println(slice[0])   //imprime el indice 0
	fmt.Println(slice[:3])  //imprime hasta el indice 3
	fmt.Println(slice[2:4]) //imprime del indice 2 hasta el 4
	fmt.Println(slice[4:])  //imprime del indice 4 en adelante.

	//Append
	slice = append(slice, 7)
	fmt.Println(slice)

	//Append nueva list
	newSlice := []int{8, 9, 10}
	slice = append(slice, newSlice...)

	//Recorrer slice con range
	sliceString := []string{"Hola", " que ", "hace"}
	for i, valor := range sliceString {
		fmt.Println(i, valor) //imprimirá el indice y el valor
	}

	//Sí se quiere presindir del indice hacemos
	for _, valor := range sliceString {
		fmt.Println(valor) //imprimirá sólo el valor
	}

	//Sí queremos imprimir sólo el indice hacemos
	for i := range sliceString {
		fmt.Println(i) //imprimirá sólo el index
	}
}
