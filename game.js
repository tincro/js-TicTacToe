// GAME LOGIC 
// 
//
// players take turns choosing a space
// if space is empy, it is taken by the value of the player
// else the player gets to choose another space
// immediately check if there is a winner
// if there is a winner, congrats winner and end game

isGameOver = false;


const gameOver = () => {return isGameOver = true;}

const p1 = Player("X");
const p2 = Player("O");

const players = [p1, p2];


// main game loop
const main = (players) =>
{
    // while(!isGameOver) {
    //     // play game
    //     players.forEach(player => {
    //         //player takes a move
    //         player.move(space);
    //         // check for winner

    //     });
    // }

}