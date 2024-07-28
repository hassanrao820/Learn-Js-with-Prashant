let noOfTimesClicked = localStorage.getItem('noOfTimesClicked') || 0; 
function press(){
    noOfTimesClicked ++;
    localStorage.setItem('noOfTimesClicked', noOfTimesClicked);
    updateButton();
}

function updateButton(){
    let myButton = document.querySelector('#btn');
    if(noOfTimesClicked % 2 === 0){
        myButton.classList.add('js-even');
        myButton.classList.remove('js-odd');
    }
    else{
        myButton.classList.add('js-odd');
        myButton.classList.remove('js-even');
    }
    myButton.innerText = noOfTimesClicked;
}
updateButton();
