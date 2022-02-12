//this stores the votes
let dogVotesCount = 0
let catVotesCount = 0
let fishVotesCount = 0

//get reference to the td element with vote count for dog
let votesForDogTd = document.querySelector("#doggo-votes")
let votesForCatTd = document.querySelector("#catto-votes")
let votesForFishTd = document.querySelector("#fish-votes")

console.log("Votes for dog td", votesForDogTd)
console.log("Votes for cat td", votesForCatTd)
console.log("Votes for fish td", votesForFishTd)

//first get reference to button
let dogButton = document.querySelector("#dog-button")

//register click listeners when buttons are clicked
dogButton.addEventListener("click", function () {
    // window.alert("Dog button clicked")
    // add one to the total dog votes
    dogVotesCount = dogVotesCount + 1;

    //update the td element to have the right count
    votesForDogTd.textContent = dogVotesCount
})

//refrence cat button
let catButton = document.querySelector("#cat-button")
//register listener
catButton.addEventListener("click", function () {
    // add one to the total cat votes
    catVotesCount = catVotesCount + 1;

    //update the td element to have the right count
    votesForCatTd.textContent = catVotesCount
})

//ref fish button
let fishButton = document.querySelector("#fish-button")
//register listener
fishButton.addEventListener("click", function () {
    
    // add one to the total fish votes
    fishVotesCount = fishVotesCount + 1;

    //update the td element to have the right count
    votesForFishTd.textContent = fishVotesCount
})