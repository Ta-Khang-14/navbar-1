const activeClick = function(){
    const navActive = document.querySelector('nav ul');
    const tabBtn = document.querySelector('.tab');
    const listLink = document.querySelectorAll('.nav-links');
    tabBtn.addEventListener('click',function(e){
        // use toggle
        navActive.classList.toggle('nav-active');
        // use forEach
        listLink.forEach(function(link,index){
            if(link.style.animation){
                link.style.animation = '';
            }
            else link.style.animation = `fadeIn 0.5s ease forwards ${index/7 + 0.5}s`;
        })
        tabBtn.classList.toggle('tab-ani');
    });
    

    
    
}

activeClick();