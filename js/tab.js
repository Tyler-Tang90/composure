//选项卡
(function(){
  var myDiv = document.getElementById('tab');
  var myLi = myDiv.getElementsByTagName("li");
  var myList = myDiv.getElementsByTagName("div");
  for (var i = 0; i < myLi.length; i++) {
      myLi[i].index = i;
      myLi[i].onclick = function () {
          for (var i = 0; i < myLi.length; i++) {
              myLi[i].className = '';
              myList[i].style.display = 'none';
          }
          this.className = 'active';
          myList[this.index].style.display = 'block';
      }
  }
})();
