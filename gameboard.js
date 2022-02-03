const gameboard = (() => {

    const build = () => {
        const board = document.getElementById("gameboard");
        const wrapper = document.createElement("ul");
        for (let i =0; i<9; i++){
            let gameSpace = document.createElement("li");
            gameSpace.innerText = i;
            wrapper.append(gameSpace);
        }
        board.append(wrapper);
        return board
    }


    return {build}
})();

gameboard.build();