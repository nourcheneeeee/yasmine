function bold () 
{
  var gettext= document.getElementById("text");
  gettext.style.fontWeight="bold";
  

} 
function ita()
{
    var gettext=document.getElementById("text");
    gettext.style.fontStyle="italic";

}
function underline()
{
    var gettext=document.getElementById("text");
    gettext.style.textDecoration="Underline";
}
var fontSize = document.getElementById('size');
fontSize.onchange = function () {
    var txtBox = document.getElementById("text")
    txtBox.style.fontSize = this.value +"px";

}
function font()
{
    var myselect=document.getElementById("style");
var style= myselect.options[myselect.selectedIndex].value;
document.getElementById("text").style.fontFamily=style;
}


