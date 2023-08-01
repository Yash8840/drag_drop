let lists = document.getElementsByClassName("list");
let rightList = document.getElementById("right");
let leftList = document.getElementById("left");
let resetBtn = document.querySelector('.reset button');
let leftListItems = [...lists] // making a copy of original list items in a new array since "lists" is a live HTMl collection and it's content changes as list items are dragged and dropped


for (const list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    if(!selected.classList.contains('image')){
    selected.style.backgroundColor = '#ec5285'
    }

    //setting drag and drop functionality from left to right box
    rightList.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightList.addEventListener("drop", function (e) {
      if(!selected.classList.contains('image')){
        selected.style.backgroundColor = '#e91e64';
      }
      rightList.appendChild(selected);
      selected.scrollIntoView({ behavior: 'smooth' });
      selected = null;
      start();
    stop();
    });
    

    //setting drag and drop functionality from right to left box
    leftList.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftList.addEventListener("drop", function (e) {
      if(!selected.classList.contains('image')){ // we do this to check if we selected image or not
        selected.style.backgroundColor = '#e91e63'
      }
      leftList.appendChild(selected);
      selected.scrollIntoView({ behavior: 'smooth' });
      selected = null;
      start();
      stop();
    });
    
  });
}

// for starting the confetti animation
const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 500); // 500 is time that after 0.5 second start the confetti 
};

//  for stopping the confetti animation
const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 1500); // 1500 is time that after 1.5 second stop the confetti 
};


//Reset functionality
resetBtn.addEventListener('click' , function(e){
  rightList.innerHTML = ''
  leftList.innerHTML = ''
  //appending all the original left list items in the empty left list
  leftListItems.forEach((item)=>{
    leftList.append(item)
  })
})
