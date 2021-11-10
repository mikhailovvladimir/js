// document.getElementById('slider-left').onclick = slideLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider() {
	//указываю какая функция будет автовыполняться и с каким интервалом
	timer = setTimeout(function() {
		var polosa = document.getElementById('polosa');//получаю элемент с ай ди полоса
		left  = left - 128; // кладем в переменную значение каждый раз уменьшающееся на -128
		if (left < -512) { // есди переменная лефт меньше 512 значит тру
			left = 0; //обнуляем лефт
		}
		
		//обнуляем таймер, получаем номер таймера
		clearTimeout(timer);
		polosa.style.left = left + 'px';//записываам значение для изменения стиля в px
		autoSlider();//запускаем автослайдер
	}, 1000); //и время переключения
}