let index= 0;

document.getElementById('myButton').onclick = function () {
    const colors = ['yellow','red', 'blue' ,'orange', 'tomato'];
    document.getElementById('container1').style.backgroundColor=colors[index++];
if(index>colors.length-1) {
    index=0
}

}








