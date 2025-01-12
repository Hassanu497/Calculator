var input = document.getElementById('inp')
function btn(value){
    input.value +=value
}
function clearinp(){
    input.value = ""
}
function result (){
    input.value = eval(input.value)
}
function del() {
    input.value = input.value.substring(0, input.value.length - 1);
  }