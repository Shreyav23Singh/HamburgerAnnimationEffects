const container =document.querySelector(".container");
function menuMaker(num){
    const  toggleHamburger = document.createElement("div");

    toggleHamburger.className =`toggle-hamburger${num}`;

    container.appendChild(toggleHamburger);

    for(let i=1 ;i<=3;i++){
        const buttonBar=document.createElement("span");
        toggleHamburger.appendChild(buttonBar);
        buttonBar.className=`line{i}`;
    }
}

function eventListener(num){
    const type1 =document.querySelector(`.toggle-hamburger${num}`);
    type1.addEventListener("click", () => {
        type1.classList.toggle(`type${num}`);
    });
}
for (let i = 1; i < 50; i++) {
    menuMaker(i);
    eventListener(i);
  }
  
