const form = document.querySelector("form"),
nField = form.querySelector(".name"),
nInput = nField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".phone"),
pInput = pField.querySelector("input"),
bField = form.querySelector(".button_area"),
bInput = bField.querySelector("button");

form.onsubmit = (e) =>{
    e.preventDefault();
    if(nInput.value==''){
        nField.classList.add("error");
    }
    else{
        checkName();
    }
    if(eInput.value==''){
        eField.classList.add("error");
    }
    else{
        checkEmail();
    }
    if(pInput.value==''){
        pField.classList.add("error");
    }
    else{
        checkPhone();
    }

    nInput.onkeyup = () =>{
        checkName();
    };

    function checkName(){
         let pattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
        if(!nInput.value.match(pattern)){
            nField.classList.add("error");
            let errorTxt = nField.querySelector(".error-txt");
            (nInput.value != "")? errorTxt.innerText = "Enter Full Name!": errorTxt.innerText= "Name is required";

        }
        else{
            nField.classList.remove("error");
        }
    }

    eInput.onkeyup = () =>{
        checkEmail();
    };

    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "")? errorTxt.innerText = "Enter a valid Email!": errorTxt.innerText= "Email is required";
        }
        else{
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = () =>{
        checkPhone();
    };

    function checkPhone(){
         let pattern = /^[0-9]{10}$/;
        if(!pInput.value.match(pattern)){
            pField.classList.add("error");
            let errorTxt = pField.querySelector(".error-txt");
            (pInput.value != "")? errorTxt.innerText = "Enter 10 digits!": errorTxt.innerText= "Phone is required";
        }
        else{
            pField.classList.remove("error");
        }
    }

    if(!nField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")){
        alert("Thank you for your submission!");
        window.location.href="meeting.html";
    }
    else{
        alert("Please fill in all the required fields as asked!");
    }

};