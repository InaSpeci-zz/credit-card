/** Constants */
const dt = new Date(); 

/** Helping functions */
function getYearTwoLastDigit() {
    return ('' + dt.getFullYear()).substr(2);
}

function verifyExpiryDate() {
    let expMonth = document.forms["checkoutForm"]["expMonth"].value;
    let expYear = document.forms["checkoutForm"]["expYear"].value;

	let dateStatus = true;
    if(expMonth !== null && expYear !== null) {
        let month = +expMonth;
        let year = +expYear;
        if( !isNaN(month) && !isNaN(year)) {
            dateStatus = checkDate(month, year);
        }else {
            dateStatus = false;
            alert("Month and/or date must be in numeric format!");
        }
    }

    return dateStatus;
}

function checkDate(expMonth, expYear) {
    let isNotExpired = true;
    
    if(1 <= expMonth && expMonth <= 12) {
        if((expYear > getYearTwoLastDigit())) {
            isNotExpired = true;
        }else if(expYear == getYearTwoLastDigit()) {
            if(expMonth > (dt.getMonth() + 1)) {
                isNotExpired = true;
            }else{
                isNotExpired = false;
                alert("Your card is expired!");
            }
        }else {
            isNotExpired = false;
            alert("Your card is expired!");
        }
    }else {
        isNotExpired = false;
        alert("Month value must range from 1 to 12!");
    }
	return isNotExpired;
}

function verifyCCV() {
    let ccv = +document.forms["checkoutForm"]["ccv"].value;
    let isCCVNumber = true;

    if(isNaN(ccv)) {
        isCCVNumber = false;
        alert("CCV must be a number!");
    }

    return isCCVNumber;
}

function verifyCardNumber() {
    let card = +document.forms["checkoutForm"]["cardNumber"].value;
    let isCardNumber = true;

    if(isNaN(card)) {
        isCardNumber = false;
        alert("Card must be a number!");
    }

    return isCardNumber;
}

/** Main functions */
function validateForm() {
    // checks until all fields are filled to acitvate "Pay button"
    let f = document.forms["checkoutForm"].elements;
    let canSubmit = true;

    for (let i = 0; i < f.length; i++) {
        if (f[i].value.length === 0) {
            canSubmit = false;
        }
    }

    document.getElementById('paymentSubmit').disabled = !canSubmit;
}

function submitForm() {
    // checks card expiry and payment result
    let expiryValue = verifyExpiryDate();
    let isCCVNumber = verifyCCV();
    let isCardNumber = verifyCardNumber();

    if(expiryValue && isCCVNumber && isCardNumber) {
        alert("You already pressed the payment button once. You can't do it twice!");
        window.open('http://localhost/test/views/success.html');
    }
}

window.onload = validateForm();




