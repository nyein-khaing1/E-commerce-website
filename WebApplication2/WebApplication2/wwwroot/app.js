const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.menu');
const navLogo = document.querySelector("#logo");

const basketCount = document.getElementById('basket_count');
let itemCount ;

// Function to add an item to the basket
function addItemToBasket() {
    itemCount++;
    basketCount.textContent = itemCount;
}

// Attach click event to the "Basket" link
const basketLink = document.getElementById('basket_page');
basketLink.addEventListener('click', addItemToBasket);


//Display mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);


// CLOSE MOBILE MENU 
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);





/*skincare annimation */
var img = document.getElementById('sk1');
var originalWidth = img.width;
var increaseWidth = originalWidth;

function enlargeImage(){
    increaseWidth++;
    img.style.width = increaseWidth + 'px';

        
}
img.addEventListener('click', ()=>{
    timer = setInterval(enlargeImage, 6);
});



function enlargeImage(){
    increaseWidth++;
    img.style.width = increaseWidth + 'px';

    if (increaseWidth==250){
    clearInterval(timer);
    increaseWidth = originalWidth;
    }
};

var sk2 = document.getElementById('sk2');
var originalsk2Width = sk2.width;
var increasesk2Width = originalsk2Width;

function enlargesk2Image(){
    increasesk2Width++;
    sk2.style.width = increasesk2Width + 'px';

        
}
sk2.addEventListener('click', ()=>{
    timer = setInterval(enlargesk2Image, 6);
});



function enlargesk2Image(){
    increasesk2Width++;
    sk2.style.width = increasesk2Width + 'px';

    if (increasesk2Width==250){
    clearInterval(timer);
    increasesk2Width = originalsk2Width;
    }
};

var sk3 = document.getElementById('sk3');
var originalsk3Width = sk3.width;
var increasesk3Width = originalsk3Width;

function enlargesk3Image(){
    increasesk3Width++;
    sk3.style.width = increasesk3Width + 'px';

        
}
sk3.addEventListener('click', ()=>{
    timer = setInterval(enlargesk3Image, 6);
});



function enlargesk3Image(){
    increasesk3Width++;
    sk3.style.width = increasesk3Width + 'px';

    if (increasesk3Width==250){
    clearInterval(timer);
    increasesk3Width = originalsk3Width;
    }
};






/*makeup annimation */
var avatar = document.getElementById("foundation");
var orgWidth = avatar.width;
var incWidth = orgWidth;

function enlarImage(){
    incWidth++;
    avatar.style.width = incWidth + 'px';
}

avatar.addEventListener('click', ()=>{
    timer = setInterval(enlarImage, 6);
});

function enlarImage(){
    incWidth++;
    avatar.style.width = incWidth + 'px';

    if (incWidth==250){
        clearInterval(timer);
        incWidth = orgWidth;
    }
}


var avata = document.getElementById("lipstick");
var oWidth = avata.width;
var iWidth = oWidth;

function enlaImage(){
    iWidth++;
    avata.style.width = iWidth + 'px';
}

avata.addEventListener('click', ()=>{
    timer = setInterval(enlaImage, 6);
});

function enlaImage(){
    iWidth++;
    avata.style.width = iWidth + 'px';

    if (iWidth==250){
        clearInterval(timer);
        iWidth = oWidth;
    }
}

var third = document.getElementById("powder");
var org3Width = third.width;
var enlargeWidth = org3Width;

function enImage(){
    enlargeWidth++;
    third.style.width = enlargeWidth + 'px';
}

third.addEventListener('click', ()=>{
    timer = setInterval(enImage, 6);
});

function enImage(){
    enlargeWidth++;
    third.style.width = enlargeWidth + 'px';

    if (enlargeWidth==250){
        clearInterval(timer);
        enlargeWidth = org3Width;
    }
}


var fourthImg = document.getElementById("bronzer");
var normalWidth = fourthImg.width;
var enWidth = normalWidth;

function eImage(){
    enWidth++;
    fourthImg.style.width = enWidth + 'px';
}

fourthImg.addEventListener('click', ()=>{
    timer = setInterval(eImage, 6);
});

function eImage(){
    enWidth++;
    fourthImg.style.width = enWidth + 'px';

    if (enWidth==250){
        clearInterval(timer);
        enWidth = normalWidth;
    }
}



/*registration page */


let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let username = id('name');
let email = id('email');
let password = id('password');
let forms = id('form');
let errorMsg = classes('error');
let successIcon = classes("success-icon");
let failIcon = classes("failure-icon");

forms.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    engine(email, 1, "Email cannot be blanked");
    engine(username, 0, "Username cannot be blanked");
    engine(password, 2, "Password cannot be blanked");

});

let engine=(id, serial, message) =>{
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        failIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].innerHTML = " ";
        failIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

var fullName = document.getElementById('name');

fullName.addEventListener('input',function(){
    localStorage.setItem('name', fullName.value);
},false);

fullName.value = localStorage.getItem('name');


var eMail= document.getElementById('email');

eMail.addEventListener('input',function(){
    localStorage.setItem('email', eMail.value);
},false);

eMail.value = localStorage.getItem('email');

var passWord= document.getElementById('password');
passWord.addEventListener('input',function(){
    localStorage.setItem('password', passWord.value);
},false);

passWord.value = localStorage.getItem('password');



// darkmode

toggleCheckbox = document.querySelector('input[type="checkbox"]')
toggleCheckbox.addEventListener('change', function(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark' )
        localStorage.setItem('theme', 'dark')
        
    } else{
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
    }
})


currentTheme = localStorage.getItem('theme')
if(currentTheme != null ){
    document.documentElement.setAttribute('data-theme', currentTheme)
    if(currentTheme == 'dark'){
        toggleCheckbox.checked= "true";
    }
}


//font size changing


toggleRadio= document.querySelector('input[type="radio"]')
toggleRadio.addEventListener('change', function(events){
    if(events.target.checked){
        document.documentElement.setAttribute('data-theme','big' )
        localStorage.setItem('font-size', 'big')
        
    } 

})

currentFontsize = localStorage.getItem('font-size')

