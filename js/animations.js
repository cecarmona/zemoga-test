const closeMessage = document.querySelector(".message-box_close");
const messageBox = document.querySelector(".message-box");

//Animations
//Hero Banner Card
gsap.fromTo(
    ".hero-banner_card",
    { y: 200, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.3, delay: 0.5 }
);
//Message Box
gsap.fromTo(
    ".message-box",
    { opacity: 0 },
    { scrollTrigger: ".message-box", opacity: 1, duration: 1, delay: 0.5 }
);
closeMessage.addEventListener("click", () => {
    gsap.to(".message-box", { x: -3000, duration: 1 });
    gsap.to(".vote-section", { y: -100, duration: 0.7, delay: 0.3 });
});
//Ruling Vote Cards
gsap.fromTo(
    ".rulings-title",
    { opacity: 0 },
    { scrollTrigger: ".message-box", opacity: 1, duration: 1, delay: 0.6 }
);
gsap.fromTo(
    ".ruling-box",
    { y: 200, opacity: 0 },
    {
        scrollTrigger: ".rulings-container",
        y: 0,
        opacity: 1,
        duration: 1.3,
        delay: 0.5
    }
);
