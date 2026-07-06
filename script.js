// Intro Animation

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const message = "From 'Can we have a call?' to here..... ";

let i = 0;

function typeWriter(){

    if(i < message.length){

        introText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();

setTimeout(()=>{

    gsap.to(intro,{

        opacity:0,

        duration:2,

        onComplete:()=>{

            intro.style.display="none";

        }

    });

},6000);


// Button
const button = document.getElementById("startButton");
const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {

    music.play();

    document.getElementById("memory1").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    faders.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 150){

            section.classList.add("show");

        }

    });

});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".memory img",{

    scale:1.2,

    ease:"none",

    scrollTrigger:{

        trigger:".memory",

        start:"top bottom",

        end:"bottom top",

        scrub:true

    }

});
gsap.from(".memory-text",{

    opacity:0,

    y:100,

    duration:1.5,

    scrollTrigger:{

        trigger:".memory",

        start:"top 70%"

    }

});
button.addEventListener("click",()=>{

    music.play();

    document.getElementById("chapter1").scrollIntoView({

        behavior:"smooth"

    });

});

const stars = document.getElementById("stars");

for(let i = 0; i < 200; i++){

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    star.style.width = (1 + Math.random() * 3) + "px";

    star.style.height = star.style.width;

    stars.appendChild(star);

}
function createShootingStar(){

    const shootingStar = document.createElement("div");

    shootingStar.classList.add("shooting-star");

    shootingStar.style.top = Math.random() * 40 + "%";

    shootingStar.style.left = Math.random() * 100 + "%";

    stars.appendChild(shootingStar);

    setTimeout(() => {

        shootingStar.remove();

    }, 2000);

}

setInterval(createShootingStar, 5000);

gsap.from("#transition h1",{

    opacity:0,
    y:80,
    duration:1.5,

    scrollTrigger:{
        trigger:"#transition",
        start:"top center"
    }

});

gsap.from("#transition h2",{

    opacity:0,
    y:40,
    duration:1.5,
    delay:.4,

    scrollTrigger:{
        trigger:"#transition",
        start:"top center"
    }

});
gsap.utils.toArray(".memory").forEach((memory) => {

    gsap.from(memory.querySelector(".memory-bg"), {

        scale: 1.25,
        duration: 3,
        ease: "power2.out",

        scrollTrigger: {
            trigger: memory,
            start: "top center"
        }

    });

    gsap.from(memory.querySelector(".memory-content"), {

        opacity: 0,
        x: -120,
        duration: 1.4,

        scrollTrigger: {
            trigger: memory,
            start: "top 70%"
        }

    });

});
const openLetter = document.getElementById("openLetter");
const paper = document.getElementById("letterPaper");
const typedLetter = document.getElementById("typedLetter");

const letter = `Dear Parwaz,

Happy Birthday to the man who makes my world brighter.

Every memory on this little website reminds me how beautifully our story has unfolded. From the first time we met, to every smile, every conversation, every moment we've shared, you've become my safest place and my greatest blessing.

Knowing that you'll soon be my husband fills my heart with gratitude and excitement. I can't wait to celebrate countless birthdays with you, create new memories, and build a lifetime together.

Thank you for being exactly who you are.

I love you today, tomorrow, and always.

Forever yours,

Zainab ❤️`;

openLetter.addEventListener("click", () => {

    paper.style.display = "block";

    openLetter.style.display = "none";

    typedLetter.innerHTML = "";

    let index = 0;

    function typeLetter(){

        if(index < letter.length){

            typedLetter.innerHTML += letter.charAt(index);

            index++;

            setTimeout(typeLetter,35);

        }

        else{

    document.getElementById("finalButton").style.display = "inline-block";

}
    }

    typeLetter();

});
gsap.from("#finale .finale-content", {

    opacity: 0,

    y: 100,

    duration: 2,

    scrollTrigger: {

        trigger: "#finale",

        start: "top 70%"

    }

});