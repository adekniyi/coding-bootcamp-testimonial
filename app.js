var next = document.querySelector('.next');
var prev = document.querySelector('.prev');



var john = document.querySelector('.john');
var tanya = document.querySelector('.tanya');
var check = true


next.addEventListener('click',function(){
    if(tanya){
        console.log('click');
        john.style.display = 'flex';
        tanya.style.display = 'none';
    }else if(!tanya){
        console.log('clicked');
        tanya.style.display = 'flex';
        john.style.display = 'none';
}
});

prev.addEventListener('click',function(){
    console.log('clicked');
    if(john.style.display = 'flex'){
        console.log('clicked');
        tanya.style.display = 'flex';
        john.style.display = 'none';
    }else if(!john){
        console.log('click');
        john.style.display = 'flex';
        tanya.style.display = 'none';
}
})