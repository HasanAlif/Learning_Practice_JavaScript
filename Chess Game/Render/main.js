const ROOT_DIV = document.getElementById("root");

function initGameRender(data){
    data.forEach((element) => {
        element.forEach((square)=>{});
        const rowEl = document.createElement("div");
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });
}
export {initGameRender};