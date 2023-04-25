var emoji = [
    {
        emoji: "Like",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-like-2387659-1991059.png?f=avif&w=256'
    },
    {
        emoji: "Heart",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-love-2387666-1991064.png?f=avif&w=256'
    },
    {
        emoji: "Care",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-care-2387662-1991058.png?f=avif&w=256'
    },
    {
        emoji: "Haha",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-haha-2387660-1991060.png?f=avif&w=256'
    },
    {
        emoji: "Wow",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-wow-2387663-1991062.png?f=avif&w=256'
    },
    {
        emoji: "Sad",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-sad-2387665-1991063.png?f=avif&w=256'
    },
    {
        emoji: "Angry",
        url: 'https://cdn.iconscout.com/icon/free/png-512/free-angry-2387661-1991061.png?f=avif&w=256'
    },
];

var containerEmojie = document.querySelector('.container__emoji');

let getEmojie = null;
let counter = 0;

for (let i = 0; i < emoji.length; i++) {
    containerEmojie.innerHTML += `
            <div class="emojiImg">
                <img src="${emoji[i].url}" alt="">
            </div>
        `;
        
        var emojiImg = document.querySelectorAll('.emojiImg');
        emojiImg.forEach((emojiDir, index) => {
            emojiDir.addEventListener('click', () => {
                getEmojie = {
                    emojiName: emoji[index].emoji,
                    emojieUrl: emoji[index].url
                };
            });
        });   
}
var btnLike = document.querySelector('.btnLike');
var container__emoji = document.querySelector('.container__emoji');

btnLike.onmouseenter = () => {
    container__emoji.style.display = "flex";
}
container__emoji.onmouseenter = () => {
    container__emoji.style.display = "flex";

    
    container__emoji.addEventListener('click', () => {
        container__emoji.style.display = "none";
        
        var like = document.querySelector('.like');
        like.innerHTML = `
                <img width="16px" src="${getEmojie.emojieUrl}" alt="">
                <span>${getEmojie.emojiName}</span>
                <span>${counter + 1}<span>
            `;
            btnLike.innerHTML = `
            <img width="16px" src="${getEmojie.emojieUrl}" alt="">
                <span>${getEmojie.emojiName}</span>  
            `
    })
}    

container__emoji.onblur = () => {
    container__emoji.style.display = "none";
}