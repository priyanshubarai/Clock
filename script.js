
const ID = setInterval(() => {
    
    const date = new Date();
    document.querySelector(".Hour").textContent = date.getHours();
    document.querySelector(".Min").textContent = date.getMinutes();
    document.querySelector(".Sec").textContent = date.getSeconds();
},1000 );