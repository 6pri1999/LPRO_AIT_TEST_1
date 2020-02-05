/*
*init
*called when body loaded
*/
function init(){
    document.getElementById("test").innerHTML="init says Hi!";
}
 /*
 *test button
 *called by button on click
 */
function test_button() {
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML= "button clicked!";
    my_test_div.style.backgroundColor = "blue"; /*change the background in blue*/
    alert("clicked");

}