
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'))}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('OPNEVA Anfrage – '+(data.get('company')||'Unternehmen'));
    const body=encodeURIComponent(
      'Name: '+(data.get('name')||'')+'\n'+
      'Unternehmen: '+(data.get('company')||'')+'\n'+
      'E-Mail: '+(data.get('email')||'')+'\n'+
      'Telefon: '+(data.get('phone')||'')+'\n\n'+
      'Nachricht:\n'+(data.get('message')||'')
    );
    window.location.href='mailto:officeopneva@gmail.com?subject='+subject+'&body='+body;
  });
}
