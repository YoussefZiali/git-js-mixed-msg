
const phrasesStart = [
    "Good morning!",
    "Rise and shine!",
    "A new day begins!"
    // Add more morning-related phrases as needed
];
const phrases = [
    "The sun is new each day.",
    "Prayer is the key of the morning and the bolt of the evening.",
    "I like my coffee black and my mornings bright.",
    "Today s goals: Coffee and kindness.",
    "An early-morning walk is a blessing for the whole day.",
    "If you re changing the world, you re working on important things."
    // Add more morning-related phrases as needed
];
const action = [
    "let get some cofee.",
    "shall we do some workout.",
    // Add more morning-related phrases as needed
];

function randomStart (){

  const random = Math.floor(Math.random() * phrasesStart.length);
  return phrasesStart[random];


}
function randomPhrase (){

    const random2 = Math.floor(Math.random() * phrases.length);
  
    return phrases[random2];
  
  }
  function randomAction (){

    const randomAction = Math.floor(Math.random() * action.length);
  
    return action[randomAction];
  
  }
  const morningQuote = `${randomStart()} ${randomPhrase()} ${randomAction()}`;

console.log(morningQuote);