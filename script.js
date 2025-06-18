let buttons = document.getElementsByTagName("button");
let resultSection = document.querySelector(".result");
let resultText = resultSection.getElementsByTagName("h1")[1];

let Aphmau = 0;
let KawaiiChan = 0;
let Garroth = 0;
let Aaron = 0;
let Ein = 0;

let answeredQuestions = 0;
let totalQuestions = 3; // since we have 3 questions

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let data = buttons[i].getAttribute("data-character");

        // Count votes manually
        if (data.indexOf("Aphmau") !== -1) {
            Aphmau++;
        }
        if (data.indexOf("KawaiiChan") !== -1) {
            KawaiiChan++;
        }
        if (data.indexOf("Garroth") !== -1) {
            Garroth++;
        }
        if (data.indexOf("Aaron") !== -1) {
            Aaron++;
        }
        if (data.indexOf("Ein") !== -1) {
            Ein++;
        }

        // Disable all buttons in the same list (ul)
        let meow = buttons[i].parentElement;
        let kitten = meow.getElementsByTagName("button");
        for (let j = 0; j < kitten.length; j++) {
            kitten[j].disabled = true;
        }

        answeredQuestions++;

        if (answeredQuestions === totalQuestions) {
            // Find which character has the highest score
            let topCharacter = "Aphmau";
            let maxScore = Aphmau;

            if (KawaiiChan > maxScore) {
                topCharacter = "KawaiiChan";
                maxScore = KawaiiChan;
                resultSection.style.backgroundImage = "url('https://img.freepik.com/free-vector/floral-with-cherry-blossoms-full-bloom-pink_8130-710.jpg')";
                resultText.style.color = "white"
            }
            if (Garroth > maxScore) {
                topCharacter = "Garroth";
                maxScore = Garroth;
            }
            if (Aaron > maxScore) {
                topCharacter = "Aaron";
                maxScore = Aaron;
                resultSection.style.backgroundColor = "#b11817";
                resultText.style.color = "white";
            }
            if (Ein > maxScore) {
                topCharacter = "Ein";
                maxScore = Ein;
                resultSection.style.backgroundColor = "#112ce5";
                resultText.style.color = "white";
            }

            resultText.textContent = topCharacter + "!";
            resultSection.style.display = "block";
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}

resultSection.style.display = "none";
