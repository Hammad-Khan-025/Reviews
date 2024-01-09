const img = document.getElementById('profile-pic')
const pName = document.getElementById('name')
const job = document.getElementById('job')
const text = document.getElementById('description')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const random = document.querySelector('.random')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
 showPerson();
})

function showPerson(){
    const item = review[currentItem];

    img.src = item.img
    pName.innerHTML = item.pName
    job.innerHTML = item.job
    text.innerHTML = item.text
}
prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length - 1
    }
    showPerson()
})

nextBtn.addEventListener("click", () => {
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson()
})

random.addEventListener('click', () => {
    currentItem = randomNumber()
    showPerson()
})

function randomNumber(){
    return Math.floor(Math.random() * review.length)
}