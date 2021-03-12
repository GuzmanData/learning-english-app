import { Historia } from '../interfaces/historia.interface';
import { Seccion } from '../interfaces/contenido.interface';
export const historiaData: Historia[] = [


    {
        id: 1,
        url: "../../../../assets/historias/keanu-reeves-what-its-like-to-fight-on-a-horse.mp4",
        subtitle: "../../../../assets/historias/test3.vtt",
        finHistoria: 200,
        inicioHistoria:0,
        seccion: [
            {
                inicio: 0,
                fin: 19,
                texto: "WELCOME BACK, EVERYBODY, TO 'THE LATE SHOW,' ALREADY IN PROGRESS. LADIES AND GENTLEMEN, YOU KNOW MY FIRST GUEST FROM MOVIES SUCH AS 'SPEED,' 'POINT BREAK', 'THE MATRIX,' AND THE 'JOHN WICK' SERIES OF INSTRUCTIONAL VIDEOS. PLEASE WELCOME, KEANU REEVES!"
            },
            {
                inicio: 58,
                fin: 79,
                texto: "PEOPLE ENJOY, PEOPLE ENJOY THE KEANU REEVES. THAT'S VERY NICE.   <br> THAT IS NICE! THANK YOU. <br> THE LATEST INSTALLMENT OF 'JOHN WICK' SHOWS YOU WITH REALLY EXTRAORDINARY AGILITY. AND, AND PHYSICAL CAPABILITY. YOU, YOU, YOU SAY YOU DON'T DO YOUR STUNTS, BUT DO YOU YOUR ACTION."
            }
        ]
    },


    {
        id:2,
        url : '../../../../assets/historias/deja-de-decir-estas-10-frases-en-ingles.mp4',
        subtitle: '',
        finHistoria: 0,
        inicioHistoria: 0,
        seccion: [
            {
                inicio:79,
                fin:92,
                texto: "It's freezing"
            },
            {
                inicio:133,
                fin:147,
                texto: "Don't get me wrong"
            },
            {
                inicio:184.3,
                fin:198.8,
                texto: "I cant't make up my mind"
            },
            {
                inicio:233,
                fin:253,
                texto: "What are you up to?"
            },
            {
                inicio:(4*60)+53,
                fin:(5*60)+5,
                texto: "I'm positive"
            }
        ]
    }
]
