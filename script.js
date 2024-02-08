

const navigation = document.querySelector('.navbar');
const menuBar = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

 
menuBar.addEventListener('click', ()=>{
    navigation.classList.add('active');
});

closeIcon.addEventListener('click', ()=>{
    navigation.classList.remove('active');
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar ul li a');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar ul li a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
    navbar.classList.toggle('stick', window.scrollY > 100); 
};














document.addEventListener("DOMContentLoaded", function() {
    const Container = document.getElementById("container");

    const texts = ["Desinger", "Developer"]; // Add more texts as needed
    let currentIndex = 0;

    function animateText() {
        const currentText = texts[currentIndex];
        const textElement = document.createElement("span");
        textElement.classList.add("text");
        textElement.textContent = currentText;
        Container.innerHTML = "";
        Container.appendChild(textElement);

        textElement.style.animation = "an 5s ease";
        
        currentIndex = (currentIndex + 1) % texts.length;

        setTimeout(() => {
            animateText();
        }, 7000); // Adjust the timeout to control the delay between animations
    }

    animateText();
});