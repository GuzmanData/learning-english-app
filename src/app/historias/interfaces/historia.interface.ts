import { Seccion } from './contenido.interface';
export interface Historia {
    id: number,
    url?: string,
    subtitle?: string,
    seccion?: Seccion[],
    finHistoria?: number,
    inicioHistoria?:number
}