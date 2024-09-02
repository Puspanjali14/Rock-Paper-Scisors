document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    let wins = 0;
    let losses = 0;
    let ties = 0;

    const resultText = document.getElementById('result');
    const scoreText = document.getElementById('score');

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = determineWinner(playerChoice, computerChoice);

            displayResult(playerChoice, computerChoice, result);
            updateScore(result);
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'tied';
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'won';
        } else {
            return 'lost';
        }
    }

    function displayResult(player, computer, result) {
        const resultMessage = `Computer chose ${computer}. You ${result}!`;
        resultText.textContent = resultMessage;

        resultText.classList.add('animate-bounce');
        setTimeout(() => {
            resultText.classList.remove('animate-bounce');
        }, 1000);
    }

    function updateScore(result) {
        if (result === 'won') {
            wins++;
        } else if (result === 'lost') {
            losses++;
        } else {
            ties++;
        }
        scoreText.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
    }

    // Responsive Adjustments
    window.addEventListener('resize', () => {
        adjustLayoutForScreenSize();
    });

    function adjustLayoutForScreenSize() {
        const screenWidth = window.innerWidth;
        const container = document.querySelector('.max-w-sm');

        if (screenWidth < 640) {
            container.classList.add('w-full', 'px-4');
        } else {
            container.classList.remove('w-full', 'px-4');
        }
    }

    // Initial layout adjustment
    adjustLayoutForScreenSize();
});
