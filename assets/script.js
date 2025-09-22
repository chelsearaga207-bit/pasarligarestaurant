(()=>{
const els=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver'in window){
const io=new IntersectionObserver((entries)=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.2});
els.forEach(el=>io.observe(el));
}else{els.forEach(el=>el.classList.add('in'))}
})();