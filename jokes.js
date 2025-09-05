let button = document.getElementsByClassName("btn")[0];
let firstdiv = document.createElement('h3');
firstdiv.style.marginTop = '100px';firstdiv.style.marginLeft = '350px';
const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Why did the math book look so sad? Because it had too many problems.",
  "Parallel lines have so much in common… it's a shame they'll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "I used to play piano by ear, but now I use my hands.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? It was two-tired.",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Why can't your nose be 12 inches long? Because then it would be a foot.",
  "I asked the librarian if books about paranoia were available. She whispered, 'They're right behind you.'",
  "Why don't oysters donate to charity? Because they're shellfish.",
  "How does a penguin build its house? Igloos it together.",
  "Why can't you give Elsa a balloon? Because she will let it go.",
  "I burned 1200 calories yesterday… I forgot the pizza in the oven.",
  "What do you call a dog magician? A labracadabrador.",
  "Why did the computer go to the doctor? Because it caught a virus.",
  "I asked my dog what's two minus two. He said nothing."
];
let jokesIndex = Math.floor(Math.random() * jokes.length);
