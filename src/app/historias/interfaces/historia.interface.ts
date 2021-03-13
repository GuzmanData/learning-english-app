import { Seccion } from './seccion.interface';
export interface Historia {
    id: number,
    url?: string,
    subtitle?: string,
    seccion?: Seccion[]
}