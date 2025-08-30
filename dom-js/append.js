// 1. where to add
const placeslist=document.getElementById('places-list');
// console.log(placeslist);

// 2. what to be added
const li=document.createElement('li');
li.innerText='Sonargaon';

// 3. add the child
placeslist.appendChild(li);


// 1. where to add
const mainCaintainer=document.getElementById('main-container');
console.log(mainCaintainer);
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My food list';
section.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='byryani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='salad';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='rice';
ul.appendChild(li3);

section.appendChild(ul);

mainCaintainer.appendChild(section);


// sect innerHTML directly
const sectionDress=document.createElement('section');
    sectionDress.innerHTML=`
    <h1>My Dress section</h1>
    <ul>
        <li>Pant</li>
        <li>Shirt</li>
    </ul>
    `
    mainCaintainer.appendChild(sectionDress);
