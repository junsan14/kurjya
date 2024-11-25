
import $ from 'jquery';
import { useState } from 'react';
function menuShow(){

const [isShow, setIsShow] = useState(false);
$(function(){
	$('.js-show-items').on("click", function(){
		if(isShow){
			$('.js-items').removeClass('show');
			setIsShow(false);
		}else{
			$('.js-items').addClass('show');
			setIsShow(true);
		}
			
	})
	$('.main').on("click", function(){
		if(isShow){
			$('.js-items').removeClass('show');
			setIsShow(false);
			//console.log(isShow)
		}		
	})
	$('.js-items').on("click", function(){
		if(isShow){
			$('.js-items').removeClass('show');
			setIsShow(false);
			//console.log(isShow)
		}		
	})
	
})
	
}

function fixSearchArea(){
	
	
	$(window).on("scroll", function(){
		let $searchForm = $('.js-search-form')
		let $searchForm_positionY = $searchForm.offset().top;
		let current_positionY = $(window).scrollTop();
		//console.log($searchForm_positionY)
		if(current_positionY>$searchForm_positionY){
			console.log($searchForm.children("div").children("input"));
			$searchForm.addClass("scroll-fix");
			$searchForm.children("div").children("input").addClass("hide");
		}else if(current_positionY < 60){
			$searchForm.removeClass("scroll-fix");
			$searchForm.children("div").children("input").removeClass("hide");
		}
	})
}

function showLoginOrSignup(){
	const [isShow, setIsShow] = useState(false);
	$(function(){
		const $btn = $('.js-show-loginOrsignup');
		const $modal = $('.js-modal');
		const $ele = $(".js-loginOrsignup");
		$btn.on("click", function(){
			if(!isShow){
				$ele.addClass("show");
				$modal.addClass("show")
				setIsShow(true);
			}
		})
		$modal.not($ele).on("click", function(){
		if(isShow ){
			console.log($(this))
			
			$ele.removeClass("show");
			$modal.removeClass("show")
			setIsShow(false);
			console.log(isShow)
			
		}
			
	})

	})
}


export {menuShow, fixSearchArea, showLoginOrSignup};