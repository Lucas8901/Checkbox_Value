let list = document.getElementById('valueList');
let text = '<span> you have selected :</span>'
let listArray = []

let checkboxes = document.querySelectorAll('.checkbox')

for(let checkbox of checkboxes){
  checkbox.addEventListener('click', function(){
    if(this.checked == true){
      listArray.push(this.value)
      list.innerHTML = text + listArray.join(' / ')
    }else{
      listArray = listArray.filter(e => e !== this.value)
      list.innerHTML = text + listArray.join(' / ')
    }
  })
}