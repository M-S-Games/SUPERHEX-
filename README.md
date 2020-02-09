# SUPERHEX+

## Integrantes 
- Miguel Ángel Castellanos Salamanca 
- Juan Sebastian Gómez López 
## Resumen:
Para este proyecto se tomó la decisión de reinventar un juego que ya existe con un sistema de competencia mucho más dinámico y emocionante. Mas adelante se explicará el juego y las modificaciones que se van a implementar para el mismo.

## SUPERHEX:
Con la gran acogida que tuvieron los juegos .io en el mundo, llegó SUPERHEX.io. El juego consiste en ganar puntos consiguiendo territorio en un tablero llenando hexágonos de tu color y matando a otros jugadores. Al ganar puntos se va escalando en una tabla de posiciones con todos los jugadores del servidor, el objetivo final del juego es llegar a los primeros lugares y estar el mayor tiempo posible.
Para nuestra versión del juego solo vamos a tomar las mecánicas del juego, pero ahora vamos a modificar el objetivo del juego y vamos a agregar un nuevo elemento. En la parte modificaciones se explicarán en detalle el juego.

## Modificaciones:
Las modificaciones se dividen en dos partes:
1. Objetivo del juego: El objetivo en SUPERHEX+ es ser el ultimo jugador vivo en el servidor. Se Inician con un máximo de 25 jugadores en la partida y se tiene un tamaño inicial del tablero, al pasar el tiempo el tamaño del tablero se va reduciendo mientras los jugadores van ganando terreno y van matando a otros jugadores. La partida termina cuando solo hay un jugador vivo.
2. 	Minas: en el tablero se distribuyen aleatoriamente minas las cuales si el jugador pasa por encima de ese hexágono muere. Las minas son visibles a 3 hexágonos de distancia.

## Mockups
### Pantalla incial 

![pantalla inicial](https://github.com/M-S-Games/SUPERHEXPlus/blob/master/Images/1.png)

Es una pantalla muy sencilla donde le usuario solo tiene que ingresar (si desea) su nombre de usuario para poder empezar a jugar.

### Pantalla de juego 
![pantalla juego 1](https://github.com/M-S-Games/SUPERHEXPlus/blob/master/Images/2.png)
![pantalla juego 2](https://github.com/M-S-Games/SUPERHEXPlus/blob/master/Images/3.png)

En la pantalla de juego solo se tiene información de estado de la partida a la parte superiroir y el resto es el movimiento del jugador.

### Pantalla final
![pantalla final](https://github.com/M-S-Games/SUPERHEXPlus/blob/master/Images/4.png)

Se muestra un resumen de la partida del jugador junto a un aviso de fin de partida y un boton de volver a jugar que lo lleva a la pantalla incial.
