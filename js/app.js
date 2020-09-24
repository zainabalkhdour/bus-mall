// 'use strict'

// var names=[
//     'bag.jpg',
//     'banana.jpg',
//     'bathroom.jpg',
//     'boots.jpg',
//     'breakfast.jpg',
//     'bubblegum.jpg',
//     'chair.jpg',
//     'cthulhu.jpg',
//     'dog-duck.jpg',    
//     'dragon.jpg',
//     'logo.png',
//     'pen.jpg',    
//     'pet-sweep.jpg',
//     'scissors.jpg',
//     'shark.jpg',    
//     'sweep.png',
//     'tauntaun.jpg',
//     'unicorn.jpg',
//     'usb.gif',
//     'water-can.jpg',
//     'wine-glass.jpg'
// ];

// var ids=['left-image','centered-image','right-image'];


// const imgContainer=document.getElementById('selectImg');
// const leftImage=document.getElementById('left-image');
// const centeredImage=document.getElementById('centered-image');
// const rightImage= document.getElementById('right-image');


// Product.all=[];
// function Product(name,id){
//     this.name=name;
//     this.id=id;
//     this.path=`img/${this.name}`;
//     this.display=0;
//     this.select=0;
//     Product.all.push(this);
// }
// // generate the inforomation for object
// for (let i = 0; i < names.length; i++) {
//      new Product(names[i],ids[i]);
    
// }

// function render(){
// //to generate the random index
// let leftIndex=randomNumber(0,Product.all.length-1);
// let centeredIndex=randomNumber(0,Product.all.length-1);
// let rightIndex=randomNumber(0,Product.all.length-1);

// //no repeate
// while(leftIndex===rightIndex || leftIndex===centeredIndex){
//      leftIndex=randomNumber(0,Product.all.length-1);
// }
// while(centeredIndex===rightIndex){
//     centeredIndex=randomNumber(0,Product.all.length-1);

// }


// // generate the id 
// leftImage.id=Product.all[leftIndex].id;
// centeredImage.id=Product.all[centeredIndex].id;
// rightImage.id=Product.all[rightIndex].id;
// //to generate the photo path
// leftImage.src=Product.all[leftIndex].path;
// centeredImage.src=Product.all[centeredIndex].path;
// rightImage.src=Product.all[rightIndex].path;
// //to generate the alternative of image >> just as better practice and user experience
// leftImage.alt=Product.all[leftIndex].name;
// centeredImage.alt=Product.all[centeredIndex].name;
// rightImage.alt=Product.all[rightIndex].name;
// //to generate the title of image >> just as better practice and user experience
// leftImage.title=Product.all[leftIndex].name;
// centeredImage.title=Product.all[centeredIndex].name;
// rightImage.title=Product.all[rightIndex].name;
// }

// render();

// //helper function 
// function randomNumber(max,min){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }

// function resultsRender(){
//     ///writing the results that we got into artical section
//     // first linked the article with js 
//     const resultArticle=document.getElementById('results');
//     ///2 create table by  create element and then show this table chiled for whom
//     const resultTable=document.createElement('table');
//     resultArticle.appendChild(resultTable);
//     /// creating tr with two headings
//     const resultHeaderRaw=document.createElement('tr');
//     resultTable.appendChild(resultHeaderRaw);
//     const th1 =document.createElement('th');
//     resultHeaderRaw.appendChild(th1)
//     th1.textContent= 'item';
//     const th2 =document.createElement('th');
//     resultHeaderRaw.appendChild(th2)
//     th2.textContent='result';


// }
// resultsRender();
// ///creating an event listener for imagecontainer (div) ,,, remember we aleady link the container and get it byId above>>> and always with events we put function 

// imgContainer.addEventListener('click',clickHandler) /// cleckHandler is the populer name to handle the actions of clicking
// function clickHandler(event) {
//     new Product(names,ids);
    
//     if (Event.Target.id !== 'selectImg'){
//         console.log(Event.Target.id !== 'selectImg')
//         confirm ('click on images, please!');
//         for (let i = 0; i < Product.all.length; i++) {
//             if(event.target.alt === Product.all[i].name){
//                 Product.all[i].select++;

//             }
//             if (event.target.alt !== Product.all[i].name){
//                  Product.all[i].display++
//             }
//             /////creating tr  with tr for results
//             let continuousTr=document.createElement(tr);
//             resultTable.appendChild(continuousTr);
//             ///prodcut name cell
//             let productTd=document.createElement('td');
//             continuousTr.appendChild(productTd);
//             productTd.textContent=Product.all[i].name;
//             //product result cell
//             let resultTd=document.createElement('td');
//             continuousTr.appendChild(resultTd);
//             resultTd.textContent=`got clicked ${product.all[i].this.select} of ${Product.all[i].this.display} display times`;
            
//         }
//     }
// }


