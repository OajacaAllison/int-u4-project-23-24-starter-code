let buttons = document.getElementsByTagName("button");
let resultSection = document.querySelector(".result");
let resultText = resultSection.getElementsByTagName("h1")[1];
let questionSection = document.querySelector(".hide")

let Aphmau = 0;
let KawaiiChan = 0;
let Garroth = 0;
let Aaron = 0;
let Ein = 0;

let answeredQuestions = 0;
let totalQuestions = 4; // since we have 3 questions

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
            let descElement = document.querySelector(".desc");

            document.body.style.backgroundImage = "url('https://preview.redd.it/say-something-good-and-something-bad-about-mystreet-season-2-v0-c0wtlj870nfc1.jpeg?width=640&crop=smart&auto=webp&s=206f5ce7f14c4c5982bda3045ef4d7c5303ff1d6')";
            resultSection.style.marginTop = "25%";
            document.body.style.backgroundColor = "#4D1EA9";
            resultText.style.color = "black";

            if (KawaiiChan > maxScore) {
                topCharacter = "KawaiiChan";
                maxScore = KawaiiChan;

                document.body.style.backgroundImage = "url('https://pm1.aminoapps.com/6774/d1e905f23f06fe86ff497e39461a87fe9a8cd11cv2_00.jpg')";
                resultText.style.color = "black";
                resultSection.style.marginTop = "25%";
                document.body.style.backgroundColor = "#d89194";
                descElement.textContent = "You’re energetic, bubbly, and live for romance and fanfics. A friend to everyone, but maybe a little too much energy all the time. Take a nap. Please. Love you but you're lowkey annoying and need time away from you because you will not stop talking.";
            }
            if (Garroth > maxScore) {
                topCharacter = "Garroth";
                maxScore = Garroth;

                document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/f1A3bvLO160/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhBgvcSOjVg8cLxu7bbKpgLXfvew')";
                resultSection.style.marginTop = "25%";
                document.body.style.backgroundColor = "#06D3FA";
                descElement.textContent = "You’re the golden retriever friend — loyal, lovable, and super charming. Everybody loves you! Perfect person but you're actually a side character and your life will never be fair. Sorry.";

            }
            if (Aaron > maxScore) {
                topCharacter = "Aaron";
                maxScore = Aaron;
                document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/lQowms1Kmdc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ2DKf9y8RDQTzlm1QBC7N5nAP7Q')"
                document.body.style.backgroundColor = "#b11817";
                resultSection.style.marginTop = "25%";
                resultText.style.color = "black";
                descElement.textContent = "You’re the quiet, mysterious type with a tragic backstory. You love hard but don’t show it unless someone really gets close. Always the protector, but emotionally unavailable 80% of the time. Okay I see you, nonchalant aura. You need friends. Stop being a loser.";

            }
            if (Ein > maxScore) {
                topCharacter = "Ein";
                maxScore = Ein;
                document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/c5/e5/6f/c5e56f171f8fcd2a5b8b25d01175f4a8.jpg')";
                resultText.style.color = "black";
                resultSection.style.marginTop = "25%";
                document.body.style.backgroundColor = "#1b1f4f";
                descElement.textContent = "You're clever, confident, and… kinda unhinged. You’re the type to flip the script at any moment. Always plotting something, but somehow still cool. Lowkey red flag. Iykyk. Cool but evil. You also need friends."
            }

            resultText.textContent = topCharacter + "!";
            resultSection.classList.add("show");
            questionSection.style.display = "none";
        }
    });
}

