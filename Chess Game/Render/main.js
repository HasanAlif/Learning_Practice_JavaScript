function initGameRender(data){
    data.foreach((element)=>{
        element.foreach((square)=>{
            console.log(square);
        });
    });
}
export {initGameRender};