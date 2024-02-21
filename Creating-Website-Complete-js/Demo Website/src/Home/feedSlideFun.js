const body = document.querySelector('.feedback'); 
const container = document.querySelectorAll('.container'); 
const next = document.querySelector('.nextContainer'); 
const prev = document.querySelector('.prevContainer'); 

const len_of_feed = container.length;
const item_to_move = 1;

let currentIndex = 0;

next.addEventListener('click', () => {
    currentIndex += item_to_move;
    if (currentIndex >= len_of_feed) {
        currentIndex = 0;
    }
    updateBody();
});

prev.addEventListener('click', () => {
    currentIndex -= item_to_move;
    if (currentIndex < 0) {
        currentIndex = item_to_move;        
    }
    updateBody();
});

function updateBody() {
    const translateXValue = -currentIndex * (container[0].offsetWidth + 20);
    body.style.transform = `translateX(${translateXValue}px)`;
}

updateBody();