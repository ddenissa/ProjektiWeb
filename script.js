let navbar = document.querySelector('.navbar');

document.querySelector('#login-btn').onclick = ()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = ()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function validoMeRegex(){

    var email = document.getElementById('em1').value;
    var password = document.getElementById('pw1').value;

    var regexEMAIL = /^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.(com|net)$/; // email duhet te startoj me shkronje dhe ka @ dhe ends .com .net
    var regexPASSWORD = /^[A-Z][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{6,}$/; // min 7 karaktere, karakteri i pare me uppercase dhe te kete 1nr dhe 1specchar

    if(regexEMAIL.test(email)){
        console.log("Email eshte mire")
    }
    else{
        alert("Email eshte gabim!!!")
    }
    if(regexPASSWORD.test(password)){
        console.log("Password eshte mire")
    }
    else{
        alert("Password eshte gabim!!!")
    }

    console.log(email);
    console.log(password);
}