// Mars Rover Kata by Joan Sánchez

var rover = {
  direction: "N", //Iteration 1
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

// ======================
function turnLeft(rover){ //Iteration 2
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
    break;
    case "E":
      rover.direction = "N";
    break;
    case "S":
      rover.direction = "E";
    break;
    case "W":
      rover.direction = "S";
    break;
    default:
  }
  console.log("turnLeft was called!");
  // console.log("Dirección actual del rover: "+rover.direction);
}

function turnRight(rover){ //Iteration 2
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
    break;
    case "E":
      rover.direction = "S";
    break;
    case "S":
      rover.direction = "W";
    break;
    case "W":
      rover.direction = "N";
    break;
    default:
      rover.direction = "N";
  }
  console.log("turnRight was called!");
  // console.log("Dirección actual del rover: "+rover.direction);
}

function moveForward(rover){ //Iteration 3
  var prevX = rover.x;
  var prevY = rover.y;
  switch(rover.direction) {
    case "N":
      if(rover.y==0){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.y = prevY - 1;
      }
    break;
    case "E":
      if(rover.x==9){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.x = prevX + 1;
      }      
    break;
    case "S":
      if(rover.y==9){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.y = prevY + 1;
      }
    break;
    case "W":
      if(rover.x==0){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.x = prevX - 1;
      }
    break;
    default:
      console.log("Error, parametros no encontrados");
  }

  console.log("moveForward was called");
  // console.log("Coordenadas previas Rover: "+prevX+", "+prevY);
  // console.log("Coordenadas actuales Rover: "+rover.x+", "+rover.y);
}

function moveBackward(rover){ //Bonus para tirar atrás
  var prevX = rover.x;
  var prevY = rover.y;
  switch(rover.direction) {
    case "N":
      if(rover.y==9){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.y = prevY + 1;
      }
    break;
    case "E":
      if(rover.x==0){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.x = prevX - 1;
      }      
    break;
    case "S":
      if(rover.y==0){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.y = prevY - 1;
      }
    break;
    case "W":
      if(rover.x==9){ //Bonus para comprobar si esta en el tablero
        console.log("Estás en el límite del tablero, no puedes avanzar.");
      }else{
        rover.x = prevX + 1;
      }
    break;
    default:
      console.log("Error, parametros no encontrados");
  }

  console.log("moveBackward was called");
  // console.log("Coordenadas previas Rover: "+prevX+", "+prevY);
  // console.log("Coordenadas actuales Rover: "+rover.x+", "+rover.y);
}

function move(command){ //Iteration 4
  var limit = command.length;
  for(x=0; x<limit; x++){
    if(command[x]=="f"){
      moveForward(rover);
    }else if(command[x]=="r"){
      turnRight(rover);
    }else if(command[x]=="l"){
      turnLeft(rover);
    }else if(command[x]=="b"){
      moveBackward(rover);
    }else{
      console.log("Error, la letra "+command[x]+" no es una orden correcta");
      // Bonus para comprobar la letra a moverse
    }
    rover.travelLog.push(rover.x+","+rover.y); //Iteration 5
  }
  console.log("Coordenadas seguidas: ");
  console.log(rover.travelLog);
}
