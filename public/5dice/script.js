"use strict";

let tableDices = [];
let shelfDices = [];
let allDices = [];
let availableDices = 5;
let availableCups = 3;
let actualPlayer = ".player-a";
let movesCounter = 0;
let timer;
let playersNumber;
let language = 0;

const diceRoll = function (amount) {
    for (let i = 0; i < amount; i++) {
        tableDices.push(Math.trunc(Math.random() * 6 + 1));
    }
    return tableDices;
};

const sortDices = function (array) {
    return array.sort((a, b) => a - b);
};

const newGame = function (e) {
    e.preventDefault();
    document.querySelector(".new-game-btn").removeEventListener("click", newGame);
    document.querySelector(".main-game").style.opacity = "1";
    document.querySelector(".winner").style.display = "none";
    document.querySelector(".winner").style.opacity = "0";

    clearInterval(timer);
    timer = startTimer();
    unmmarkActualPlayer();
    actualPlayer = ".player-a";
    unmmarkActualPlayer();
    markActualPlayer();
    document.querySelectorAll(".score").forEach(el => (el.innerHTML = ""));
    document.querySelectorAll(".score.total").forEach(el => (el.textContent = "0"));
    movesCounter = 0;
    availableCups = 3;
    availableDices = 5;
    tableDices = [];
    shelfDices = [];
    allDices = [];
    document.querySelectorAll(".used.score").forEach(el => {
        el.classList.remove("used");
        el.classList.remove("score");
    });

    document.querySelectorAll(".used").forEach(el => el.classList.remove("used"));
};

// Function that is checking which player won a game, shows modal window with personalized message
const checkPrintWinner = function () {
    let playersArray = [];
    let winnersObj = {
        0: ".name-a",
        1: ".name-b",
        2: ".name-c",
        3: ".name-d",
    };
    clearInterval(timer);

    playersArray.push(+document.querySelector(".player-a-grand-total").textContent);
    playersArray.push(+document.querySelector(".player-b-grand-total").textContent);
    playersArray.push(+document.querySelector(".player-c-grand-total").textContent);
    playersArray.push(+document.querySelector(".player-d-grand-total").textContent);
    let max = playersArray[0];
    let winner;

    for (let [i, key] of playersArray.entries()) {
        if (key >= max) {
            winner = i;
            max = key;
        }
    }

    // show actual winner
    if (playersNumber > 1) {
        let winnerName = document.querySelector(`${winnersObj[winner]}`).textContent;
        document.querySelector(".winner-name").textContent =
            language === 0 ? `${winnerName} is a WINNER!` : `${winnerName} jest ZWYCIĘZCĄ!`;
        document.querySelector(".winner-points").textContent =
            language === 0
                ? `With ${playersArray[winner]} points!`
                : `Zdobył ${playersArray[winner]} punktów!`;
    }
    if (playersNumber === 1) {
        let winnerName = document.querySelector(".name-a").textContent;
        document.querySelector(".winner-name").textContent =
            language === 0 ? `${winnerName}, is a WINNER!` : `${winnerName} jesteś ZWYCIĘZCĄ!`;
        document.querySelector(".winner-points").textContent =
            language === 0
                ? `With ${playersArray[winner]} points!`
                : `Zdobyłeś ${playersArray[winner]} punktów!`;
    }
    document.querySelector(".main-game").style.opacity = "0.3";
    document.querySelector(".winner").style.display = "grid";
    document.querySelector(".winner").style.opacity = "1";
    // add event on modal window
    document.querySelector(".new-game-btn").addEventListener("click", newGame);
};

// Function is pushing clicked dices to the shelfDices array, removes them from table, and shows on shelf. Used as a callback in eventListener
const toShelf = function (e) {
    e.preventDefault();
    // get a clicked dice, push it to shelfDices array
    shelfDices.push(+this.src.slice(-5, -4));
    availableDices--;
    this.classList.add("hidden");
    sortDices(shelfDices);

    // print dices
    let i = 0;
    let shelfDicesAmount = shelfDices.length;
    clearShelf();

    document.querySelectorAll(".dice.shelf").forEach(el => {
        // assign new src
        if (shelfDicesAmount > 0) {
            el.src = `img/dice-${shelfDices[i]}.png`;
            el.classList.remove("hidden");
        }

        shelfDicesAmount--;
        i++;
    });
    let index = tableDices.indexOf(+this.src.slice(-5, -4));
    tableDices.splice(index, 1);
};

// Function is pushing clicked dices to the tableDices array, removes them from shelf, and shows on table. Used as a callback in eventListener
const toTable = function (e) {
    e.preventDefault();
    // get a clicked dice, push it to tableDices array
    tableDices.push(+this.src.slice(-5, -4));
    this.classList.add("hidden");
    availableDices += 1;
    let index = shelfDices.indexOf(+this.src.slice(-5, -4));
    shelfDices.splice(index, 1);
    // print dices

    let i = 0;
    let tableDicesAmount = tableDices.length;
    clearTable();

    document.querySelectorAll(".dice.table").forEach(el => {
        if (tableDicesAmount > 0) {
            el.src = `img/dice-${tableDices[i]}.png`;
            el.classList.remove("hidden");
        }
        tableDicesAmount--;
        i++;
    });
};

// Functions to clear all dices on table and on shelf(hide)
const clearTable = function () {
    document.querySelectorAll(".dice.table").forEach(el => {
        el.classList.add("hidden");
    });
};

const clearShelf = function () {
    document.querySelectorAll(".dice.shelf").forEach(el => {
        el.classList.add("hidden");
    });
};

// Callback function - activated on click event on a cup img. Clearing all dices from table, rolling them, printing again and showing possible moves
const printDicesOnTable = function (e) {
    e.preventDefault();
    const minMaxValues = {
        rightMin: [875, 525, 525, 875, 525],
        rightMax: [755, 645, 755, 755, 645],
        bottomMin: [680, 650, 380, 180, 180],
        bottomMax: [580, 580, 480, 280, 280],
    };

    // math random to roll out positions of cubes
    function random(min, max) {
        return min + Math.trunc(Math.random() * (max - min));
    }

    tableDices = [];
    diceRoll(availableDices);
    clearTable();
    let i = 0;
    let tableDicesAmount = tableDices.length;
    document.querySelectorAll(".dice.table").forEach(el => {
        el.style.right = `${random(minMaxValues.rightMin[i], minMaxValues.rightMax[i])}px`;
        el.style.bottom = `${random(minMaxValues.bottomMin[i], minMaxValues.bottomMax[i])}px`;
        if (tableDicesAmount > 0) {
            el.src = `img/dice-${tableDices[i]}.png`;
            el.classList.remove("hidden");
        }
        tableDicesAmount--;
        i++;
    });
};

// Function that activates sequence of other functions to succesfully change player to next one
const changePlayer = function () {
    clearInterval(timer);
    timer = startTimer();
    unmmarkActualPlayer();
    newActualPlayer();
    markActualPlayer();
};

// Function that mark actual player, resets all states for new player.
const markActualPlayer = function () {
    document.querySelectorAll(actualPlayer).forEach(el => {
        el.classList.add("active");
    });
    // reseting values to default ones
    document.querySelector(".first-cup").style.opacity = "1";
    document.querySelector(".first-cup").classList.add("click");
    document.querySelector(".second-cup").style.opacity = "1";
    document.querySelector(".second-cup").classList.add("click");
    document.querySelector(".third-cup").style.opacity = "1";
    document.querySelector(".third-cup").classList.add("click");

    tableDices = [];
    shelfDices = [];
    allDices = [];
    availableCups = 3;
    availableDices = 5;
    clearShelf();
    clearTable();
    document.querySelectorAll(".click").forEach(el => {
        el.addEventListener("click", removeCup);
    });
    document.querySelectorAll(".table.dice").forEach(el => {
        el.addEventListener("click", toShelf);
    });

    //shelf
    document.querySelectorAll(".shelf.dice").forEach(el => {
        el.addEventListener("click", toTable);
    });
};

const unmmarkActualPlayer = function () {
    document.querySelectorAll(actualPlayer).forEach(el => {
        el.classList.remove("active");
    });

    document.querySelectorAll(`.possibleMove`).forEach(el => {
        console.log();
        if (el.innerHTML > 0) {
            el.innerHTML = "";
        }
        el.classList.remove("possibleMove");
    });
    document.querySelectorAll(".move-img").forEach(el => (el.style.display = "none"));
    updateTotals();
};

// Function that change a player for new one, and is checking for a winner.
const newActualPlayer = function () {
    if (actualPlayer == ".player-a" && playersNumber > 1) {
        actualPlayer = ".player-b";
    } else if (actualPlayer == ".player-b" && playersNumber > 2) {
        actualPlayer = ".player-c";
    } else if (actualPlayer == ".player-c" && playersNumber > 3) {
        actualPlayer = ".player-d";
    } else {
        actualPlayer = ".player-a";
        movesCounter++;
    }

    // check if there is a winner
    if (movesCounter >= 13) {
        checkPrintWinner();
    }
};

// Function that is updating all totals/sub-totals for all players in game.
const updateTotals = function () {
    // count and print upper sub-total
    let upperTotal = 0;
    document.querySelectorAll(`${actualPlayer}-upper`).forEach(a => {
        upperTotal += +a.textContent;
    });
    document.querySelector(`${actualPlayer}-upper-total`).textContent = upperTotal;

    // check if upper total qualifies for bonus points and print
    if (upperTotal >= 63) {
        document.querySelector(`${actualPlayer}-upper-bonus`).textContent = 35;
    }

    // count and print upper total
    upperTotal += +document.querySelector(`${actualPlayer}-upper-bonus`).textContent;
    document.querySelector(`${actualPlayer}-top-total`).textContent = upperTotal;

    //count and print bottom half total
    let bottomTotal = 0;
    document.querySelectorAll(`${actualPlayer}-bottom`).forEach(a => {
        bottomTotal += +a.textContent;
    });
    document.querySelector(`${actualPlayer}-bottom-total`).textContent = bottomTotal;

    // count and print grand total
    let grandTotal = bottomTotal + upperTotal;
    document.querySelector(`${actualPlayer}-grand-total`).textContent = grandTotal;
};

// Function that is removing one cup for each click(roll).
const removeCup = function (e) {
    e.preventDefault();
    availableCups === 3 ? (document.querySelector(".first-cup").style.opacity = "0.6") : "";
    availableCups === 2 ? (document.querySelector(".second-cup").style.opacity = "0.6") : "";
    availableCups === 1 ? (document.querySelector(".third-cup").style.opacity = "0.6") : "";
    if (availableCups > 0) {
        availableCups--;
        printDicesOnTable(e);
        possibleMoves();
    }
    if (availableCups == 0) {
        document.querySelectorAll(".click").forEach(el => {
            el.removeEventListener("click", removeCup);
            el.classList.remove("click");
        });
    }
};

// function printScore that is giving an exact HTML code with score. Needs to be used in eventlisteners on active player scoreboard
const printScore = function (score, possibleClass = "score", parent = false) {
    const string = `<a class="${possibleClass}">${score}</a>`;
    return string;
};

// Function that is printing an exact score(possible move) to a exactly clicked cell.
const printEventScore = function (e) {
    if (e) e.preventDefault();

    let scored = this.textContent;
    this.classList.add("used");
    scored == "" ? (scored = 0) : scored;
    this.innerHTML = printScore(scored, "used score");
    changePlayer();
    this.removeEventListener("click", printEventScore);

    document.querySelectorAll(".hoover").forEach(el => el.classList.remove("hoover"));
    document.querySelectorAll(".score").forEach(el => {
        el.removeEventListener("click", printEventScore);
    });
};

// Function that will check all possible moves, and print them greyed on a scoretable, according to actual player
const possibleMoves = function () {
    document.querySelectorAll(actualPlayer).forEach(el => {
        el.removeEventListener("click", printEventScore);
    });

    // clear scoretable from all possible moves
    document.querySelectorAll(".possibleMove").forEach(el => {
        el.textContent = "";
        el.innerHTML = "";
    });

    document.querySelectorAll(".move-img").forEach(el => (el.style.display = "none"));
    // concat tableDices and shelfDices
    allDices = tableDices.concat(shelfDices);

    // count all ones
    let ones = allDices.slice().filter(a => a == 1);
    ones.length; // amount of ones
    if (ones.length > 0 && document.querySelector(`${actualPlayer}-ones`).textContent == "") {
        document.querySelector(`${actualPlayer}-ones`).innerHTML = printScore(
            ones.length,
            "possibleMove"
        );
        document.querySelector(".move-img-ones").style.display = "block";
    }

    // count all twos
    let twos = allDices.slice().filter(a => a == 2);
    twos.length; // amount of twos
    if (twos.length > 0 && document.querySelector(`${actualPlayer}-twos`).textContent == "") {
        document.querySelector(`${actualPlayer}-twos`).innerHTML = printScore(
            twos.length * 2,
            "possibleMove"
        );
        document.querySelector(".move-img-twos").style.display = "block";
    }

    // count all threes
    let threes = allDices.slice().filter(a => a == 3);
    threes.length; // amount of threes
    if (threes.length > 0 && document.querySelector(`${actualPlayer}-threes`).textContent == "") {
        document.querySelector(`${actualPlayer}-threes`).innerHTML = printScore(
            threes.length * 3,
            "possibleMove"
        );
        document.querySelector(".move-img-threes").style.display = "block";
    }

    // count all fours
    let fours = allDices.slice().filter(a => a == 4);
    fours.length; // amount of fours
    if (fours.length > 0 && document.querySelector(`${actualPlayer}-fours`).textContent == "") {
        document.querySelector(`${actualPlayer}-fours`).innerHTML = printScore(
            fours.length * 4,
            "possibleMove"
        );
        document.querySelector(".move-img-fours").style.display = "block";
    }

    // count all fives
    let fives = allDices.slice().filter(a => a == 5);
    fives.length; // amount of fives
    if (fives.length > 0 && document.querySelector(`${actualPlayer}-fives`).textContent == "") {
        document.querySelector(`${actualPlayer}-fives`).innerHTML = printScore(
            fives.length * 5,
            "possibleMove"
        );
        document.querySelector(".move-img-fives").style.display = "block";
    }

    // count all sixes
    let sixes = allDices.slice().filter(a => a == 6);
    sixes.length; // amount of sixes
    if (sixes.length > 0 && document.querySelector(`${actualPlayer}-sixes`).textContent == "") {
        document.querySelector(`${actualPlayer}-sixes`).innerHTML = printScore(
            sixes.length * 6,
            "possibleMove"
        );
        document.querySelector(".move-img-sixes").style.display = "block";
    }

    // check for triples

    if (
        ones.length >= 3 ||
        twos.length >= 3 ||
        threes.length >= 3 ||
        fours.length >= 3 ||
        fives.length >= 3 ||
        sixes.length >= 3
    ) {
        if (document.querySelector(`${actualPlayer}-three-same`).textContent == "") {
            document.querySelector(`${actualPlayer}-three-same`).innerHTML = printScore(
                allDices.reduce((a, b) => a + b),
                "possibleMove"
            );
            document.querySelector(".move-img-three-kind").style.display = "block";
        }
    }
    // check for quads

    if (
        ones.length >= 4 ||
        twos.length >= 4 ||
        threes.length >= 4 ||
        fours.length >= 4 ||
        fives.length >= 4 ||
        sixes.length >= 4
    ) {
        if (document.querySelector(`${actualPlayer}-four-same`).textContent == "") {
            document.querySelector(`${actualPlayer}-four-same`).innerHTML = printScore(
                allDices.reduce((a, b) => a + b),
                "possibleMove"
            );
            document.querySelector(".move-img-four-kind").style.display = "block";
        }
    }
    // check for yahtzee
    if (
        ones.length == 5 ||
        twos.length == 5 ||
        threes.length == 5 ||
        fours.length == 5 ||
        fives.length == 5 ||
        sixes.length == 5
    ) {
        if (document.querySelector(`${actualPlayer}-five-same`).textContent == "") {
            document.querySelector(`${actualPlayer}-five-same`).innerHTML = "";
            document.querySelector(`${actualPlayer}-five-same`).innerHTML = printScore(
                50,
                "possibleMove"
            );
            document.querySelector(".move-img-five-kind").style.display = "block";
        }
    }
    // check for full house
    if (
        (ones.length == 3 ||
            twos.length == 3 ||
            threes.length == 3 ||
            fours.length == 3 ||
            fives.length == 3 ||
            sixes.length == 3) &&
        (ones.length == 2 ||
            twos.length == 2 ||
            threes.length == 2 ||
            fours.length == 2 ||
            fives.length == 2 ||
            sixes.length == 2) &&
        document.querySelector(`${actualPlayer}-full`).textContent == ""
    ) {
        // there is a full house - show value on scoreboard
        document.querySelector(`${actualPlayer}-full`).innerHTML = "";
        document.querySelector(`${actualPlayer}-full`).innerHTML = printScore(25, "possibleMove");
        document.querySelector(".move-img-full-house").style.display = "block";
    }
    // check for small straight - remove all same numbers, then check if there is straight
    let straight = [...new Set(allDices)].sort((a, b) => a - b);
    if (
        /1234|2345|3456/.test(straight.join("").replace(/(.)\1/, "$1")) &&
        document.querySelector(`${actualPlayer}-small-straight`).textContent == ""
    ) {
        document.querySelector(`${actualPlayer}-small-straight`).innerHTML = "";
        document.querySelector(`${actualPlayer}-small-straight`).innerHTML = printScore(
            30,
            "possibleMove"
        );
        document.querySelector(".move-img-small-straight").style.display = "block";
    }

    // check for large straight
    if (
        /12345|23456/.test(straight.join("").replace(/(.)\1/, "$1")) &&
        document.querySelector(`${actualPlayer}-large-straight`).textContent == ""
    ) {
        document.querySelector(`${actualPlayer}-large-straight`).innerHTML = "";
        document.querySelector(`${actualPlayer}-large-straight`).innerHTML = printScore(
            40,
            "possibleMove"
        );
        document.querySelector(".move-img-large-straight").style.display = "block";
    }

    // add all dices and print chance
    let chance = allDices.reduce((a, b) => a + b);
    if (document.querySelector(`${actualPlayer}-chance`).textContent == "") {
        document.querySelector(`${actualPlayer}-chance`).innerHTML = "";
        document.querySelector(`${actualPlayer}-chance`).innerHTML = printScore(
            chance,
            "possibleMove"
        );
        document.querySelector(".move-img-chance").style.display = "block";
    }

    // add event listeners to all cells with possibleMove

    document.querySelectorAll(`${actualPlayer}-bottom`).forEach(el => {
        if (!el.classList.contains("possibleMove") || el.textContent == "") {
            if (!el.classList.contains("used")) {
                el.classList.add("hoover");
                el.addEventListener("click", printEventScore);
            }
        }
    });
    document.querySelectorAll(`${actualPlayer}-upper`).forEach(el => {
        if (!el.classList.contains("possibleMove") || el.textContent !== "") {
            if (!el.classList.contains("used")) {
                el.classList.add("hoover");
                el.addEventListener("click", printEventScore);
            }
        }
    });
};

// Function that is starting timer. 1 min for each player move. reset it in printEventDice. start on first removeCup.
const startTimer = function () {
    const labelTimer = document.querySelector(".timer");

    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(Math.trunc(time % 60)).padStart(2, 0);

        labelTimer.textContent = `${min}:${sec}`;

        if (time <= 10) {
            labelTimer.style.color === "red"
                ? (labelTimer.style.color = "white")
                : (labelTimer.style.color = "red");
        }

        if (time === 0) {
            clearInterval(timer);

            let biggest = 0;
            let element;
            document.querySelectorAll(".possibleMove").forEach(el => {
                element = +el.textContent > biggest ? el : "";
            });

            if (typeof element === "undefined") {
                let nodelist = document.querySelectorAll(".active.score");
                for (let key of nodelist) {
                    if (key.textContent == "") {
                        printEventScore.call(key);
                        break;
                    }
                }
            } else {
                printEventScore.call(element);
            }
        }

        time--;
    };

    labelTimer.style.color = "white";
    let time = 60;
    tick();
    timer = setInterval(tick, 1000);
    return timer;
};

// Function that is launching the whole game for first time. There is sequence of modals asking for amount of players, nicknames
const startGame = function () {
    // FIRST MODAL - get a number from clicked button, store it in variable:
    document.querySelector(".language-btn").addEventListener("click", changeLanguage);
    document.querySelector(".instruction-btn").addEventListener("click", showInstruction);

    // first modal asking for numer of players
    document.querySelectorAll(".number-btn").forEach(el => {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            playersNumber = +this.textContent;
            // hide first modal
            document.querySelector(".modal.first").style.opacity = "0";
            setTimeout(function () {
                document.querySelector(".modal.first").style.display = "none";
            }, 500);

            for (let i = 4; i > playersNumber; i--) {
                document.querySelector(`.player${i}`).style.display = "none";
            }

            for (let i = 1; i < playersNumber; i++) {
                if (playersNumber < 4) {
                    document.querySelector(`.player${i}`).style.marginRight = "50px";
                }
            }
            // show second modal
            setTimeout(function () {
                document.querySelector(".modal.second").style.opacity = "1";
            }, 300);

            document.querySelector(".modal.second").style.display = "grid";
        });
    });

    // second modal asking for player names. If there are none - set default ones
    document.querySelector(".get-names-btn").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".name-a").textContent =
            document.querySelector(".player-name-a").value || "Player 1";
        document.querySelector(".name-b").textContent =
            document.querySelector(".player-name-b").value || "Player 2";
        document.querySelector(".name-c").textContent =
            document.querySelector(".player-name-c").value || "Player 3";
        document.querySelector(".name-d").textContent =
            document.querySelector(".player-name-d").value || "Player 4";

        document.querySelector(".modal.second").style.opacity = "0";
        document.querySelector(".background-dices-container").style.opacity = "0";
        setTimeout(function () {
            document.querySelector(".modal.second").style.display = "none";
            document.querySelector(".background-dices-container").style.display = "none";
        }, 500);

        document.querySelector(".main-game").style.opacity = "1";
        markActualPlayer();
        setTimeout(function () {
            startTimer();
        }, 1000);

        // hide cells in scoretable for non used players
        if (playersNumber < 4) {
            document.querySelectorAll(".player-d").forEach(el => {
                el.style.opacity = "0";
                el.style.position = "absolute";
            });
        }

        if (playersNumber < 3) {
            document.querySelectorAll(".player-c").forEach(el => {
                el.style.opacity = "0";
                el.style.position = "absolute";
            });
        }

        if (playersNumber < 2) {
            document.querySelectorAll(".player-b").forEach(el => {
                el.style.opacity = "0";
                el.style.position = "absolute";
            });
        }

        // adjust table for number of players
        document.querySelector(".score-table").style.gridTemplateColumns = `repeat(${
            4 + playersNumber
        }, 1fr)`;
    });
};

// Function to change language in whole website. 2 approaches - one is just showing and hiding a previously created instruction DIV, and second approach is just changing all values one by one to other language
const changeLanguage = function (e) {
    e.preventDefault();

    language = language === 0 ? 1 : 0;

    if (language === 0 && !document.querySelector(".instruction.PL").classList.contains("hidden")) {
        document.querySelector(".instruction.PL").classList.add("hidden");
        document.querySelector(".instruction.EN").classList.remove("hidden");
    }
    if (language === 1 && !document.querySelector(".instruction.EN").classList.contains("hidden")) {
        document.querySelector(".instruction.EN").classList.add("hidden");
        document.querySelector(".instruction.PL").classList.remove("hidden");
    }

    document.querySelector(".instruction-btn").textContent =
        language === 1 ? "INSTRUKCJA" : "INSTRUCTION";
    // Top table
    document.querySelector(".ones-label").textContent = language === 1 ? "Jedynki" : "Ones";
    document.querySelector(".twos-label").textContent = language === 1 ? "Dwójki" : "Twos";
    document.querySelector(".threes-label").textContent = language === 1 ? "Trójki" : "Threes";
    document.querySelector(".fours-label").textContent = language === 1 ? "Czwórki" : "Fours";
    document.querySelector(".fives-label").textContent = language === 1 ? "Piątki" : "Fives";
    document.querySelector(".sixes-label").textContent = language === 1 ? "Szóstki" : "Sixes";

    document.querySelector(".upper-sub-total-label").textContent =
        language === 1 ? "Podsuma:" : "Sub-total";
    document.querySelector(".upper-bonus-label").textContent = "Bonus";
    document.querySelector(".upper-bonus-label").innerHTML +=
        "<a class='additional-text bonuss'>(min 63):</a>";
    document.querySelector(".top-total-label").textContent = language === 1 ? "Suma" : "Total";
    document.querySelector(".top-total-label").innerHTML +=
        language === 1
            ? '<a class="additional-text totals">górna tabela:</a>'
            : '<a class="additional-text totals">top half:</a>';

    // Bottom table
    document.querySelector(".three-same-label").textContent =
        language === 1 ? "Trzy jednakowe" : "Three of a kind";
    document.querySelector(".four-same-label").textContent =
        language === 1 ? "Cztery jednakowe" : "Four of a kind";
    document.querySelector(".full-label").textContent = language === 1 ? "Full" : "Full house";
    document.querySelector(".small-straight-label").textContent =
        language === 1 ? "Mały strit" : "Small straight";
    document.querySelector(".large-straight-label").textContent =
        language === 1 ? "Duży strit" : "Large straight";
    document.querySelector(".five-same-label").textContent =
        language === 1 ? "Pięć jednakowych" : "Five of a kind";
    document.querySelector(".chance-label").textContent = language === 1 ? "Szansa" : "Chance";

    document.querySelector(".bottom-total-label").textContent = language === 1 ? "Suma" : "Total";
    document.querySelector(".bottom-total-label").innerHTML +=
        language === 1
            ? '<a class="additional-text totals">dolna tabela:</a>'
            : '<a class="additional-text totals">bottom half:</a>';
    document.querySelector(".grand-total-label").textContent =
        language === 1 ? "Suma całkowita:" : "Grand total:";

    // winner modal

    document.querySelector(".gratz-label").textContent =
        language === 1 ? "Gratulacje!" : "Congratulations!";
    document.querySelector(".new-game-btn").textContent =
        language === 1 ? "Zagraj jeszcze raz!" : "Play once again!";

    // modal first
    document.querySelector(".hello").textContent = language === 1 ? "CZEŚĆ!" : "HELLO!";
    document.querySelector(".title-game").textContent =
        language === 1 ? "Zagraj w 5 Dice!" : "This is a 5-dice game.";
    document.querySelector(".number-modal-players").textContent =
        language === 1 ? "Wybierz ilość graczy:" : "Choose number of players:";

    // second modal
    document.querySelector(".nickname-choose").textContent =
        language === 1 ? "Wpisz nazwę gracza:" : "Please choose nicknames:";
    document.querySelector(".player-input-1").textContent = language === 1 ? "Gracz 1" : "Player 1";
    document.querySelector(".player-input-2").textContent = language === 1 ? "Gracz 2" : "Player 2";
    document.querySelector(".player-input-3").textContent = language === 1 ? "Gracz 3" : "Player 3";
    document.querySelector(".player-input-4").textContent = language === 1 ? "Gracz 4" : "Player 4";
    document.querySelector(".get-names-btn").textContent = language === 1 ? "GRAJ!" : "PLAY!";

    // change nicknames if they are default
    if (
        document.querySelector(".name-a").textContent == "Player 1" ||
        document.querySelector(".name-a").textContent == "Gracz 1"
    ) {
        document.querySelector(".name-a").textContent = language === 1 ? "Gracz 1" : "Player 1";
    }
    if (
        document.querySelector(".name-b").textContent == "Player 2" ||
        document.querySelector(".name-b").textContent == "Gracz 2"
    ) {
        document.querySelector(".name-b").textContent = language === 1 ? "Gracz 2" : "Player 2";
    }
    if (
        document.querySelector(".name-c").textContent == "Player 3" ||
        document.querySelector(".name-c").textContent == "Gracz 3"
    ) {
        document.querySelector(".name-c").textContent = language === 1 ? "Gracz 3" : "Player 3";
    }
    if (
        document.querySelector(".name-d").textContent == "Player 4" ||
        document.querySelector(".name-d").textContent == "Gracz 4"
    ) {
        document.querySelector(".name-d").textContent = language === 1 ? "Gracz 4" : "Player 4";
    }
};

// function to close all modals
const closeModal = function (e) {
    e.preventDefault();
    // document.querySelector(".instruction.PL").style.display = "none";
    // document.querySelector(".instruction.EN").style.display = "none";
    document.querySelector(".instruction.PL").classList.add("hidden");
    document.querySelector(".instruction.EN").classList.add("hidden");
    document.querySelector(".main-game").removeEventListener("click", closeModal);
    document.querySelector(".instruction").removeEventListener("click", closeModal);
    document.querySelector(".instruction-btn").removeEventListener("click", closeModal);
    document.querySelector(".instruction-btn").addEventListener("click", showInstruction);
};

// function that is showing instruction based on actual language(if used changes language with open instruction - it changes it too)
const showInstruction = function (e) {
    e.preventDefault();
    document.querySelector(".main-game").addEventListener("click", closeModal);
    document.querySelector(".instruction").addEventListener("click", closeModal);
    document.querySelector(".instruction-btn").removeEventListener("click", showInstruction);
    document.querySelector(".instruction-btn").addEventListener("click", closeModal);
    if (language === 1) {
        document.querySelector(".instruction.PL").classList.remove("hidden");
    } else {
        document.querySelector(".instruction.EN").classList.remove("hidden");
    }
};

// start game
if (movesCounter === 0) startGame();
