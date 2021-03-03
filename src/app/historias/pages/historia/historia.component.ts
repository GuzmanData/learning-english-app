import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Historia } from '../../interfaces/historia.interface';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  interval;

  historia: Historia = {
    url: "../../../../assets/historias/learn-english-with-inside-out-how-to-speak-about-emotions-in-english.mp4"
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('repeticionesPorFrase') repeticionesPorFrase: ElementRef;




  constructor() { }

  ngOnInit(): void {
  }



  modificarTiempo(videoplayer?: ElementRef, tiempoIncio?: number, tiempoFin?: number) {
    setTimeout(() => {
      this.videoplayer.nativeElement.currentTime = 2;

    }, 1500);
  }





  moverVideo(tiempoInicio: number, tiempoFin: number) {

    clearInterval(this.interval);
    if (this.repeticionesPorFrase.nativeElement.value > 0) {
      this.videoplayer.nativeElement.play()
      this.videoplayer.nativeElement.currentTime = tiempoInicio;

      let contarRepeticiones: number = 1;
      this.interval = setInterval(() => {
        contarRepeticiones++;
        this.videoplayer.nativeElement.currentTime = tiempoInicio;
        if (contarRepeticiones > this.repeticionesPorFrase.nativeElement.value) {
          clearInterval(this.interval);
        }
      }, tiempoFin * 1000);
    } else {
      this.videoplayer.nativeElement.play()
      this.videoplayer.nativeElement.currentTime = tiempoInicio;
    }
  }


  detenerVideo() {
    // clearInterval(this.interval);
    this.videoplayer.nativeElement.pause();
  }
  continuarVideo() {
    // clearInterval(this.interval);
    this.videoplayer.nativeElement.play();
  }
  reiniciarVideo() {
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
    clearInterval(this.interval);
  }

}

