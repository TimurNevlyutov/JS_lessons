var images=document.getElementsByTagName('img');
for (var i=0;i<images.length;i++){
	images[i].onclick= bigPicture;
	images[i].onmouseover=images[i].onmouseout= redFrame;
}
function bigPicture (event){
	var divBigPic=document.getElementById('bigPic');
	divBigPic.innerHTML='';//очищаем
	var eventTargetElement=event.target;
	var imageName_x=eventTargetElement.id.split('_');
	var src='img/big/IMG_'+imageName_x[1]+'.jpg';
	var imageElement=document.createElement('img');
	imageElement.src=src;
	divBigPic.appendChild(imageElement);
	imageElement.onerror=function(){
		alert('Ошибка!\nпо данному пути файл отсутствует\n'+this.src);
	}
}
function redFrame(event){
 if (event.type == 'mouseover') {
    event.target.style.border = '4px solid violet';
  }
  if (event.type == 'mouseout') {
    event.target.style.border = ''
  }
}