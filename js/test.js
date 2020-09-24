'use strict';

//declearing photo in js

let leftImg = document.getElementById('left-image');
let centeredImg = document.getElementById('centered-image');
let rightImg = document.getElementById('right-image');
let imageContainer = document.getElementById('selectImg');
let ulEl = document.getElementById("results");


let fullNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'logo.png', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']


console.log(fullNames);


let productArray = [];
function product(name) {

    this.name = name.split(".")[0];
    this.extention = name.split(".")[1];
    this.path = `img/${this.name}.${this.extention}`;
    this.select = 0;
    this.display = 0;
    productArray.push(this);

}
console.log(productArray)
//----------------------------------------------------------------------------------------------------
//generating object
function objectRender() {
    for (let i = 0; i < fullNames.length; i++) {
        new product(fullNames[i]);

    }
}
objectRender();
console.log(product)

//------------------------------------------------------------------------------------------------------
//generate random number

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---------------------------------------------------------------------------------------------------------
let indexArr=[];
function indexRender() {
    let index;
    do{
        index=randomNumber(0,productArray.length-1);
        }while(indexArr.includes(index))
           indexArr.push(index); 

           
           if (indexArr.length>3){
               indexArr.splice(0,3);
               
                     
    }
     return index; 
}

    function imageRender(img){
        const index=  indexRender();
        img.src=productArray[index].path;
        img.alt=productArray[index].name;
        img.title=productArray[index].name;
        productArray[index].display++;
    }

    function updateimages(){
        imageRender(leftImg); 
        imageRender(centeredImg);
        imageRender(rightImg);

    }
    updateimages();


    //
    //event.target.id >> the id of the place we are clicking on(event.target.id !== imageContainer.id)
    
    

    
    imageContainer.addEventListener('click', clickhandler);
    let round = 25; 
                      indexRender();
                    imageRender(img);
                    updateimages();
    function clickhandler(event) {
        if (event.target.id !== 'selectImg') { 
            round--;
            if (round === 0) {
                imageContainer.removeEventListener('click',clickhandler);
                resultRender();
            }else {
         
            for (let i = 0; i < 1; i++) {
                if (event.target.title === productArray[i].name) {
                    productArray[i].select++;
 
                } 
    
    
    
    
            }
        }
    
    }
    else {  alert('select one of the photo,please!')}
    }

    ///-------------------------------------------------------------------------------------------------------
    function resultRender() {
    for (let i = 0; i < productArray.length; i++) {
        
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${productArray[i].name} had been selected ${productArray[i].select} and shown ${productArray[i].display}`;

    }
   
}
