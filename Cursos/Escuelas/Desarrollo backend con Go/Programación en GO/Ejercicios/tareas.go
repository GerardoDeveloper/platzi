package main
import "fmt"
type task struct {
	name        string
	description string
	completed   bool
}

func (t *task) maskCompleted()  {
	t.completed = true
}

func (t *task) updateDescription(description string)  {
	t.description = description
}

func (t *task) updateName(name string)  {
	t.name = name
}

func main() {
	t := &task{
		name:        "Completar curso",
		description: "Completar el curso de Go en platzi",
	}
	fmt.Printf("%+v\n", t)
	t.maskCompleted()
	t.updateDescription("Actualizar curso")
	t.updateName("Finalizar curso")
	fmt.Printf("%+v\n", t)

}
