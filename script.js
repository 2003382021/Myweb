const navigation = document.querySelector('.navbar');
const menuBar = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

 
menuBar.addEventListener('click', ()=>{
    navigation.classList.add('active');
});

closeIcon.addEventListener('click', ()=>{
    navigation.classList.remove('active');
});
