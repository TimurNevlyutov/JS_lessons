function table(rows,cols,z){
  var desk = document.createElement('table');
  document.body.appendChild(desk);
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.style.width = z+'px';
  td.style.height = z+'px';
  //-------------Net create----------
  for(var i=0; i<rows; i++){
    var trClasses=tr.classList.add('Rows');
    desk.appendChild(tr.cloneNode(true));
    
    for(var j=0; j<cols; j++){
      var _tr = desk.getElementsByTagName('tr')[i];
          _tr.appendChild(td.cloneNode(true));
      var _td = desk.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
      _td.className = ((i%2==0 && j%2==0) || i%2==1 && j%2==1) ? 'white' : 'black';
    }
  }
//------------Cleaning classes ----------------
  var topLabelsRow=desk.getElementsByClassName('Rows')[0];
  var topLabelsClass=topLabelsRow.classList.toggle('topRowsLabel');
  var bottomLabelsRow=desk.getElementsByClassName('Rows')[rows-1];
  var bottomLabelsClass=bottomLabelsRow.classList.toggle('bottomRowsLabel');
  for(var i=0; i<rows; i++){
        for(var j=0; j<cols; j++){
      var _tr1 = desk.getElementsByTagName('tr')[i];
      var _td1 = desk.getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
     if (j==0||j==cols-1){
        _td1.classList.add ('tdLabel');
    }
    }
  }
 //--------------- /Labeling/--------- 
 //-------------1-Letters-----------
  var labels=['','A','B','C','D','E','F','G','H',''];
  for(var k=0; k<cols; k++){
        var tdBottomLabel  = bottomLabelsRow.getElementsByTagName('td')[k];
        tdBottomLabel.classList.add('tdBottom');
        var symbolText=document.createTextNode(labels[k]);
        tdBottomLabel.appendChild(symbolText);
  }
  var labelsReverse=labels.reverse();
  for(k=0; k<cols; k++){
        var tdTopLabel  = topLabelsRow.getElementsByTagName('td')[k];
        tdTopLabel.classList.add('tdTop');
        var symbolText=document.createTextNode(labelsReverse[k]);
        tdTopLabel.appendChild(symbolText);
  }
  //------------2-Numbers------------- 
  var number=['','1','2','3','4','5','6','7','8',''];
  for(k=0; k<rows; k++){
        var eachRow  = desk.getElementsByClassName('Rows')[k];
        var lastColumn=eachRow.lastChild;
        lastColumn.classList.add('lastColumnLabel');
        var numberText=document.createTextNode(number[k]);
        lastColumn.appendChild(numberText);
  }
  var numberReverse=number.reverse(); 
  for(k=0; k<rows; k++){
        var eachRow  = desk.getElementsByClassName('Rows')[k];
        var firstColumn=eachRow.firstChild;
        firstColumn.classList.add('firstColumnLabel');
        var numberText=document.createTextNode(numberReverse[k]);
        firstColumn.appendChild(numberText);
  }  
}
function figLetters (row,cols){
    var blackFigRow=document.getElementsByClassName('Rows')[1];
    var blackFigRow2=document.getElementsByClassName('Rows')[2];
    var whiteFigRow=document.getElementsByClassName('Rows')[row-2];
    var whiteFigRow2=document.getElementsByClassName('Rows')[row-3];
    var blackFigs=[['','\u265C','\u265E','\u265D','\u265B','\u265A','\u265D','\u265E','\u265C',''],
    ['','\u265F','\u265F','\u265F','\u265F','\u265F','\u265F','\u265F','\u265F','']];
    for(var k=0; k<cols; k++){
        var blackFig  = blackFigRow.getElementsByTagName('td')[k];
        var blackFig2 = blackFigRow2.getElementsByTagName('td')[k];
        if (k==0||k==cols-1){
          blackFig.classList.add('tdLabel');
          blackFig2.classList.add('tdLabel');
        }
        else{
          blackFig.classList.add('blackFigs');
          blackFig2.classList.add('blackFigs');
        }
        var letterFig=document.createTextNode(blackFigs[0][k]);
        var letterFig2=document.createTextNode(blackFigs[1][k]);
        blackFig.appendChild(letterFig);
        blackFig2.appendChild(letterFig2);
  }
  var whiteFigs=[['','\u2656','\u2658','\u2657','\u2655','\u2654','\u2657','\u2658','\u2656',''],
    ['','\u2659','\u2659','\u2659','\u2659','\u2659','\u2659','\u2659','\u2659','']];
  for(var k=0; k<cols; k++){
        var whiteFig  = whiteFigRow.getElementsByTagName('td')[k];
        var whiteFig2 = whiteFigRow2.getElementsByTagName('td')[k];
        if (k==0||k==cols-1){
          whiteFig.classList.add('tdLabel');
          whiteFig2.classList.add('tdLabel');
        }
        else{
          whiteFig.classList.add('whiteFigs');
          whiteFig2.classList.add('whiteFigs');
        }
        var letterFig=document.createTextNode(whiteFigs[0][k]);
        var letterFig2=document.createTextNode(whiteFigs[1][k]);
        whiteFig.appendChild(letterFig);
        whiteFig2.appendChild(letterFig2);
  }
}
table(10,10,60);
figLetters(10,10);