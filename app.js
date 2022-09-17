// let arr = [];

// arr.push('bold');
// arr.push('italic');
// arr.push('serif');

// let name = 'kareem'
// console.log(name.toUpperCase());

// for (arrays of arr){
//     console.log(arrays);
// }

// arr.pop()

// console.log(arr);

// for(let i=1; i < 10; i++){
//     for(let j = 1; j <= 12; j++){
//         var result = `The value of ${i}* ${j} = ${i*j}`
//         console.log(result);  
//     }
// }

// let mult = document.querySelector('.name')
// console.log(mult);

// mult.textContent = result

// class creation   

// class Animal{
//     constructor(legs,head,color,power){
//         this.legs = legs;
//         this.head = head;
//         this.color = color;
//         this.power =power
//     }

//     haspower(){
//         console.log(this.power + 10);
//     }
// }
// class Bird extends Animal{
//     constructor(wings,legs,head,color,power){
//         super(legs,head,color,power);
//         this.wings = wings
//     }
// }
// const eagle = new Bird(2,2,1,'black',70)

// const dog = new Animal(4,1,'red',100)

// console.log(dog.haspower());
// console.log(dog);
// console.log(eagle);
// console.log( eagle.haspower());

// object oriented programming

// const house = {}

// // dot notation 
// house.door =  2;
// house.window = 5;
// console.log(house);
// // bracket notation 
// house['number of tiles'] = 200

// console.log(house);


// const member = 'hanliyah';
// console.log(member.split('a').length);
// console.log(member.length);
const product = [
   
    {
       img: 'product-02.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-03.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-04.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-05.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-06.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-07.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-08.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-09.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-10.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-11.jpg' ,
       product: 'product 3'
    },
  
    {
       img: 'product-15.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-16.jpg' ,
       product: 'product 3'
    },
    {
       img: 'product-17.jpg' ,
       product: 'product 3'
    },
];

const songs = [
   {
      music : 'music2.mp3'
   },
   {
      music : 'music3.mp3'
   }
]
const img = document.getElementById('mage');
const para = document.getElementById('p');
const btns = document.querySelectorAll('.btn');
const audio = document.getElementById('music')
console.log(audio);
// const num =document.querySelector('.num')
 let item = 0
// console.log(product[item].img);

function showProduct(e){
    const currentBtn = e.currentTarget

    const increase = currentBtn.classList.contains('next-btn');
    const decrease = currentBtn.classList.contains('prev-btn');
   
    const curent = product[item].img;
    const mp = songs[item].music
     audio.src = mp
    // para.textContent = product[item].product
    img.src = curent
    if(increase){

        item++
        if(item > product.length-1){
            // btn.textContent ='end'
            item = 0;
        }
    }
    if(decrease){
        
        item--
        if(item < 0){
            // btn.textContent ='end'
            item = product.length-1;
        }
       
    }
    
    
}
btns.forEach(function(btn){

    btn.addEventListener('click',showProduct)
})
    
;
var myString = `i'm really hungry for some`
var food = ['cheese','rice ','beans','biscuit']
let text = ''
for(i=0; i < food.length; i++){
  text += `${myString} ${food[i]} <br/>`
}
console.log(text);