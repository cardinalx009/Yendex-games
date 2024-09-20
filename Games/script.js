let select1=document.querySelector('#Eng')
select1.addEventListener('click', function(){
document.getElementById("selink1").textContent='Home'
document.getElementById("selink2").textContent='about me'
document.getElementById("select").textContent='English'
document.getElementById("selink3").textContent='Contact'
document.getElementById("selink4").textContent='Support'
document.getElementById("input").placeholder='Search...'
document.getElementById("Dinotext").textContent='DINOSAURS MEMORY GAMES'
document.getElementById("dinobtn").textContent='Play'

})
let select2=document.querySelector('#Ru')
select2.addEventListener('click', function(){
document.getElementById("selink1").textContent='дом'
document.getElementById("selink2").textContent='обо мне'
document.getElementById("select").textContent='русский'
document.getElementById("selink3").textContent='контакт'
document.getElementById("selink4").textContent='поддержка'
document.getElementById("input").placeholder='поиск...'
document.getElementById("Dinotext").textContent='ИГРЫ НА ПАМЯТЬ О ДИНОЗАВРАХ'
document.getElementById("dinobtn").textContent='Играть'

})
let select3=document.querySelector('#Ja')
select3.addEventListener('click', function(){
document.getElementById("selink1").textContent='ホーム'
document.getElementById("selink2").textContent='私について'
document.getElementById("select").textContent='日本語'
document.getElementById("selink3").textContent='お問い合わせ先'
document.getElementById("selink4").textContent='サポート'
document.getElementById("input").placeholder='検索。..'
document.getElementById("Dinotext").textContent='恐竜の記憶ゲーム'
document.getElementById("dinobtn").textContent='プレイ'

})
let select4=document.querySelector('#Uz')
select4.addEventListener('click', function(){
document.getElementById("selink1").textContent='UY'
document.getElementById("selink2").textContent='Men haqimda'
document.getElementById("select").textContent="O'zbek"
document.getElementById("selink3").textContent='Aloqa'
document.getElementById("selink4").textContent="Qo'llab quvatlash"
document.getElementById("input").placeholder='Qidiruv...'
document.getElementById("Dinotext").textContent="Dinazavrlar boshqotirma o'yin"
document.getElementById("Dinotext").style.marginTop="70px"
document.getElementById("dinobtn").textContent="O'ynash"

})
let select5=document.querySelector('#Ar')
select5.addEventListener('click', function(){
document.getElementById("selink1").textContent='الرئيسية'
document.getElementById("selink2").textContent='عني'
document.getElementById("select").textContent="العربية"
document.getElementById("selink3").textContent='اتصل بنا'
document.getElementById("selink4").textContent="الدعم"
document.getElementById("input").placeholder='بحث...'
document.getElementById("Dinotext").textContent="الديناصورات ألعاب الذاكرة"
document.getElementById("dinobtn").textContent="لعب"

})
jQuery(function ($) {
    
	$(".sidebar-dropdown > a").click(function() {
	  $(".sidebar-submenu").slideUp(200);
	  if (
		$(this)
		  .parent()
		  .hasClass("active")
	  ) {
		$(".sidebar-dropdown").removeClass("active");
		$(this)
		  .parent()
		  .removeClass("active");
	  } else {
		$(".sidebar-dropdown").removeClass("active");
		$(this)
		  .next(".sidebar-submenu")
		  .slideDown(200);
		$(this)
		  .parent()
		  .addClass("active");
	  }
	});

	$("#close-sidebar").click(function() {
	  $(".page-wrapper").removeClass("toggled");
	});
	$("#show-sidebar").click(function() {
	  $(".page-wrapper").addClass("toggled");
	});

  });

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
  const angle = 20;
const rotateCard = window;

const lerp = (start, end, amount) => {
	return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
	const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
	return Math.min(Math.max(newValue, -newMax), newMax);
};

window.addEventListener("DOMContentLoaded", (event) => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((e) => {		
		e.addEventListener("mousemove", (event) => {
			const rect = e.getBoundingClientRect();
			const centerX = (rect.left + rect.right) / 2;
			const centerY = (rect.top + rect.bottom) / 2;
			const posX = event.pageX - centerX;
			const posY = event.pageY - centerY;
			const x = remap(posX, rect.width / 2, angle);
			const y = remap(posY, rect.height / 2, angle);
			e.dataset.rotateX = x;
			e.dataset.rotateY = -y;
		});
		
		e.addEventListener("mouseout", (event) => {
			e.dataset.rotateX = 0;
			e.dataset.rotateY = 0;
		});
	});
	
	const update = () => {
		cards.forEach((e) => {
			let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
			let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
			if (isNaN(currentX)) currentX = 0;
			if (isNaN(currentY)) currentY = 0;
			const x = lerp(currentX, e.dataset.rotateX, 0.05);
			const y = lerp(currentY, e.dataset.rotateY, 0.05);
			e.style.setProperty("--rotateY", x + "deg");
			e.style.setProperty("--rotateX", y + "deg");
		})
	}
	setInterval (update,1000/60)
});
