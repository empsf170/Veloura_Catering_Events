
document.addEventListener("DOMContentLoaded",()=>{
 const path=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".nav-link").forEach(a=>{
   if(a.getAttribute("href")===path)a.classList.add("active");
 });
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
 const top=document.querySelector(".back-top");
 window.addEventListener("scroll",()=>{if(top)top.style.display=scrollY>450?"grid":"none"});
 if(top)top.addEventListener("click",e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"})});
 document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",e=>{
   e.preventDefault();
   const b=f.querySelector("button[type=submit]");
   if(b){const t=b.textContent;b.textContent="Enquiry Sent";setTimeout(()=>b.textContent=t,2200)}
 }));
});
