import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-ng-dados';
  diceLeft="../assets/img/dice1.png"
  diceRight="../assets/img/dice2.png"
  number1: number;
  number2: number;
  lista: string;
  lugar: string;
  razon: string;
  indice: number;

  mylist = ['Prepara un pastel','visita a un amigo','aprende una canción','intercambia un libro','ayuda a una persona','comprate un chocolate','aprende a jugar un videojuego',
            'inscribete a un curso','ve al cine','pinta tu cuarto',
            'hornear',
            'visita a tu vecino',
            'aprende una canción',
            'realizar papiroflexia',
            'pintar',
            'juega en familia',
            'ver series',
            'aprender un nuevo idioma',
            'hacer ejercicio',
            'reorganizar tu casa',
            'decorar tu casa',
            'liberar tu closet',
            'jardinería',
            'leer',
            'realizar mándalas',
            'explorar nuevos géneros musicales',
            'pintar tu casa',
            'ver álbumes de fotos',
            'sacar lo que no ocupes',
            'cocinar ',
            'juega juegos virtuales',
            'realiza una rutina de cuidado de la piel',
            'mejora tu caligrafía',
            'aprende a organizarte',
            'hacer joyería',
            'tejer',
            'aprender música',
            'reciclar']
  milugar=[
    'metepec, Edo. de México',
    'Real del Monte, Hidalgo',
    'Piramides de Teotihuacan, México',
    'Puerto de Veracruz, Veracruz',
    'Acuario de Veracruz, Veracruz',
    'Huasteca Potosina, San Luis Potosí',
    'Hierve el agua, Oaxaca',
    'Xilitla, San Luis Potosí ',
    'Playa del Carmen, Quintana Roo',
    'Cascadas Agua Azul, Chiapas',
    'Santuario de la Mariposa Monarca, Michoacán ',
    'Palenque, Chiapas',
    'Palacio de Bellas Artes, Ciudad de México',
    'Bosque de Chapultepec, Ciudad de México',
    'Xochimilco, Ciudad de México',
    'Tequila, Jalisco',
    'Taxco, Guerrero',
    'Malecón de Mazatlán, Sonora',
    'Atlates de Tula, Hidalgo.',
    'Chi Chen Itzá, Quintana Roo',
    'Acapulco, Guerrero',
    'Puerto Vallarta, Jalisco',
    'Los Cabos, Baja California Sur',
    'San Miguel de Allende, Guanajuato.'
  ]

  mirazon=[
    'Es un publo tradicional que te regresa al pasado',
    'Especial para climas fríos ',
    'Lugar con mucha historia, ideal para deifrutar del paisaje y buenas fotos',
    'Ideal para ver barcos grandes de carga y veleros internacionales que arriban al lugar',
    'Un lugar especial para admirar el cuidado, alimentación y desarrollo de la vida marina',
    'Perfecto para visitar en clima caluroso, para admirar los bellos paisajes de cascadas, ríos y cenotes que son perfeccionados por agua verde azulada',
    'Esquisito lugar para disfrutar en familia y disfrutar de las cataratas pétreas.',
    'Maravilloso lugar que contiene historia por su lugar más famoso: Jardín Escultórico de Edward James.',
    'Uno de los principales corredores de turismo de México, donde encontrarás los mejores paisajes, atracciones acuáticas y sobre todo, las mejores playas.',
    '¿Te gustaría sentir la brisa el agua y el sonido del agua cayendo sobre tu cabeza? El lugar ideal para relajarse y tomar fotografías excelentes.',
    'Lugar recomendado para visitar en verano, ya que es maravilloso la apreciación hacia esta especia de mariposa que viaja desde el crudo invierno canadiense hasta este lugar.',
    'Admirable por sus zonas arqueológicas de origen maya, ideal para apreciar la historia del lugar.',
    'Majestuosa edificación en estilos modernista art que es un síbolo de alta cultura.',
    'Un parque agradable, tranquilo y disfrutable para conocer la historia que refleja el Castillo de Chapultepec.',
    'Un lugar que es reconocido por la trajineras en las cuales puedes tener tu fiesta temática sobre los canales de Xochimilco.',
    'Más que una tradición, es de ley que aquel que entra a la cata de tequilas, sale feliz y contento de probar la bebida que más representa a México. Además de conocer el proceso de manufactura de dicha bebida.',
    'Si plata quieres comprar, Taxco debes de visitar, pues es un lugar donde abunda la buena plata y los mejores artesanos.',
    'Además de agradables playas, es un lugar para salir de noche de rumba donde disfrutarás bebidas y alimentos típicos del lugar. En el malecón de Mazatlán es pecado dormir antes de media noche.',
    'Lugar para admirar el arte tallado en roca basáltica, además de conocer los campos donde se originaron los primeros juegos de pelota de México y más edificaciones de interés.',
    'Conocido por ser uno de los yacimientos arqueólogicos más importantes del continente americano y ser parte de las 7 maravillas del mundo ',
    'Primera zona de playa mexicana de fama mundial, conocida por su playas y zona de hoteles más importantes del país.',
    'Zona de playas hermosas y disfrutables para realizar deportes extremos y paseos en lancha',
    'Lugar famoso por conectar el golfo de california y el oceano pacífico, además de sus excelentes playas.',
    'Muy popular por la parroquia de San Miguel Arcángel y por tener historia en sus calles y avenidas, además de poder consumir alimentos típicos y tomar fotografías admirables.'
  ]
  
  constructor(){
    this.lista='cargando';
    this.lugar='';
    this.razon='';
    this.indice=0;
    this.number1=Math.round(Math.random()*5)+1; 
    this.number2=Math.round(Math.random()*5)+1;
    this.diceLeft="../assets/img/dice"+this.number1+".png"
    this.diceRight="../assets/img/dice"+this.number2+".png"
  }

  throwDice(): void{
    this.number1=Math.round(Math.random()*5)+1; 
    this.number2=Math.round(Math.random()*5)+1;
    this.indice = Math.round(Math.random()*25)
    this.lista = this.mylist[Math.round(Math.random()*38)] ;
    this.lugar = this.milugar[this.indice] ;
    this.razon= this.mirazon[this.indice] ;
    this.diceLeft="../assets/img/dice"+this.number1+".png"
    this.diceRight="../assets/img/dice"+this.number2+".png"
  }

}
