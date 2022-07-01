// import {clg } from '../src/components/resurses/component.js';
const name_serv = `./name_serv.json`;
const data_url = './data.json';

// добавляем кару
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 2,
    controls: [],
  });

  let createPlacemark = function (
    markerId,
    coord_1,
    coord_2,
    markerImage,
    name,
    addr
  ) {
    markerId = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [+coord_1, +coord_2],
        },
        properties: {
          hintContent: name,
          balloonContent: addr,
        },
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: markerImage,
        // Размеры метки.
        iconImageSize: [26, 26],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );

    myMap.geoObjects.add(markerId);
  };

   fetch(name_serv)
    .then((resp) => resp.json())
    .catch(function () {
      alert("Нет доступа к серверу");
    })
    
    .then((json) => {

      let grean = './icon/grean.svg';
      let grey  = './icon/grey.svg';
      let yellow = './icon/yellow.svg';
      let red = './icon/red.svg';

      let dot1 = 0;
      let dot2 = 0;
   
      for (let i = 0; i < json.length; i++) {
        dot1 = json[i].geo1;
        dot2 = json[i].geo2;
         
          if(json[i].numberOfConnections < 15){
            createPlacemark("myPlacemark_1",`${dot1}`,`${dot2}`,`${grean}`, `${json[i].name }, ${json[i].status }, количество подключений, ${json[i].numberOfConnections }`)
            rightSide(json[i].name, json[i].Uptime, json[i].numberOfConnections );
        
          } else if
          (json[i].numberOfConnections < 20 && json[i].numberOfConnections > 15){
            createPlacemark("myPlacemark_1",`${dot1}`,`${dot2}`,`${yellow}`, `${json[i].name }, ${json[i].status }, количество подключений, ${json[i].numberOfConnections }`)
            rightSide(json[i].name, json[i].Uptime, json[i].numberOfConnections );
          }else if
          (json[i].numberOfConnections < 30 && json[i].numberOfConnections > 20){
            createPlacemark("myPlacemark_1",`${dot1}`,`${dot2}`,`${grey}`, `${json[i].name }, ${json[i].status }, количество подключений, ${json[i].numberOfConnections }`)
            rightSide(json[i].name, json[i].Uptime, json[i].numberOfConnections );
          }
          else if
          (json[i].numberOfConnections < 40 && json[i].numberOfConnections > 30){
            createPlacemark("myPlacemark_1",`${dot1}`,`${dot2}`,`${red}`, `${json[i].name }, ${json[i].status }, количество подключений, ${json[i].numberOfConnections }`)
            rightSide(json[i].name, json[i].Uptime, json[i].numberOfConnections );
          }
          
      }
        //  sd(json)  
       });


}
//правая сторона
function rightSide(a,b,c){
  let div = document.createElement('section');
  div.classList.add("wrapper");
 
  div.innerHTML = `<p>${a}</p><p>${b}</p><p>${c}</p>`;
  document.querySelector('.server__list').append(div);


}




// function sd(object){
//   console.log(object);
// }

//  Добавление списка снизу
let wrapper  = document.querySelectorAll('.wrapper');

 console.log(wrapper.length)

wrapper.addEventListener('click', (event) => {
  
  if(event.target && event.target.tagName === "P"){
//  for(let i=0;)

    fetch(data_url) 
    .then(response => response.json())
    .then(json => {

      dataPers(json)
    
    
    })
  }

  
//  console.dir(event.target);

})

function dataPers (data)  {

// console.log(data)
  
}