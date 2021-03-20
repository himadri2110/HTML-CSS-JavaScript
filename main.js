function generate() {
    
    var random = quotes[Math.floor(Math.random()*10)];

    document.getElementById("display").innerHTML = random;
}

var quotes = [
    
    "Successful people are not gifted; they just work hard, then succeed on purpose.",

    "Good Friends Are Hard to Find, Difficult to Leave, Impossible to Forget.",

    "The size of your problems is nothing compared with your ability to solve them. Dont overestimate your problems and underestimate yourself.",
    
    "Every flower is a soul blossoming in nature.",

    "Life is like a steering wheel, it only takes one small move to change your entire direction.",

    "The only easy day was yesterday.",

    "Success is only meaningful and enjoyable if it feels like your own.",

    "True friends are never apart. Maybe in distance, but not in heart.",

    "You will never know what you are capable of until you take that first step and go for it.",

    "The road to success is not easy to navigate, but with hard work, drive and passion, it's possible to achieve the American dream.",
    
];