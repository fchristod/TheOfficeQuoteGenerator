var button = document.getElementById("generate");

var quotes = ["Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
"I talk a lot, so I’ve learned to tune myself out.", "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", 
"I’m not superstitious, but I am a little stitious.", "If I don’t have some cake soon, I might die.", "The worst thing about prison was the dementors.",
"Identity theft is not a joke, Jim! Millions of families suffer every year.", "Today, smoking is going to save lives.", 
"I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.", "I am running away from my responsibilities. And it feels good.",
"Oh, it is on, like a prawn who yawns at dawn.", "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.",
"I don't care what they say about me. I just want to eat.", "I stopped caring a long time ago.", "Sorry I annoyed you with my friendship.",
"I love my employees even though I hit one of you with my car.", "Bread is the paper of the food industry. You write your sandwich on it.",
"I am about to do something very bold in this job that I’ve never done before: try.", "I know a few things about love. Horrible, terrible, awful, awful things.",
"I'm not saying I had a meteoric rise, but I did."];

var people = ["Michael Scott", "Kelly Kapoor", "Michael Scott", "Michael Scott", "Stanley Hudson", "Michael Scott", "Dwight Schrute", "Dwight Schrute",
 "Kevin Malone", "Michael Scott", "Andy Bernard", "Jim Halpert", "Pam Beesly", "Creed Bratton", "Andy Bernard", "Michael Scott", "Dwight Schrute", "Jim Halpert",
"Andy Bernard", "Ryan Howard"];

var images = ["scott.jpg", "kapoor.jpg", "scott.jpg", "scott.jpg", "hudson.jpg", "scott.jpg", "schrute.jpg", "schrute.jpg", "malone.jpg", "scott.jpg", "andy.jpg",
"jim.jpeg", "pam.jpg", "creed.jfif", "andy.jpg", "scott.jpg", "schrute.jpg", "jim.jpeg", "andy.jpg", "ryan.jpg"];

function createQuoteByClick(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var quote = document.getElementById("textquote").innerHTML = quotes[randomQuote]; 
    var character = document.getElementById("characterquote").innerHTML = people[randomQuote];
    document.getElementById("images").src = images[randomQuote];
}

button.addEventListener("click", createQuoteByClick);
