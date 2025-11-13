var nav=document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled');
    }
});


var imgDiv=document.querySelector('.sec4-div2')
var rbtn=document.querySelector('.right-arrow')
var lbtn=document.querySelector('.left-arrow')

var background=["https://i.pinimg.com/736x/11/ca/7b/11ca7b41a5aa311ee2bc6afda3d8261c.jpg","https://pbs.twimg.com/media/Eho7FnFWkAMPMYA?format=jpg&name=large","https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401600/401694.jpg"]
var i=1;
rbtn.addEventListener('click',function(){
    i=i+1;
    let j=i%background.length
    imgDiv.style.backgroundImage=`url(${background[j]})`;
    if(j==2){
        imgDiv.style.backgroundPosition='center'
    }
    if(j==1){
        imgDiv.style.backgroundPosition='100%';
    }
    if(j==0)
    {
        imgDiv.style.backgroundPosition='bottom';
    }
})

lbtn.addEventListener('click',function(){
    i=i+2;
    let j=i%background.length
    imgDiv.style.backgroundImage=`url(${background[j]})`;
     if(j==1){
        imgDiv.style.backgroundPosition='100%';
    }
    if(j==2){
        imgDiv.style.backgroundPosition='center'
    }
    if(j==0)
    {
        imgDiv.style.backgroundPosition='bottom';
    }
})