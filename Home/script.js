/*
let menu_responsive = document.querySelector('.menu_responsive');
let weather = document.querySelector('.home');
let faq = document.querySelector('.faq');
let menu_toggle = 0;
menu_responsive.addEventListener('click', function(e) {
    if (menu_toggle%2==1) {
        faq.style.opacity=0;
        faq.style.pointerEvents="none";
        setTimeout(function(){
            faq.style.display="none";
        },500);
        setTimeout(function(){
            weather.style.opacity=0;
            weather.style.pointerEvents="none";
            setTimeout(function(){
                weather.style.display="none";
            },400);
        },500);
    } 
    else {
        weather.style.display="flex";
        setTimeout(function(){
            weather.style.opacity=1;
            weather.style.pointerEvents="auto";
        },300);
        setTimeout(function(){
            faq.style.display="flex";
            setTimeout(function(){
                faq.style.opacity=1;
                faq.style.pointerEvents="auto";
            },100);
        },400);
    }
    menu_toggle = menu_toggle + 1;
});*/

let quote = document.querySelector('.main_first_content_quote');
let isi_quote = '"'+"Life is like the weather, constantly changing and unpredictable. But just like the sun breaks through the clouds after a storm, we too can find strength and resilience amidst life's challenges. Let our weather prediction guide us, not only to plan our days, but to embrace the beauty of adaptability and seize every opportunity that comes our way."+'"';
let i = 0;
function typing() {
  if (i < isi_quote.length) {
    quote.innerHTML += isi_quote.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
setTimeout(typing,1000);


let input_city = document.querySelector('.input_city');
let temp = document.querySelector('.temperature_content');
let wind = document.querySelector('.wind_content');
let sky = document.querySelector('.sky_content');
let city = document.querySelector('.city_name');
let kaca_pembesar = document.querySelector('.kaca_pembesar');
let weather_symbol = document.querySelector('.weather_symbol');
let day_night = document.querySelector('.day_night_content');
fetch('https://api.openweathermap.org/data/2.5/weather?q=San+Jose&appid=67064748dfc32cdfdb2a012db36bd704')
.then(res => res.json())
.then(data => 
{
    let city_name = data['name'];
    let data_sky = data['weather']['0']['description'];
    let data_temp = data['main']['temp'];
    let data_wind = data['wind']['speed'];
    city.innerHTML=`${city_name}`;
    temp.innerHTML = `${(data_temp-273).toFixed(2)}`;
    sky.innerHTML = `${data_sky}`;
    wind.innerHTML = `${data_wind}`;
    weather_symbol.src='https://openweathermap.org/img/wn/'+data['weather']['0']['icon']+'.png';
    if(data['weather']['0']['icon'][2]=='n')day_night.innerText="Night";    
    else day_night.innerText="Day";
})
.catch(err => alert('You entered Wrong city name'));
input_city.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_city.value+'&appid=67064748dfc32cdfdb2a012db36bd704')
        .then(res => res.json())
        .then(data => 
        {
            let city_name = data['name'];
            let data_sky = data['weather']['0']['description'];
            let data_temp = data['main']['temp'];
            let data_wind = data['wind']['speed'];
            city.innerHTML=`${city_name}`;
            temp.innerHTML = `${(data_temp-273).toFixed(2)}`;
            sky.innerHTML = `${data_sky}`;
            wind.innerHTML = `${data_wind}`;
            weather_symbol.src='https://openweathermap.org/img/wn/'+data['weather']['0']['icon']+'.png';
            if(data['weather']['0']['icon'][2]=='n')day_night.innerText="Night";    
            else day_night.innerText="Day";
        })
        .catch(err => alert('You entered wrong city name'));
        input_city.value="";
        //alert(new Date().toLocaleString("en-US", { timeZone: "Jakarta" }));
    }
});

let plus = document.querySelectorAll('.plus');
let section_content = document.querySelectorAll('.section_content');
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        plus[i].classList.toggle('plus_rotate');
        section_content[i].classList.toggle('section_content_show');
    });
}

let element = document.querySelectorAll('.element');
window.addEventListener('scroll',function(){
    let trigger = window.innerHeight * 0.85;
    for(let i=0;i<element.length;i++){

        let top_element = element[i].getBoundingClientRect().top;
        if(top_element<trigger){

            element[i].classList.add('element_present');
        }
        else{
            element[i].classList.remove('element_present');

        }
    }
});


/*
let faq_section = document.querySelector('.faq');
let jwb = document.querySelector('.jwb');
let nanya = document.querySelector('.nanya');
let count =0;
nanya.addEventListener('click',function(e){
    if(count%2==0){
        jwb.style.opacity=1;
        jwb.style.display="flex";
    }
    else{
        jwb.style.opacity=0;
        jwb.style.display="none";
    }
    count = count+1;
});*/
