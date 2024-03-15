function fetchPost(resolve,defined){
    setTimeout(()=>{
        if(resolve){
            const Posts=["post1","post2","post3"]
            defined(Posts)
        }
    },2000)
}
function fetchlikes(Posts,Anil){
    setTimeout(()=>{
        if (Posts.length>0){
            const likes=["like1","like2","like3"]
            Anil(likes)

        }

    },2000)
}

function fetchcomments(likes,callback){
    setTimeout(()=>{
        if(likes.length>0){
            const comments=["commet1","comment2","comment3"]
            callback(comments)
        }
    },2000)
}

fetchPost(true,(Posts)=>{ console.log(Posts)
fetchlikes(Posts,(likes)=>{
    console.log (likes)
    fetchcomments(likes,(comments)=>{console.log(comments)})})})