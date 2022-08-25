package main

import "fmt"

type car struct{
	brand string
	year int
}

func main() {
	//1ra forma de instancial un struct
	myCar := car{brand: "Ford", year: 2020}
	fmt.Println(myCar)

	//2da forma de instanciar un struct
	var otherCar car
	otherCar.brand = "Ferrari"
	fmt.Println(otherCar) //imprimirá 'Ferrari 0', el 0 (cero) hace referencia al año (cero values)
}
