$(document).ready(function(){$("#navbar").sticky({topSpacing:0})});function openNav(){document.getElementById("myNav").style.width="100%"}
function closeNav(){document.getElementById("myNav").style.width="0%"}
$(function(){$('.count').counterUp({delay:17,time:4000})});$(document).ready(function(){$(".link").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash});$(".link").removeClass("active")
$(this).addClass("active")}})})