let score = {
    win: 0,
    lost: 0,
    tie: 0,
}
function generateComputerChoice() {
    // This will generate random number b/w 0 & 3;
    let randomNumber = Math.random() * 3;

    if (randomNumber < 0 && randomNumber <=1){
        return "Bat";
    } else if (randomNumber > 1 && randomNumber <=2){
        return "Ball";
    } else {
        return "Stump";
    }
}
    //* Bat Ball Stump game using function and parameters  -->

    function getResult(userMove, computerMove) {
        if (userMove === 'Bat'){
            if (computerMove === 'Ball'){
                score.win++;
                return 'User Won';
            } else if (computerMove === 'Ball'){
                score.tie++;
                return `it\'s a draw!`;
            } else if (computerMove === 'Stump') {
                score.lost++;
                return 'Computer won. User Lost';
            }
        } else if (userMove === 'Ball'){
            if (computerMove === 'Ball'){
                score.tie++;
                return `it\'s a draw!`;
            } else if (computerMove === 'Ball'){
                score.lost++;
                return 'Computer won. User Lost';
            } else if (computerMove === 'Stump') {
                score.win++;
                return 'User Won';
            }
        } else {
            if (computerMove === 'Ball'){
                score.lost++;
            return 'Computer won. User Lost';
            } else if (computerMove === 'Ball'){
                score.win++;
                return 'User Won';
            } else if (computerMove === 'Stump') {
                score.tie++;
                return `Its a Tie`
                }
            }
    }
    function showResult(userMove, computerMove, result) {
        alert(`You have choose ${userMove}. Computer choice is ${computerMove} and 
            
            ${result}
            won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}
            `);

    }
