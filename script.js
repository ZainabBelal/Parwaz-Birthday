// Intro Animation

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const message = "From 'Can we have a call?' to here.....see how far we have come.... ";

let i = 0;

function typeWriter(){

    if(i < message.length){

        introText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,65);

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

If someone had asked me a year ago what love feels like, I don't think I would have known how to answer. Today, I do.

It feels like finding peace in a person's presence. It feels like silence becoming comfortable, ordinary moments becoming unforgettable, and life becoming brighter without even realizing when it happened. Somewhere between our conversations and our laughter, you quietly became my favorite part of every day.

There is something about you that I've always admired. You aren't someone who fills every silence with words or constantly expresses every feeling out loud, yet somehow I've never had to question your love. You have this quiet way of caring that speaks louder than anything words ever could. It's in the way you look after me, encourage me, remember the little things, and always want the best for me. Your actions have always whispered, "I'm here. I've got you," and I've learned that this is the purest kind of love.

Beneath your calm nature is the sweetest, most innocent heart—one that loves deeply without asking for recognition. One of the things I admire most about you is your ambition. The way you dream, work hard, and chase the future you dreamt of, inspires me every single day. But what makes me love you even more is that while you're building your own future, you've never stopped believing in mine. You celebrate my dreams as if they were your own, encourage me to become the best version of myself, and remind me that my success matters just as much as yours.

Thank you for being the kind of man whose heart is far more beautiful than he will probably ever admit.

I don't dream of a perfect life. I dream of a real one—with you. A home filled with laughter, late-night conversations, little arguments that end with smiles, spontaneous road trips, endless cups of chai, prayers side by side, birthdays celebrated together, and growing old while still looking at each other with the same warmth we do today.

Sometimes I wonder if Allah created the perfect man just for me. And then I look at you, and my heart quietly answers... maybe He did.

No matter where life takes us, I hope you always remember one simple truth:

<b>You will always have me by your side. I will always believe in you, stand by you, and pray for you through every dream you chase and every challenge you face.</b>

Happy Birthday, my Forever.

May Allah bless you with a life filled with happiness, good health, barakah, and endless reasons to smile. May He strengthen your faith, grant you success in everything you strive for, and keep our hearts united with love and understanding. May He allow us to walk hand in hand through this life and in the Hereafter.

All I got to say is- <b>"Tum jo aaye Zindagi me baat ban gayi...."</b>

Forever and always,

Zainab ❤️`;

openLetter.addEventListener("click", () => {

    paper.style.display = "block";

    openLetter.style.display = "none";

    typedLetter.innerHTML = "";

    let index = 0;

    function typeLetter(){

        if(index < letter.length){

            typedLetter.innerHTML = letter.substring(0, index);

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
