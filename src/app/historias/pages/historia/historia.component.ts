import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Historia } from '../../interfaces/historia.interface';
import { HistoriaService } from '../../services/historia.service';
import { Seccion } from '../../interfaces/contenido.interface';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  interval;
  duracionHistoria: number;

  historia: Historia;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('repeticionesPorFrase') repeticionesPorFrase: ElementRef;
  @ViewChild('repeticionesPorHistoria') repeticionesPorHistoria: ElementRef;




  constructor(
    private historiaService: HistoriaService
  ) { }

  ngOnInit(): void {
    this.historia = this.historiaService.getHistoria(2);





    // console.log(this.historia);

  }








  modificarTiempo(videoplayer?: ElementRef, tiempoIncio?: number, tiempoFin?: number) {
    setTimeout(() => {
      this.videoplayer.nativeElement.currentTime = 2;

    }, 1500);
  }





  iniciarHistoria(tiempoInicio: number, tiempoFin: number) {

    this.videoplayer.nativeElement.muted = 'muted';

    clearInterval(this.interval);


    if (tiempoInicio === 0 && tiempoInicio === 0) {

      if (this.repeticionesPorFrase.nativeElement.value > 0) {

        this.repetirHistoria()
      } else {
        this.videoplayer.nativeElement.play()
        this.videoplayer.nativeElement.currentTime = tiempoInicio;
      }


    } else {
      this.repetirSeccion(1, 2)

    }


  }


  silenciaVideo = () => {
    this.videoplayer.nativeElement.muted = 'muted';

  }


  detenerVideo() {
    this.videoplayer.nativeElement.pause();
  }
  continuarVideo() {
    this.videoplayer.nativeElement.play();
  }
  reiniciarVideo() {
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
  }

  repetirSeccion = (tiempoInicio: number, tiempoFin: number, historia?: Historia) => {
    clearInterval(this.interval);

    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    const repeticionesPorSeccion: number = this.repeticionesPorFrase.nativeElement.value;

    video.play();
    video.currentTime = tiempoInicio;
   let  contarRepeticiones:number = 1;

   console.log(tiempoInicio);
   console.log(tiempoFin);


    this.interval = setInterval(() => {


      if(contarRepeticiones >repeticionesPorSeccion ) {
        video.pause();
        clearInterval(this.interval);
        return;
      }
      if(video.currentTime > tiempoFin) {
        contarRepeticiones ++;
        video.currentTime = tiempoInicio
      }
    }, 100);
  };


  repetirHistoria = () => {
    clearInterval(this.interval);


    this.duracionHistoria = 0;
    this.historia.seccion.forEach(x => {
      this.duracionHistoria = (x.fin * this.repeticionesPorFrase.nativeElement.value) + this.duracionHistoria
      console.log(this.duracionHistoria);
    });

    this.videoplayer.nativeElement.play()
    this.videoplayer.nativeElement.currentTime = this.historia.inicioHistoria;

    let contarRepeticiones: number = 0;
    this.interval = setInterval(() => {
      contarRepeticiones++;
      this.repetirSeccionDesdeData();
      if (contarRepeticiones >= this.repeticionesPorHistoria.nativeElement.value) {
        clearInterval(this.interval);
        this.videoplayer.nativeElement.pause();
      }
    }, this.duracionHistoria * 1000);
  }


  repetirSeccionDesdeData = () => {
    const video: HTMLVideoElement = this.videoplayer.nativeElement;
    video.play();
    clearInterval(this.interval);
    const secciones = this.historia.seccion;


    let indiceSeccion: number = 0;
    let contarRepeticionesSeccion: number = 1;
    let contarRepeticionesHistoria: number = 0;
    const repeticionesPorSeccion: number = this.repeticionesPorFrase.nativeElement.value;
    const repeticionesPorHistoria: number = this.repeticionesPorHistoria.nativeElement.value
    video.currentTime = secciones[indiceSeccion]?.inicio

    this.interval = setInterval(() => {
      if (indiceSeccion === this.historia.seccion.length) {
        console.log("termino la historia");
        contarRepeticionesHistoria++;
        indiceSeccion = 0;
        contarRepeticionesSeccion = 0;

        if (contarRepeticionesHistoria >= repeticionesPorHistoria) {

          clearInterval(this.interval);
          this.videoplayer.nativeElement.pause();
          return
        }
      }

      if (video.currentTime >= secciones[indiceSeccion].fin) {
        contarRepeticionesSeccion++;
        video.currentTime = secciones[indiceSeccion]?.inicio
      }

      if (contarRepeticionesSeccion > repeticionesPorSeccion) {
        indiceSeccion++;
        contarRepeticionesSeccion = 1;
        video.currentTime = secciones[indiceSeccion]?.inicio
      }
    }, 50)
  }

}

