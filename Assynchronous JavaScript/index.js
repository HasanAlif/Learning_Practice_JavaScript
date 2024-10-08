
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









console.log("Start");

function loginUser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userData = {userId: 592 , status: "success"};
            console.log("Inside loginUser");
            resolve(userData);
        },2000);
    });
    
}

function getUserTweets(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            tweetData = [{tweetId:1,content:"ABC"},{tweetId:2,content:"XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
        },1000); 
    });
}

function getTweetComments(tweetId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            commentData = [{commentId: 1, content: "Awesome!"}];
            console.log("Inside getTweetComments");
            resolve(commentData);
        },1000);
    });
}


loginUser("alifalmehedihasan@gmail.com","random")
.then(userData=>getUserTweets(userData.userId))
.then(tweetData=>getTweetComments(tweetData[0].tweetId))
.then(commentData=>console.log(commentData))
.catch(error=>console.log(error));


console.log("Finish");







console.log("Start");

const twitterProfile = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        userData = {userID: 592,status: "Success"};
        console.log("Inside twitterProfile");
        resolve(userData);
    },2000);
});


const instagramProfile = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        userData = {userID: 782,status: "Success"};
        console.log("Inside instagramProfile");
        resolve(userData);
    },5000);
});

Promise.all([twitterProfile,instagramProfile])
.then(data=> console.log(data));

console.log("Finish");







console.log("Start");

function loginUser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userData = {userId: 592 , status: "success"};
            console.log("Inside loginUser");
            resolve(userData);
        },2000);
    });
    
}

function getUserTweets(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            tweetData = [{tweetId:1,content:"ABC"},{tweetId:2,content:"XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
        },1000); 
    });
}

function getTweetComments(tweetId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            commentData = [{commentId: 1, content: "Awesome!"}];
            console.log("Inside getTweetComments");
            resolve(commentData);
        },1000);
    });
}

async function displayData(){
    try{
        const userData = await loginUser("alifalmehedihasan@gmail.com","random");
        const tweetData = await getUserTweets(userData.userId);
        const commentData = await getTweetComments(tweetData[0].tweetId);
        console.log(commentData);
    }catch(error){
        console.log(error);
    }
}
displayData();

console.log("Finish");


