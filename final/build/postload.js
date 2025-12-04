


const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

let liked = false;
let count = 0;

likeBtn.addEventListener("click", () => {
    if (!liked) {
        count++;
        liked = true;

        // tilt up
        likeBtn.style.transform = "rotate(-30deg)";

        // return to normal after animation
        setTimeout(() => {
            likeBtn.style.transform = "rotate(0deg)";
        }, 250);

    } else {
        count--;
        liked = false;

        likeBtn.style.transform = "rotate(30deg)";

        setTimeout(() => {
            likeBtn.style.transform = "rotate(0deg)";
        }, 250);
    }

    likeCount.textContent = count;
});