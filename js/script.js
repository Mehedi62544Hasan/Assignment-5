
const clickButton = document.getElementsByClassName('select-btn');
for(let button of clickButton){
    button.addEventListener('click', function(event){
        const playersName = event.target.parentNode.children[0].innerText;
        const buttonDisabled = event.target.parentNode.children[2];
        
        const olContainer = document.getElementById('ol-container');
        const li = document.createElement('li');
        li.innerText = playersName;
        // const olContainers = document.getElementsByTagName('li').length`
        const olContainers = document.querySelector('#ol-container');
        // console.log(olContainers.children.length)
        const item = olContainers.children.length;
        if(item >='5'){
            alert('Sufficient quentity selected')
            return;
        }
        olContainer.appendChild(li)
        buttonDisabled.setAttribute('disabled', '')
    })
}

// Function for field value
function getFieldValueById(elementId){
    const elements =document.getElementById(elementId);
    const elementString = elements.value;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

// Function for text value
function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
// Set element value
function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// Calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){
        const playerFild = getFieldValueById('PerPlayer-field')
        const playerQuentity = playerFild * 5;
        if(isNaN(playerFild)){
            alert('Invalid Input')
            return;
        }
        setElementValue('expense-text', playerQuentity)
})

// Calcutate Total Button
document.getElementById('calculateTotal-btn').addEventListener('click', function(){
    const managerValue = getFieldValueById('maneger-field');
    const  feeMony = getFieldValueById('couch-field');
    const playerQuentityValue = getTextValueById('expense-text');
    const totalPayMony = playerQuentityValue + managerValue +  feeMony;
    if(isNaN(managerValue)){
        alert('Invalid Input')
        return;
    }
    else if(isNaN( feeMony)){
        alert('Invalid Input')
        return;
    }
    
    setElementValue('total-text', totalPayMony)

})