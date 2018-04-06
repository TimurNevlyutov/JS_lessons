var images=document.getElementsByTagName('img');
var bigPictureName;
var previousPicture=1;// переменная хранящая последний номер картинки
var src='img/big/IMG_1.jpg';
var divBigPic=document.getElementById('bigPic');
var imageElement=document.createElement('img');
		imageElement.src=src;
	divBigPic.appendChild(imageElement);

for (var i=0;i<images.length;i++){  //обработчик событий
	images[i].onclick= bigPicture;
}

function bigPicture (event){
	var eventTargetElement=event.target;
	bigPictureName=eventTargetElement.id.split('_')[1];
	src='img/big/IMG_'+bigPictureName+'.jpg';
	if (bigPictureName=='right' || bigPictureName=='left'){
		src='img/big/IMG_'+leftRight()+'.jpg';
		divBigPic.innerHTML='';//очищаем
	}  else {
		divBigPic.innerHTML='';//очищаем
			previousPicture=bigPictureName;
		}	
	imageElement.src=src;
	divBigPic.appendChild(imageElement);
	imageElement.onerror=function(){	
	imageElement.src='img/big/IMG_'+previousPicture+'.jpg';
	//alert('Ошибка!\nпо данному пути файл отсутствует\n'+this.src);
	}
}

function leftRight(){
		console.log(previousPicture);if (bigPictureName=='left'){
			for(i=1; previousPicture>1;i--){
				previousPicture--;
				console.log(previousPicture);
			return previousPicture;
			}
	}else{
		for(i=1; previousPicture<3;i++){
			previousPicture++;
			return previousPicture;
		}
}
}