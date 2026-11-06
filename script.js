const searchForm=document.getElementById("globalSearch");
const searchInput=document.getElementById("searchInput");
const cards=[...document.querySelectorAll(".project-card")];
let activeFilter="all";
function updateCards(){
  const q=searchInput.value.trim().toLowerCase();
  cards.forEach(card=>{
    const matchesText=(card.dataset.search+" "+card.innerText).toLowerCase().includes(q);
    const matchesFilter=activeFilter==="all"||card.dataset.status===activeFilter||!card.dataset.status;
    card.hidden=!(matchesText&&matchesFilter);
  });
}
searchForm.addEventListener("submit",e=>{e.preventDefault();document.getElementById("directory").scrollIntoView({behavior:"smooth"});updateCards()});
searchInput.addEventListener("input",updateCards);
document.querySelectorAll(".filter-chip").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".filter-chip").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");activeFilter=button.dataset.filter;updateCards();
  });
});
document.addEventListener("keydown",e=>{
  if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();searchInput.focus()}
  if(e.key==="Escape")searchInput.blur();
});
const menuToggle=document.getElementById("menuToggle");
menuToggle.addEventListener("click",()=>{
  const nav=document.querySelector(".top-actions");const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".top-actions a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".top-actions").classList.remove("open")));
// Replace this placeholder with your server's permanent invite URL.
const discordInvite="";
const discordLink=document.getElementById("discordLink");
if(discordInvite){discordLink.href=discordInvite;discordLink.target="_blank";discordLink.rel="noopener"}
else{discordLink.addEventListener("click",e=>{e.preventDefault();alert("Add your screenie.exe Discord invite in script.js to activate this link.")})}
