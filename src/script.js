function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 20,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let apiKey = "a9bda932f2ao07463160563ed2640t39";
    let userInput = document.querySelector("#prompt").value;
    let prompt = `Generate a French poem about ${userInput}`;
    let context = `Generate a French poem based on the theme: ${userInput}. The poem should be short, creative, and capture the essence of the theme.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
