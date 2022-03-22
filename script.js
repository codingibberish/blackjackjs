let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard; 

let dealerFirstCard = getRandomCard();
let dealerSecondCard = getRandomCard();
let dealerCards = [dealerFirstCard, dealerSecondCard];
let dealerSum = dealerFirstCard + dealerSecondCard;

let hasBlackJack = false;
let message = "";
let messageI = document.getElementById("message-i");
let sumI = document.getElementById("sum-i");
let cardsI = document.getElementById("cards-i");
let isAlive = false;
let dealerAlive = false;

let player = {
    name: "han",
    chips: 90
}

let playerI = document.getElementById("bank-i");
playerI.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
    let randomNum = Math.floor ( Math.random() * 13) + 1;

    if (randomNum === 1) {
        return 11;
    } else if (randomNum > 10) {
        return 10;
    } else {
        return randomNum;
    }

}

function stay() {
    if (sum > dealerSum) {
        messageI.textContent = "You win!";
    } else if (sum === dealerSum) {
        messageI.textContent = "You draw!";
    } else
        {
        messageI.textContent = "The dealer wins! " + dealerSum;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard, secondCard];
    let sum = firstCard + secondCard;
    isAlive = true;   
    
    let dealerFirstCard = getRandomCard;
    let dealerSecondCard = getRandomCard;
    let dealerCards = [dealerFirstCard, dealerSecondCard];
    let dealerSum = dealerFirstCard + dealerSecondCard;
    dealerAlive = true;

    renderGame();
}


function renderGame() {
    sumI.innerText = "Sum: " + sum; 

    cardsI.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsI.textContent += " " + cards[i];
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageI.innerText = message;
    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false && dealerAlive == true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)

        if (dealerSum < 17) {
            let dealerCard = getRandomCard();
            dealerSum += dealerCard;
            dealerCards.push(dealerCard);
        } else {
            messageI.textContent = "Dealer stays."
            stay()
        }

        if (dealerSum > 21) {
            dealerAlive = false;
            messageI.textContent = "Dealer folds. You win!";
            isAlive = false;
        }

        renderGame();
        
    }

   
    
}