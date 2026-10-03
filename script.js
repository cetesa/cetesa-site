
const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id], #sobre, #contato')];
const update=()=>{let current='inicio';for(const s of sections){if(s.getBoundingClientRect().top<150)current=s.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};
addEventListener('scroll',update,{passive:true});update();
