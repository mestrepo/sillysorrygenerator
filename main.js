/**
 * 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
 * variables that store references to the "Enter custom name" text field (customName),
 * the "Generate random story" button (randomize), and the <p> element at the bottom
 * of the HTML body that the story will be copied into (story), respectively
 * @type {HTMLElement}
 */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/**
 * takes an array, and returns one of the items stored inside the array at random.
 *
 * @param array
 * @returns {*}
 */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * 2. RAW TEXT STRINGS
 * @type {string}
 */

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

/**
 * 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
 */
randomize.addEventListener('click', result);

/**
 * update view with output
 */
function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = replaceTwice(newStory, ":insertx:", xItem);
    newStory = replaceTwice(newStory, ":inserty:", yItem);
    newStory = replaceTwice(newStory, ":insertz:", zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(pounds2stone(300)) + " stone ";
        let temperature = Math.round(fahrenheit2celsius(94)) + " centigrade";

        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

/**
 * convert between fahrenheit and celsius
 * @param fahrenheit
 * @returns {number}
 */
function fahrenheit2celsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

/**
 * convert pounds to stone
 * @param pounds
 * @returns {number}
 */
function pounds2stone(pounds) {
    return pounds * 0.071429;
}

/**
 * search over entire document
 * @param input string
 * @param current
 * @param replacement text
 * @returns {string}
 */
function replaceTwice(input, current, replacement) {
    return input.replace(current, replacement).replace(current, replacement);
}
