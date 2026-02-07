let bg=document.querySelectorAll('.bg-slide'),b=0;
setInterval(()=>{
    if(bg.length > 0) {
        bg[b].classList.remove('active');
        b=(b+1)%bg.length;
        bg[b].classList.add('active');
    }
},5000);
