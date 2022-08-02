let header=document.querySelector(".header")


window.onscroll=()=>{
    if (window.scrollY>70){
        header.classList.add('sticky_header')
    }
    else{
        header.classList.remove('sticky_header')
    }
}
