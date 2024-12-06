const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");
const question = document.querySelector(".content-overlay h1");

// Add event listener to "No" button
noButton.addEventListener("mouseover", () => {
    // const container = document.querySelector(".container");
    // const containerWidth = container.offsetWidth;
    // const containerHeight = container.offsetHeight;

    const randomX = Math.random() * 700 + 1;
    const randomY = Math.random() * 500 + 1;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Add event listener to "Yes" button
yesButton.addEventListener("click", () => {
  question.classList.add("hidden");
  buttons.classList.add("hidden");
    message.classList.remove("hidden");
    wallpaper.classList.remove("hidden");
    message.innerHTML = `
            Hi honeyyyyyy! Hope you're having a great day...💖
            Youve been stuying soo much, recently, finally catching your groove and 
            Honestly I'm not even surprised, sexy librarian you is not only for the looks, its for the 
            personality too ;) knew this about you 💕
            Anywayssss... I Miss youuuu... I'm sure you're tired from studying soo much...
            and honestly you should go have a relaxing evening today after this... you deserve it...
            Okaaayyyy... hope you enjoy the 1990s website I made XD
            I Love youuuu babe... see you soon
        `;
});
