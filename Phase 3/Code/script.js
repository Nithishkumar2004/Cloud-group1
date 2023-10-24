// JavaScript to toggle the visibility of hidden content
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.getElementById("read-more-button");
    const hiddenContent = document.querySelector(".hidden-content");

    let isContentVisible = false;

    readMoreButton.addEventListener("click", function () {
        if (isContentVisible) {
            hiddenContent.style.display = "none";
            readMoreButton.textContent = "Read More";
        } else {
            hiddenContent.style.display = "block";
            readMoreButton.textContent = "Read Less";
        }

        isContentVisible = !isContentVisible;
    });
});
