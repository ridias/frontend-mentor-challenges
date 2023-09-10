let inputs = document.getElementsByClassName("intro-component-signup-form-field-input")
let textErrors = document.getElementsByClassName("field-error")

let map = {
    "firstname": 0,
    "lastname": 1,
    "emailval": 2,
    "passwordval": 3
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].children[0].addEventListener("keyup", function(event){
        let id = event.target.id;
        let val = event.target.value;
        let parent = event.target.parentElement;
        if(val.length == 0){
            textErrors[map[id]].setAttribute("class", "field-error show");
            //parent.children[1].style.display = "block";
        }else{
            textErrors[map[id]].setAttribute("class", "field-error");
            //parent.children[1].style.display = "none";
        }
    })
}