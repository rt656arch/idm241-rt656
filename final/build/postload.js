const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

let liked = false;
let count = 0;

likeBtn.addEventListener("click", () => {
    if (!liked) {
        count++;
        liked = true;

        likeBtn.style.color = "#053EFF";

        // tilt up
        likeBtn.style.transform = "rotate(-30deg)";

        // return to normal after animation
        setTimeout(() => {
            likeBtn.style.transform = "rotate(0deg)";
        }, 250);

    } else {
        count--;
        liked = false;

        likeBtn.style.color = "#AAAAAA";
        likeBtn.style.transform = "rotate(0deg)";
    }

    likeCount.textContent = count;
});

const likeBtn1 = document.getElementById("like-btn1");
const likeCount1 = document.getElementById("like-count1");

let liked1 = false;
let count1 = 0;

likeBtn1.addEventListener("click", () => {
    if (!liked1) {
        count1++;
        liked1 = true;

        likeBtn1.style.color = "#053EFF";

        // tilt up
        likeBtn1.style.transform = "rotate(-30deg)";

        // return to normal after animation
        setTimeout(() => {
            likeBtn1.style.transform = "rotate(0deg)";
        }, 250);

    } else {
        count1--;
        liked1 = false;

        likeBtn1.style.color = "#AAAAAA";
        likeBtn1.style.transform = "rotate(0deg)";
    }

    likeCount1.textContent = count1;
});


const authorName = document.querySelector('.product-author');
const popup = document.querySelector('.author-profile-popup');
let isHovering = false;

function showPopup() {
    popup.classList.add('visible');
}

function hidePopup() {
    popup.classList.remove('visible');
}

authorName.addEventListener('mouseenter', () => {
    isHovering = true;
    showPopup();
});

authorName.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!isHovering) hidePopup();
    }, 50);
});

popup.addEventListener('mouseenter', () => {
    isHovering = true;
    showPopup();
});

popup.addEventListener('mouseleave', () => {
    isHovering = false;
    hidePopup();
});