
// let sport=document.getElementById("Sport")
// sport.addEventListener("click", function(){
  
//  document.getElementById("sport").style.display="block"
//  document.body.classList.toggle("sportjs"); 
 
// })


// let car=document.getElementById("car")
// car.addEventListener("click", function(){
//   document.body.classList.toggle("carjs");
// })

// let two=document.getElementById("two")
// two.addEventListener("click", function(){
//   document.body.classList.toggle("twojs");
// })
// let memory=document.getElementById("memory")
// memory.addEventListener("click", function(){
//   document.body.classList.toggle("memoryjs");
// })
// let survival=document.getElementById("survival")
// survival.addEventListener("click", function(){
//   document.body.classList.toggle("survivaljs");
  
// })
// let girls=document.getElementById("girls")
// girls.addEventListener("click", function(){
//   document.body.classList.toggle("girlsjs");
  
// })
// let fighter=document.getElementById("fighter")
// fighter.addEventListener("click", function(){
//   document.body.classList.toggle("fighterjs");
  
// })



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
let sliderIndex = 1;
let timeout;
const layers = [...document.querySelectorAll('.layer')];
const covers = [...document.querySelectorAll('.photo-frame')];

function changeCoverAnimState(state = 0) {
  const st = state === 1 ? 'running' : 'paused';
  covers.forEach(cover => {
    // cover.style['animation-play-state'] = st;
    cover.querySelector('.cover').style.width = `${state * 100}%`;
  });
}

function switchLayer(step = 1) {
  const nextSlide = (sliderIndex + step) % 3 === 0 ? 3 : (sliderIndex + step) % 3;
  
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex = nextSlide;
}

    
	
$(function(){
  
  // set deault arrow position and tab
  moveArrow();
  moveTabs($('.tab-panel__header li.tab-active a'));
  
  var tab = $('.tab-panel__header a').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    
    //Remove tab-active class and add to current click tab     
    $('.tab-panel__header li').removeClass('tab-active');
    $(this).closest('li').addClass('tab-active');
    
    //Move Current active tab
    moveTabs($(this));
   
    //Move arrow shape
    moveArrow();
    
  });
});

function moveTabs(target){
   var total_tabs = target.closest("li").index();
    $('.tab-panel__content-area').css({
      'transform':'translateX('+ -(100 * total_tabs) +'%)'
    });
}

function moveArrow(){
  var arrow_size = $('.tab-panel__arrow').outerWidth() / 2;
    var moving_position = $('.tab-active a').position().left + $('.tab-active   a').innerWidth()/ - arrow_size;
    $('.tab-panel__arrow').css({
      'transform':'translateX('+ moving_position +'px)'
    });
}

