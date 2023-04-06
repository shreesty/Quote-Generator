
let btn=document.querySelector('.new-quote');
let quote=document.querySelector('.Quote');
let person=document.querySelector('.Person')

let quotes=[
    {
    
    quote:`"The only way to do great work is to love what you do."`,
    person:`- Steve Jobs`
    },

    {
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person:`- Winston Churchill`
    },
    {
    quote:`"I have not failed. I've just found 10,000 ways that won't work"`,
    person:`- Thomas Edison`
    },
    {
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person:`- Confucius`
    },
    {
    quote:`"Believe you can and you're halfway there."`,
    person:`- Theodore Roosevelt`
    },
    {
    quote:`"If you want to live a happy life, tie it to a goal, not to people or things"`,
    person:`- Albert Einstein`
    },
];

    btn.addEventListener('click',function()
    {

        randomNo=Math.floor(Math.random()* quotes.length);
        // console.log(randomNo);
        
        quote.innerText=quotes[randomNo].quote;
        person.innerText=quotes[randomNo].person

    })