window.onload = function(){loaded()};

function loaded(){
//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.heading', { origin: 'bottom',
  distance: '200px',
  duration: 1500,
  delay: 500,
});

sr.reveal('.intro', { origin: 'left',
distance: '300px',
duration: 1000,
delay: 1500,
});

}