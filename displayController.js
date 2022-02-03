// update the board.
const display = (() => {
    const update = ( space ) => {
        // check if space empty
        isEmpty(space);
        // upadate space
        return ;
    }
    const isEmpty = ( space ) => {
        // if space is empty return true
        // TODO update this to check the space value
        if (!space) {
            return false;
        }
        return true;
    }
    
    return { update };
})();