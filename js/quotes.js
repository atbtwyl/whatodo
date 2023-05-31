const quotes = [
    {
        quotes: "Attract them by the way you live.",
        author: "Saint Augustine",
    },
    {
        quotes: "Work hard in silence, let your success be your noise.",
        author: "Anonymous",
    },
    {
        quotes: "Make it happen now, not tomorrow. Tomorrow is a loser's excuse.",
        author: "Farrah Gray",
    },
    {
        quotes: "If you can't do great things, do small things in a great way.",
        author: "Napoleon Hill",
    },
    {
        quotes: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Rohn",
    },
    {
        quotes: "Either you run the day or the day runs you.",
        author: "Jim Rohn",
    },
    {
        quotes: "If opportunity does not knock, build a door.",
        author: "Milton Berle",
    },
    {
        quotes: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quotes: "Ideas are easy. Implementation is hard.",
        author: "Guy Kawasaki",
    },
    {
        quotes: "If everything seems under control, you are not going fast enough.",
        author: "Mario Andretti",
    }
    ];

    const quote = document.querySelector(".quote span:first-child")
    const author = document.querySelector(".quote span:last-child")
    
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todayQuote.quotes
    author.innerText = todayQuote.author
    
    