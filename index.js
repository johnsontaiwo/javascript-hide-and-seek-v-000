function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var element = document.getElementById('grand-node')
  var nextElement = element.children[0]
    while (nextElement) {
      element = nextElement
      nextElement = element.children[0]
    }
    
    return element
  //return lastsibbling.lastChild
}

function increaseRankBy(n) {
  var list = document.getElementsByClassName('ranked-list')
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      list[i].textContent = (i + n).toString()
    }
  }
}