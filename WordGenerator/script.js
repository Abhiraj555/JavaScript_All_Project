const tagOptions = [
    "p", "h1", "h2"
    , "h3", "h4", "h5"
    , "h6", "span"
]
// dom elements
const tagSelect = document.getElementById("tags")
const paragraphSlider = document.getElementById("paragraphs")
const wordSlider = document.getElementById("words")
let paragraphValue = document.getElementById("paragraphsValue")
const wordValue = document.getElementById("wordsValue")

paragraphSlider.addEventListener("input", updateParaGraphValue)
wordSlider.addEventListener("input", updateWordValue)

function updateParaGraphValue() {
    const update = paragraphValue.textContent = paragraphSlider.value
}
function updateWordValue() {
    wordValue.textContent = wordSlider.value
}

tagOptions.forEach((tag) => {
    const option = document.createElement("option")
    option.value = tag
    option.textContent = `<${tag}>`
    tagSelect.appendChild(option)
})

// Generate Button 
const generateButton = document.getElementById("generate")

generateButton.addEventListener('click', generateLoremIpsum)

function generateLoremIpsum() {
    const paragraphs = parseInt(
        paragraphSlider.value
    );
    const tag =
        document.getElementById(
            "tags"
        ).value;
    const includeHtml =
        document.getElementById(
            "include"
        ).value;
    const wordsPerParagraph = parseInt(
        wordSlider.value
    );

    const loremIpsumText = generateText(
        paragraphs,
        tag,
        includeHtml,
        wordsPerParagraph
    );
    displayLoremIps(loremIpsumText);
}


//Generate Text 
function generateText(paragraphs, tag, includeHtml, wordsPerParagraph) {

    // create array for paragraph 
    const loremIpsSumArray = new Array(
        paragraphs
    ).fill("")

    //generate word for each paragraph 
    for (let i = 0; i < paragraphs; i++) {
        const words = generateWords();
        loremIpsSumArray[i] = includeHtml === "yes" ? `<${tag}>${words}<${tag}>` : words;
    }
    return loremIpsSumArray.join('\n')
}

// Generate words
function generateWords(numWords) {
    const loremIsptext = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, distinctio sint non 
            quis, animi praesentium alias reiciendis dignissimos aliquam culpa fugiat minima! Fuga accusamus fugiat ipsum nulla rerum nihil placeat?
            Inventore nesciunt maxime tempore vero porro ipsam eveniet, minima corporis ut quibusdam repellendus 
            amet, quod nulla placeat. Ipsa corporis dolor autem dolorem nemo odit facilis, numquam, provident, dicta reprehenderit nostrum.
            Harum obcaecati autem sunt sequi. Laboriosam error possimus commodi quos vero necessitatibus odit eaque sint 
            corporis, nulla earum atque obcaecati fugit modi repudiandae quidem assumenda velit provident in veniam quo?
            Corrupti alias explicabo, unde nihil exercitationem commodi, asperiores quia libero amet inventore velit aut
             vero molestias ullam cupiditate facere saepe nobis reprehenderit nam eos officiis, tempore odit! Fugiat, assumenda rem!
            Vitae delectus culpa sapiente eveniet, consequuntur tempore accusamus atque sunt libero ullam voluptate eos beatae 
            earum perferendis! Voluptatibus voluptate debitis vero eveniet quibusdam! Architecto, odio culpa fuga accusamus nam necessitatibus?`
    const words = loremIsptext.split();

    if (numWords <= words.length) {
        return words.slice(0, numWords).join(" ");
    } else {
        return words.join(" ")
    }
}

const outputContainer =
    document.querySelector(".output");

function displayLoremIps(text) {
    outputContainer.innerHTML = text;
}
