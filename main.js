// function sum(num1, num2) {
//   return num1 + num2;
// }


// console.log(sum(10, 20))

// let anyName = function () {

// }

// let sum = (num1, num2) => num1 + num2;

// div, .className, #idName

// let element = document.querySelector('#myDiv')

// element.innerHTML = 'hello world';

// console.log(element)


let div = document.getElementById('myDiv')



// div.onclick = function () {
//   console.log('click')
// };

// div.onclick = function () {
//   console.log('clicked 2')
// }



// let element = document.createElement('h1');
// let text = document.createTextNode('test');

// element.appendChild(text);

// let e = document.createElement('p');
// e.innerHTML = 'after test';


// document.body.append(element, e);





// document.body.prepend(e)

// clicked
// clicked 2




// console.log(div)

// let div = document.getE









// let element = document.createElement('div');
// element.innerHTML = 'hello from osama';

// element.setAttribute('id', 'myElement');
// element.className = 'my-class'
// document.body.appendChild(element)
// console.log(element)
// let element = document.querySelector('div');


// console.log(element.getAttribute('name'));

// let element = document.querySelector("[name='myDiv']")
// console.log(element)
// document.querySelector("[name='myDiv']")

// let element = document.querySelector("[type='email']")

// element.value = 'hello in input field'


// console.log(element);




// for (let i = 1;i<=100;i++) {
//   let parent = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerHTML = `title ${i}`;
// p.innerHTML = 'this is a very long paragraph and hello from javascript'
// parent.appendChild(h1);
// parent.appendChild(p);

// document.body.appendChild(parent);
// }




let element1 = document.getElementById('one');
let element2 = document.getElementById('two');


let intervalId;

element1.onclick = function () {
  intervalId = setInterval(function () {
    console.log('set interval completed again')
  }, 2000);
}


element2.onclick = function () {
  clearInterval(intervalId);
}



