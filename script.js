var tl = gsap.timeline()

tl.from("#loader h1",{
    x:-500,
    duration:0.5,
    delay:1,
    stagger:1

})

tl.to("#loader",{
    top: "-100%",
    duration: 1.5,
    delay:1
})

var storyArr = [
    {dp:"https://images.unsplash.com/photo-1535638433172-69315f80caf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Elizah Beth"},

    {dp:"https://images.unsplash.com/photo-1525264512745-a9701646196a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Amelia"},

    {dp:"https://images.unsplash.com/photo-1533776361265-7292f25314dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1515202913167-d9a698095ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Olivia"},

    {dp:"https://images.unsplash.com/photo-1640351663254-1aaef2380116?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Sophia"},

    {dp:"https://images.unsplash.com/photo-1640351662902-a1c22eca4ec4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Anna"},

    {dp:"https://images.unsplash.com/photo-1636637549843-0401bdffd126?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Emma"},
]

var otherStories = document.querySelector(".otherStories")
var clutter = ""
storyArr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" class="userStoryImg profileImage">
    <h5 class="storyUserName">${elem.name}</h5>
</div>`
})
otherStories.innerHTML = clutter;

otherStories.addEventListener("click",function(dets){
    var fullScreenStory = document.querySelector("#fullScreenStory")
    fullScreenStory.style.display = "block"
    fullScreenStory.style.backgroundImage = `url(${storyArr[dets.target.id].story})`

    setTimeout(function(){
        fullScreenStory.style.display = "none"  
    },2000)
});


var postArr = [
    {postProfile:"postProfile.jpeg",
    postProfileName:"rayyan_chodhary",
    postImg:"https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {postProfile:"postProfile.jpeg",
    postProfileName:"rayyan_chodhary",
    postImg:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {postProfile:"postProfile.jpeg",
    postProfileName:"rayyan_chodhary",
    postImg:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {postProfile:"postProfile.jpeg",
    postProfileName:"rayyan_chodhary",
    postImg:"https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

var instaFeeds = document.querySelector(".instaFeeds")
var feeds = ""

postArr.forEach(function(elem,idx){
    feeds += `<div class="post">
    <div class="postHeader">
        <div class="postHeadLeft">
            <img src="${elem.postProfile}" alt="">
            <h6>${elem.postProfileName}</h6>
        </div>
        <div class="postHeadright">
            <i class="ri-more-fill"></i>
        </div>
    </div>
    <div class="postBody">
        <img id="${idx}" src="${elem.postImg}" alt="">
        <i class="ri-heart-3-fill"></i>
    </div>
    <div class="postFooter">
        <div class="topPart">
            <div class="topPartLeft">
                <i class="ri-heart-3-fill postLike"></i>
                <i class="ri-chat-1-line"></i>
                <i class="ri-send-plane-fill"></i>
            </div>
            <div class="topPartright">
                <i class="ri-bookmark-line"></i>
            </div>
        </div>
        <div class="middlePart">
            <div class="likedProfiles">
                <img src="https://images.unsplash.com/photo-1636637549843-0401bdffd126?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <img src="https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <img src="https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </div>
            <div class="likednames">
                Liked by <span style="font-weight: bold;">kenzoere and others</span>
            </div>
        </div>
        <div class="bottomPart">
            November 12
        </div>
    </div>

</div>`

})
instaFeeds.innerHTML = feeds;


var postImg = document.querySelector(".postBody")
    var loveIcon = document.querySelector(".postBody i")
    var postLikeIcon = document.querySelector(".postLike")

postImg.addEventListener("dblclick",function(){
    loveIcon.style.transform = "translate(-50%,-50%) scale(1)"
    loveIcon.style.opacity = 0.8
    postLikeIcon.style.color = "red" 

    setTimeout(function(){
        loveIcon.style.opacity = 0;
    },1000)
    setTimeout(function(){
        loveIcon.style.transform = "translate(-50%,-50%) scale(0)" 
    },2000)
})


