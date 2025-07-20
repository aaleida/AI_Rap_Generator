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
    let prompt = `Generate a short rap with the theme ${userInput}`;
    let context = `Generate a short rap in english. The rap should be creative, engaging, and suitable for a general audience. It should include elements of rhythm and rhyme typical of rap music. Match the tone of the theme provided by the user. Use a conversational and informal style, as is common in rap lyrics. Use a variety of vocabulary and expressions to make the rap lively and interesting but easy to understand. The rap should be approximately 4-6 lines long, maintaining a consistent rhythm throughout.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
