package main

import "fmt"

func main() {
	//Diccionario o map
	m := make(map[string]int)

	m["Jose"] = 14
	m["Pepito"] = 20

	fmt.Println(m)

	//Recrrer un map
	for i, v := range m {
		fmt.Println(i, v)
	}

	//Obtener un valor sin su indice
	value := m["Jose"]
	fmt.Println(value)

	//Obtener un valor con su indice
	value, ok := m["Jose"]
	fmt.Println(value, ok)
}
