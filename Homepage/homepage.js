function editStarRating(childElement){

    const childElementId = childElement.id;
    const childElementsList = childElement.parentElement.children;
    const childElementValue = childElement.innerHTML;
    const i = Number(childElementId.slice(childElementId.length-1));
    
    if(childElementValue == '\u2606'){//outline star
        for(let x = 0; x<i; x++){
            childElementsList[x].innerHTML = "&#9733;";
            childElementsList[x].style.color = "darkorange";
        }
    }
    else if(childElementValue == '\u2605'){//solid star
        for(let x = i-1; x<childElementsList.length; x++){
            childElementsList[x].innerHTML = "&#9734;";
            childElementsList[x].style.color = "initial";
        }
    }
    /*console.log(childElementValue);
    console.log(childElementsList);*/
}

let placeholderValue;

function inputFocus(inputElement){
    placeholderValue = inputElement.placeholder;
    inputElement.placeholder = "";
}

function inputBlur(inputElement){
    inputElement.placeholder = placeholderValue;
}