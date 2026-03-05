function discribeRoom(room) {
    if (room === "outside") {
        console.log("you see a abonded house in overgrown bushes")
    } else if (room === "hallway") {
        console.log("you seen a rundown hallway with 3 doors")
    } else if (room === "room1") {
        console.log("You see a room wiht peeling paint and a broom")
    } else if (room === "room2") {
        console.log("you see a room with the shtters open")
    } else if (room === "room3") {
        console.log("you see a sunroom with a veiw of the grass outside")
    }
}

const exampleNode = {
    image: "images/hallway.jpg",
    text: "You see a room wiht peeling paint and a broom",
    choices: ["go to room1","go to room2","go to room3"]
}

const storyNodes = ["outside","hallway","room1","room2","room3"]