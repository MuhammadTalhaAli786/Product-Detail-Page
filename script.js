const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
const totalImgs = imgBtns.length; // Total number of images

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

// Function to auto-slide images every 3 seconds
function autoSlide() {
    imgId++;
    if(imgId > totalImgs) {
        imgId = 1; // Loop back to the first image
    }
    slideImage();
}

// Start auto-slide
setInterval(autoSlide, 3000); // 3000ms = 3 seconds

window.addEventListener('resize', slideImage);
