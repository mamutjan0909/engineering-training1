console.log('Engineering Training!');
const modalButton = document.getElementById('modalButton');
console.log("modalButton", modalButton);
modalButton.addEventListener("click", whenClicked);
function whenClicked() {
    console.log("Clicked!");
    const modalContainer = document.getElementById("modal");
    modalContainer.classList.toggle("hidden");
    console.log(modalContainer.classList);
}
const closeModalButton = document.getElementsByClassName("closeModal");

closeModalButton[0].addEventListener("click", whenCloseClicked);

console.log("closeModal", closeModalButton);

function whenCloseClicked() {
    console.log("Clicked Close!");
    const modalContainer = document.getElementById("modal");
    modalContainer.classList.toggle("hidden");
}

const nameOfArrayOfObjects = [
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70749",
        titles: "Create and publish a public repository in GitHub under your personal account named 'Engineering Training'",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70771",
        titles: "Create index.html with basic html markup and perform first commit",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70804",
        titles: "Add anchor tags for each completed subtasks",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70805",
        titles: "Make unordered list of anchor tags",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70905",
        titles: "Add the TWM logo as an image to the beginning of the body of the page",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70918",
        titles: "Add style attributes to img tag to setting the height and width of the logo",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-70993",
        titles: "Add a head, add a style tag to the head, add a class to style tag, move logo styles to style tag, remove inline styles from logo, add class to the logo",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-71030",
        titles: "Add a selector inside style tag that targets the list items and removes the bullet",

    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-71062",
        titles: "Pseudo-selectors - Add hover styling to list elements",


    },
    {

        links: "https://totalwine.atlassian.net/browse/DIG-71085",
        titles: "UI Libraries - Add Bootstrap to your page, add check icons to your list, and convert your list into a bootstrap list-group",



    }

];
var jirasArray = [];
for (let i = 0; i < nameOfArrayOfObjects.length; i++) {
    jirasArray.push(nameOfArrayOfObjects[i]);
}

console.log(jirasArray);





