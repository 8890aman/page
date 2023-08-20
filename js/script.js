let flag=0;
function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}
function remove(){
  if(flag===0){
    const element = document.getElementById("myDIV");
     element.classList.add("active");
     console.log("working");
     flag++;
  }
  else{
    const element = document.getElementById("myDIV");
     element.classList.remove("active");
     console.log("working");
    flag--;
  }
    document.querySelector('.scrollable').addEventListener('wheel', preventScroll);
}
const btn=document.querySelector('.menu-bar');
btn.addEventListener('click',remove);


