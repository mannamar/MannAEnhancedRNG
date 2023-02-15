function saveToLocalStorageByName(name) {
    // Get current values that are saved into local storage
    // Create an array of values to store into local storage
    let names = getLocalStorage();

    // Add new name to our favorites array
    names.push(name);

    // Save updated array to local storage
    localStorage.setItem('listOfName', JSON.stringify(names));
}

function getLocalStorage() {
    // Get all of the values that are stored in favorites in local storage
    let localStorageData = localStorage.getItem('listOfName');

    if (localStorageData === null) {
        return ["Danny T.", "Ken M.", "Scott M.", "Aisha", "Amar", "Andrea", "Andrew", "Brandon", "Carlos", "Caroline", "Chris", "Daniel", "Elizar", "Fernando", "Griffin", "Harrison", "Isaiah", "Jacob", "Jasmine", "Jeremy", "Jessie", "John", "Jovann", "Kenneth", "Kent", "Lerissa", "Madeline", "Manuel", "Marcel", "Mark", "N. Harrison", "Pedro", "Reed", "Richard", "Samuel", "Shaun", "Ulises"];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name) {
    let names = getLocalStorage();

    // Find the index of the name in local storage
    let nameIndex = names.indexOf(name);

    // Remove the name from the array using splice method
    names.splice(nameIndex, 1);

    // Save Updated array to local storage
    localStorage.setItem('listOfName', JSON.stringify(names));
}

export { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage };