/*
	For convencional.
*/
func for()  {
		for i := 0; i < 10; i++ {
		fmt.Println(i)
	}
}

/*
	Similar al while de otros lenguajes.
*/
func forWhile()  {
	counter := 0
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}
}

/*
	Se ejecuta por siempre, es decír, hacía al infiniito.
*/
func forForever()  {
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
	}
}