let dogVotescount = 0
let catVotescount = 0
let fishVotescount = 0

let votesforDogTd = document.querySelector("#doggo-votes")
let votesforCatTd = document.querySelector("#catto-votes")
let votesforFishTd = document.querySelector("#fish-votes")

console.log("Votes for dog td", votesforDogTd)
console.log("Votes for cat td", votesforCatTd)
console.log("Votes for fish td", votesforFishTd)

// refence for button
let dogButton = document.querySelector("#dog-button")

// click function
dogButton.addEventListener("click", function(){
    //window.alert("Dog button clicked!")
    dogVotescount = dogVotescount + 1;

    votesforDogTd.textContent = dogVotescount
})
//
let catButton = document.querySelector("#cat-button")

catButton.addEventListener("click", function(){
    catVotescount = catVotescount + 1;

    votesforCatTd.textContent = catVotescount
})
//
let fishButton = document.querySelector("#fish-button")

// click function
fishButton.addEventListener("click", function(){
    //window.alert("Dog button clicked!")
    fishVotescount = fishVotescount + 1;

    votesforFishTd.textContent = fishVotescount
})