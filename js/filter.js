let productList = document.querySelector(".product-list")
console.log(productList)
let lthBtn = document.querySelector(".lth")
lthBtn.addEventListener("click",function(){
   for(let i = 0;i <productList.children.length;i++){
      for (let j=i;j<productList.children.length;j++){
if (+productList.children[i].getAttribute("data-sort")>+productList.children.length[j].getAttribute("data-sort")){
   replaceNode = productList.replaceChild(productList.children[j],productList.children[i]);
   insertAfter(replaceNode,productList.children[i]);
        }
      }
   }
})
function insertAfter(elem,refElement){
   return refElement.parentNode.insertBefore(elem,refElem.nextSibling);
}
