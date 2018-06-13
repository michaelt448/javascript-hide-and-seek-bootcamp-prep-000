function getFirstSelector(selector){
 return document.querySelector(selector)
}
function nestedTarget(){
 return document.getElementById('nested')
}
function increaseRankBy(n){
  const list= document.querySelectorAll('.ranked-list')
  for(let i = 0; i<list.length; i++ ){
    list[i].innerHTML = (i + n).toString()
  }
}
function deepestChild(){
  const list = document.querySelectorAll("#grand-node")
  for(let i = 0; i<list.length; i++){
     return document.querySelector('div').querySelector('div').querySelector('div')
    }
    
  
}