const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


//Regular
console.log('Hey you!');

//Interpolated
console.log('Hello I am a %s string', 'baby');

//styled -- using %c lets you add styles
console.log('%c I am some great text', 'font-size : 50px; background:red; text-shadow: 10px 10px 0 blue');

//warning!
console.warn('Danger!!!!!!!!!!!!!')

//Error
console.error('Hi, I am a friendly error');

//Info
console.info('Summer is toreable only because of dahi');

//Testing -- sends error if false, else sends nothing!
console.assert(1===2 , 'That is wrong');

//clearing
console.clear();

//Viewing DOM element
const p =  document.querySelector('p');
console.log(p);
console.dir(p);

console.clear();

//Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age *7} dog years old`);
    console.groupEnd(`${dog.name}`)
})

//counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/eternal-moon')
 .then(data => data.json())
 .then(data => {
     console.timeEnd('fetching data');
     console.log(data) 
    });