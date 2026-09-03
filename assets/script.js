document.addEventListener('DOMContentLoaded',()=>{
  // Homepage FAQ accordion
  const items=document.querySelectorAll('.faq-item');
  items.forEach(item=>{const btn=item.querySelector('button');if(!btn)return;btn.addEventListener('click',()=>{const was=item.classList.contains('open');items.forEach(i=>{i.classList.remove('open');const s=i.querySelector('button span,.faq-icon');if(s)s.textContent='+'});if(!was){item.classList.add('open');const s=btn.querySelector('span,.faq-icon');if(s)s.textContent='−'}})});
  // Legacy FAQ blocks used by inner pages
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.classList.toggle('open');const icon=btn.querySelector('.faq-icon');if(icon)icon.textContent=btn.parentElement.classList.contains('open')?'−':'+'}));
  const menuBtn=document.querySelector('.menu-toggle,.menu-btn');const nav=document.querySelector('.main-nav,.navlinks');
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{if(nav.classList.contains('main-nav')){const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')}else{const open=nav.style.display==='flex';nav.style.display=open?'':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';nav.style.padding='18px 5%';nav.style.background='#fff';nav.style.flexDirection='column';nav.style.alignItems='flex-start';nav.style.boxShadow='0 15px 30px rgba(0,0,0,.08)'}})}
  document.querySelectorAll('.nav-drop>a').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<=650){e.preventDefault();a.parentElement.classList.toggle('open')}}));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  document.querySelectorAll('.reveal,.stagger').forEach(el=>obs.observe(el));
  const form=document.querySelector('#contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your enquiry has been recorded in this demo. Connect this form to your preferred email/API service for live submissions.');form.reset()});
});
