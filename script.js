function discribeRoom(room) {
    if (room === "outside") {
        console.log("you see a abonded house in overgrown bushes")
    } else if (room === "hallway") {
        console.log("you seen a rundown hallway with 3 doors")
    } else if (room === "room1") {
        console.log("You see a room wiht peeling paint and a broom")
    } else if (room === "room2") {
        console.log("you see a room with the shutters open")
    } else if (room === "room3") {
        console.log("you see a sunroom with a veiw of the grass outside")
    }
}

discribeRoom("room2")

const exampleNode = {
    image: "images/hallway.jpg",
    text: "You see a room wiht peeling paint and a broom",
    choices: ["go to room1","go to room2","go to room3"]
}


let outside = {
    image: "images/outside_house.jpg", 
    text:"you see a abonded house in overgrown bushes", 
    choices:["go inside"]
}

let room1 = {
    image: "images/room1.jpg", 
    text:"You see a room wiht peeling paint and a broom", 
    choices:["go back to the hallway", "look outside the window", "look around the room"]
}

let room2 = {
    image: "images/room2.jpg", 
    text:"you see a room with the shutters open", 
    choices:["go back to the hallway", "go outside", "look around the room"]
}

let room3 = {
    image: "images/room3.jpg", 
    text:"you see a sunroom with a veiw of the grass outside", 
    choices:["go back to the hallway", "look around the room"]
}

const storyNodes = [outside, room1, room2, room3]

function displayNode(i) {
    let node = storyNodes[i];
    document.getElementById("img").src = node.image;
    document.getElementById("cap").textContent = node.text;
}

displayNode(3)