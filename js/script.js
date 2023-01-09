// copy-----------------
const promoText = document.querySelector('.promo_text');
const btn = document.querySelector('.hotting_btn');

btn.addEventListener('click', () => {
	promoText.select();    
	document.execCommand("copy");
})

//burger-------------------
const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.header_info');
const body = document.querySelector('body');

burger.addEventListener('click', ()=>{
	mobMenu.classList.toggle('header_info_active');
	body.classList.toggle('lock');
});

mobMenu.addEventListener('click', ()=>{
	mobMenu.classList.remove('header_info_active');
	body.classList.remove('lock');
});

//popup--------------
const btnCallback = document.querySelector('.header_btn_callback');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close_popup');
const confirm = document.querySelector('.confirm');
const closeConfirm = document.querySelector('.close_confirm');

btnCallback.addEventListener('click', ()=>{
	popup.classList.add('popup_active');
});

closePopup.addEventListener('click', ()=>{
	popup.classList.remove('popup_active');
});

closeConfirm.addEventListener('click', ()=>{
	confirm.classList.remove('confirm_active');
});


//AJAX------------------------

	$(".popup_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			popup.classList.remove('popup_active');
			confirm.classList.add('confirm_active');
			//alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".popup_form").trigger("reset");
		});
		return false;
	});
