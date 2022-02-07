// JavaScript

/* 
>>> REFERÊNCIAS
  
- Element.scrollLeft 
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft

- DOM Style
https://www.w3schools.com/jsref/dom_obj_style.asp

- DOM Element offsetLeft
https://www.w3schools.com/jsref/prop_element_offsetleft.asp
*/ 

// when the site is first loaded, select the first dot in the menu section
document.getElementsByClassName('dot')[0] = dot.style.backgroundColor = 'gray';


// function to change the menu slides
function changeSlide(slide) {
  // showSlide(numSlide);
  let menu = document.getElementById('menu');
  let dot = document.getElementsByClassName('dot');

  // Remove the selected class of all dot elements wich are not selected in the moment
  for(i = 0; i < dot.length; i++) {
    // dot[i].classList.remove('selected');
    // dot[i].id = '';

    dot[i].style.backgroundColor = '#bbb';
  }

  if(slide === 1){
    menu.scrollLeft = 0;

    // dot[0].classList.add('selected');
    // dot[0].id = 'selected';
    dot[0].style.backgroundColor = 'gray';
  }

  if(slide === 2){
    menu.scrollLeft = 965;

    // dot[1].classList.add('selected');
    // dot[1].id = 'selected';
    dot[1].style.backgroundColor = 'gray';
  }
}