function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit."],
        autoStart: true,
        loop: false,
        delay: 20,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

