const content = document.getElementById('content')
const expander = document.getElementsByClassName('expandy-control')[0]
const expandArrow = document.getElementsByClassName('expand-arrow')[0]
const addBtn = document.getElementsByClassName('add-stuff')[0]
const removeBtn = document.getElementsByClassName('remove-stuff')[0]
const stuffContainer = document.getElementsByClassName('stuff')[0]

//state of the expandable bit
let expandedState = false
//holds the dynamically added elements
const stuff = []
//store the height of the stuff container
let stuffContainerHeight = 66


expander.addEventListener('click', evt => {
  evt.preventDefault()

  expandedState = !expandedState;
  
  if(expandedState) {
    content.style.height = stuffContainerHeight + 'px'
    expandArrow.classList.replace('fa-chevron-right', 'fa-chevron-down')
    //change the height to 'auto' after the transition is complete
    setTimeout(() => content.style.height = 'auto', 301)
  } else {
    //change height back to specific before collapsing so transition will work
    content.style.height = stuffContainerHeight + 'px'
    expandArrow.classList.replace('fa-chevron-down', 'fa-chevron-right')
    //set height back to 0 after sleight delay to allow for the above specific height change to be implemented
    setTimeout(() => content.style.height = '0', 10)
  }
})

//dynamically add a new thing
addBtn.addEventListener('click', evt => {
  const newStuff = document.createElement('div')
  newStuff.className = 'thing'
  newStuff.appendChild(document.createTextNode("New Stuff"))
  stuffContainer.appendChild(newStuff)
  
  //add the new element to the stuff array so we can remove it easily
  stuff.push(newStuff)
  //store the new container height
  stuffContainerHeight = stuffContainer.offsetHeight
})


removeBtn.addEventListener('click', () => {
  //remove the last thing
  if(stuff.length > 0) {
    stuff.pop().remove()
  }
  
  // store the new height
  stuffContainerHeight = stuffContainer.offsetHeight
})
