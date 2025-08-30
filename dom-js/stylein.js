const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='10px';
    section.style.padding='10px';
    section.style.backgroundColor='lightgray';
}

// const placeContainer = document.getElementById('places-container');
// placeContainer.style.backgroundColor='red';

const placeContainer=document.getElementById('places-container');
placeContainer.classList.add('text-center');
placeContainer.classList.remove('large-text');