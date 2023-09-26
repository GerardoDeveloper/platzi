import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

// Los decoradores en angular determinan como se debe comportar una clase.
@Component({
  selector: 'app-img', // Es la manera en que vamos autilizar el componente dentro de otros elementos (componentes).
  templateUrl: './img.component.html', // El archivo enlazado de la vista.
  styleUrls: ['./img.component.css']// Los archivos de estilos.
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  // * Escuchar input de forma general.
  // @Input() img: string = 'Valor inicial'; // De esta forma el componente, puede recibir un valor desde el componte padre.

  // ============================================================================================================================
  // * Escuchar de forma especifica que 'Input' cambio.
  img: string = '';

  @Input('img') // De esta forma podemos sobrescribir el nombre del Input
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change img =>', this.img);

    // code...
  }
  // ============================================================================================================================
  imageDefault = './../../../assets/default.png';

  /**
   * Creamos nuestro propio evento.
   *
   * - Esto nos permite realiza el envío de datos desde el 'componente hijo' hacia el 'componente padre'.
   */
  @Output() loaded = new EventEmitter<string>();

  counter = 0;
  counterFn: number | undefined;

  /**
   * ? - El constructor se ejecuta ANTES del render.
   * ? - Se ejecuta sólo una sola vez.
   * ! - En el constructor es muy importante que no se ejecuten cosas asincronas.
   */
  constructor() {
    console.log('constructor', 'img =>', this.img);
  }

  /**
   * ? - Su principal funcionalizad es estar actualizando los cambios en los 'Input'
   * ? - Se ejecuta ANTES y DURANTE el render, porque esta continuamente inspeccionando cambios.
   * ? - Se ejecuta muchas veces, es decir, se ejecutas las veces que actualicemos los 'Input' del componente.
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', 'img =>', this.img);

    /**
     * ? Ventajas
     * ? - change escucha todos los cambios de cualquier 'Input'.
     *
     * ! Desventajas
     * ! - Sí se quiere escuchar todos los cambios de un 'Input' en particular, change no es la mejor opción. Para ello nos tocaria validar que Input es.
     */
    console.log(changes);

    // if (changes) {
    //   // code
    // }
  }

  /**
   * ? - Se ejecuta ANTES del render.
   * ? - Sólo se ejecuta UNA sola vez, es decir, cuando se inicializa el componente.
   * ? - Un error muy comun es detectar los cambios de los 'Input' en este hook, en su lugar, existe el hook 'ngOnChanges' para tal finalidad.
   * ! - Aquí sí podemos correr cosas asincronas. Por ej: fetch, axios, lectura de achivos, conexión a bbdd, etc.
   *
   */
  ngOnInit(): void {
    console.log('ngOnInit', 'img =>', this.img);

    // ! Sí no se tiene cuidado de eliminar de memoria un evento, puede quedar ejecutandoce por siempre por más que el componente haya sido eliminado.
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log(`counter ${this.counter}`);

    }, 1000);
  }

  /**
   * ? - Se ejecuta DESPÚES del render.
   * ? - Aquí manejamos los componentes hijos, es decir, si este componente tiene componentes hijos, si quisieramos de alguna forma manipular esos hijos,
   * ?   ejecutar algunos eventos con ellos, etc. De forma programatica, este es el hook para ello.
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  /**
   * ? - Se ejecuta cuando se ELIMINA el componente.
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn); // De esta forma se puede limpiar y eliminar desde memoria un evento.
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('Log hijo');
    this.loaded.emit(this.img); // Aquí es donde se envía el evento al componente padre realmente.
  }
}
