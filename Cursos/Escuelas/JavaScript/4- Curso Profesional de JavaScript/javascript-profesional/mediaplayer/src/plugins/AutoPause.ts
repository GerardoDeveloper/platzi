import MediaPlayer from '../MediaPlayer';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25; // porcentaje de humbral del elemento.
    this.handleIntersection = this.handleIntersection.bind(this); // Hacemos permanente el this a la instancia del objeto.
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this); // Hacemos permanente el this a la instancia del objeto.
  }

  run(player) {
    this.player = player;

    // Creación del objeto 'observer'.
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media); // Observa el elemento midia (toda la pantalla)

    document.addEventListener('visibilitychange', this.handleVisibilityChange); // Nos deja saber si el elemento es visible o no.
  }

  /**
   * Observa los medios.
   * @param entries Listas de objetos que estamos observando.
   */
  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0]; // Entradas

    const isVisible = entry.intersectionRatio >= this.threshold; // Sí la rango de intercesión es mayor o igual a la entrada del humbral.

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  /**
   * Chequea si el elemento es visible, si lo es, pone play, de lo contrario pause al video.
   */
  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
