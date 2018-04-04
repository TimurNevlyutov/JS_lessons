var goodsList=[{
	name: 'Apple iPhone6',
	imgSrc: 'img/6s.jpg',
	price: 33990
},{
	name: 'Apple iPhone7',
	imgSrc: 'img/7.jpg',
	price: 48490
},{
	name: 'Apple iPhone8',
	imgSrc: 'img/8.jpg',
	price: 60990
}]
goodsCreator(); //функция генерирующая товар взависимости от количества товара в массиве goodsList
var idGoods;	//переменная идентификатор товара в массиве
var allButtons=document.getElementsByTagName('button');

for (var j=0;j<allButtons.length;j++) {	
	allButtons[j].onclick=sendBasket;
}


function goodsCreator(){
	var goodsArea=document.getElementById('goods');
	for (var i=0;i<goodsList.length;i++){
		var goodsElement=document.createElement('div');
		goodsElement.id='goodsBox'+i;
		goodsArea.appendChild(goodsElement);
		//---выводим название товара
		nameElement=document.createElement('p');
		nameElement.textContent=goodsList[i].name;
		goodsElement.appendChild(nameElement);
		//---выводим изображение товара
		imageElement=document.createElement('img');
		imageElement.src=goodsList[i].imgSrc;
		goodsElement.appendChild(imageElement);
		//---выводим цену товара
		priceElement=document.createElement('p');
		priceElement.textContent=goodsList[i].price;
		goodsElement.appendChild(priceElement);
		//---выводим кнопку
		buttonElement=document.createElement('button');
		buttonElement.id='button_'+i;
		buttonElement.textContent='Buy';
		goodsElement.appendChild(buttonElement);
	}
}

function sendBasket(event){ //функция получения Id товара при каждом клике
	var eventTargetButton=event.target;
	var buttonName=eventTargetButton.id.split('_');
	idGoods=buttonName[1];
basket();	//функция добавления товара в корзину
}

	var basketArea=document.getElementById('basket');
	var tableTag=document.createElement('div');
	basketArea.appendChild(tableTag);
	tableTag.id=('basketTable');
var count=0; // счетчик товаров в корзине
var sum=0; // сумма товаров в корзине
var sumDiv=document.createElement('div');
sumDiv.id=('sumDiv');

function basket(){
	count+=1;
	if (count<10){		//ограничение корзины
	var tableArea=document.getElementById('basketTable');
	var addDiv=document.createElement('div');
	var basketText=document.createTextNode(count+' '+goodsList[idGoods].name+'________________________'+goodsList[idGoods].price+'руб.');
	sum+=goodsList[idGoods].price;
	addDiv.appendChild(basketText);
	tableArea.appendChild(addDiv);
	sumDiv.textContent=('Всего: '+sum+'руб.');
	tableArea.appendChild(sumDiv);
	
	}else{
		alert('Корзина полна!')};
	}
