
console.log("A");

const welcome = function(){
    console.log("B");
    console.log("C");
}

setTimeout(welcome,2000);

console.log("D");







console.log("A");

const random = function(){
    const numOne = 15;
    const numTwo = 5;
    console.log(numOne + numTwo);
}

const welcome2 = function(){
    console.log("B");
    random();
    console.log("D")
}
setTimeout(welcome2,2000);

console.log("C");






console.log("A");

const logInterval = setInterval(()=>{
    console.log("Interval");
},1000);
clearInterval(logInterval);

console.log("C");




console.log("Start");

function loginUser(email,password,callback){
    setTimeout(()=>{
        userData = {userId: 592 , status: "success"};
        callback(userData);
    },2000);
}

const data = loginUser("alifalmehedihasan@gmail.com","random",(values)=> console.log(values));

console.log("Finish");












console.log("Start");

function loginUser(email,password,callback){
    setTimeout(()=>{
        userData = {userId: 592 , status: "success"};
        console.log("Inside loginUser");
        callback(userData);
    },2000);
}

function getUserTweets(userId,callback){
    setTimeout(()=>{
        tweetData = [{tweetId:1,content:"ABC"},{tweetId:2,content:"XYZ"}];
        console.log("Inside getUserTweets");
        callback(tweetData);
    },1000); 
}

function getTweetComments(tweetId,callback){
    setTimeout(()=>{
        commentData = [{commentId: 1, content: "Awesome!"}];
        console.log("Inside getTweetComments");
        callback(commentData);
    },1000);
}

const data2 = loginUser("alifalmehedihasan@gmail.com","random",(userData)=> {
    getUserTweets(userData.userId,()=>{
        getTweetComments(tweetData[0].tweetId,(commentData)=>{
            console.log(commentData);
        });
    });
});

console.log("Finish");

