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
function updateimages(){
    imageRender(leftImg); 
    imageRender(centeredImg);
    imageRender(rightImg);

}

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
        updateimages();
        let index=  indexRender();
        img.src=productArray[index].path;
        img.alt=productArray[index].name;
        img.title=productArray[index].name;
        productArray[index].display++;
    }
    


    //
    //event.target.id >> the id of the place we are clicking on(event.target.id !== imageContainer.id)
    
    

    
    imageContainer.addEventListener('click', clickhandler);
    let round = 25; 
                    indexRender();
                    imageRender();
                    updateimages();
    function clickhandler(event) {
        if (event.target.id !== 'selectImg') { 
            round--;
            if (round === 0) {
                imageContainer.removeEventListener('click',clickhandler);
                resultRender();
                chartRender();
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
//-------------------------------------------------------------------------------------------------------------
//canvas chart 
function chartRender(){
  
 let barChart=document.getElementById('barChart').barChart.getcontext('2d');
 console.log(barChart);
 let selectArr=[];
 let displayArr=[];
 let nameArr=[];
  for(i=0;i<productArray.length;i++){
      nameArr.push(productArray[i].name);
      selectArr.push(productArray[i].select);
      displayArr.push(productArray[i].display);
  }
    tooo=new ChartData('barChart',{
         type:'bar',
         data: {
            labels: nameArr,
            datasets: [{
                label: '# of select ',
                data: selectArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'


       
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

        

                ],
                borderWidth: 1
            }],
            datasets: [{
                label: '# of dis play ',
                data: displayArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'


       
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

        

                ],
                borderWidth: 1
            }]

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    
    }


//----------------------------------------------------------------------------------------------------------------

function setStorageProducts(){
    let productArrayData= JSON.stringify(productArray);
    console.log(productArrayData);
    localStorage.setItem('products',productArrayData);
}

function getProductStorage(){
    let productArrayData=localStorage.getItem('products');
    newProductArray=JSON.parse(productArrayData);


    if(newProductArray){
        for(let i=0;i<productArray.length;i++){
            new product(
                newProductArray[i].name,
                newProductArray[i].extention,
                newProductArray[i].path,
                newProductArray[i].select,
                newProductArray[i].display,

            
            )
        }
    }
    resultRender();
}
setStorageProducts();
getProductStorage();
