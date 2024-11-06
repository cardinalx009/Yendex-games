
let sport=document.getElementById("Sport")
sport.addEventListener("click", function(){
  
 document.getElementById("sport").style.display="block"
 document.body.classList.toggle("sportjs"); 
 
})


let car=document.getElementById("car")
car.addEventListener("click", function(){
  document.body.classList.toggle("carjs");
})

let two=document.getElementById("two")
two.addEventListener("click", function(){
  document.body.classList.toggle("twojs");
})
let memory=document.getElementById("memory")
memory.addEventListener("click", function(){
  document.body.classList.toggle("memoryjs");
})
let survival=document.getElementById("survival")
survival.addEventListener("click", function(){
  document.body.classList.toggle("survivaljs");
  
})
let girls=document.getElementById("girls")
girls.addEventListener("click", function(){
  document.body.classList.toggle("girlsjs");
  
})
let fighter=document.getElementById("fighter")
fighter.addEventListener("click", function(){
  document.body.classList.toggle("fighterjs");
  
})
var color = document.getElementsByClassName("color");
document.onmousemove = function(){

  //get horizontal and vertical position of mouse
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  
  for(var i=0; i < 2; i++){
    color[i].style.left = x;
    color[i].style.top = y;
    color[i].style.transform = "translate(-"+x+", -"+y+")";
  }
  
}


    
	

$(document).on('ready', function() {
  
    $('.field').on('focus', function() {
      $('body').addClass('is-focus');
    });
    
    $('.field').on('blur', function() {
      $('body').removeClass('is-focus is-type');
    });
    
    $('.field').on('keydown', function(event) {
      $('body').addClass('is-type');
      if((event.which === 8) && $(this).val() === '') {
        $('body').removeClass('is-type');
      }
    });
    
  });
  let postsData = "";
const postsContainer = document.querySelector(".posts-container");
fetch(
  "https://gist.githubusercontent.com/jemimaabu/564beec0a30dbd7d63a90a153d2bc80b/raw/0b7e25ba0ebee6dbba216cfcfbae72d460a60f26/tutorial-levels"
).then(async (response) => {
  postsData = await response.json();
  postsData.map((post) => createPost(post));
});
const createPost = (postData) => {
  const { title, link, image, categories } = postData;
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = ` 
<a class="post-preview" href="${link}" target="_blank"> 
<img class="post-image" src="${image}"> 
</a> 
<div class="post-content"> 
<p class="post-title">${title}</p> 
<div class="post-tags"> 
${categories
            .map((category) => {
              return '<span class="post-tag">' + category + "</span>";
            })
            .join("")} 
</div> 
</div> 
`;
  postsContainer.append(post);
};
const search = document.getElementById("search");
let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};
search.addEventListener(
  "input",
  (event) => {
    const query = event.target.value;
    debounce(() => handleSearchPosts(query), 500);
  },
  false
);
