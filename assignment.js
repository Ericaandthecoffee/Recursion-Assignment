//Leap Year Checker

function leapYear(year){
    if(year% 400===0){
       return `${year} is a leap year`;
    }else if(year% 100===0){
        return `${year} is not a leap year`;
    }else if(year% 4 ===0){
        return `${year} is a leap year`;
    }else{
        return `${year} is not a leap year`;
    }
}
console.log(leapYear(2024));
console.log(leapYear(2017));
console.log(leapYear(2002));

//Ticket Pricing

function ticketPrice(age){
    if(age < 0){
        return "Invalid Age";
    }else if(age <= 12){
        return "Ticket price: $10 ";
    }else if(age <=17){
        return "Ticket price: $15";
    }else{
        return "Ticket price: $20";
    }
}

console.log(ticketPrice(10));
console.log(ticketPrice(20));
console.log(ticketPrice(15));

//Fibonacci Function

function fibonacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci(n-1)+ fibonacci(n-2);
}
console.log("Fibonacci:", fibonacci(6));

//Palidrome Function

function isPalidrome(str){
    str =str.toLowerCase().replace(/[^a-z0-9]/g, '');

    function check(left, right){
        if(left >= right){
            return true;
        }
        if (str[left] !== str[right]){
            return false;
        }

        return check(left + 1, right -1);
    }
    return check(0, str.length - 1);
}

console.log("Palidrome:", isPalidrome("peep"));
console.log("Palidrome:", isPalidrome("civic"));
console.log("Palidrome:", isPalidrome("race car!"));
console.log("Palidrome:", isPalidrome("tomorrow"));