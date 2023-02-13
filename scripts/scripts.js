var titlecard = [
    {
        title1: `US Government class`,
        title2: `Citizens in Action Letter`,
        name: `Zakariah Y.`
    }
];

var mycards = [
    {
        txt: {
            txt: `Dear President, my name is Zakariah Younus. I am writing to you from my desk at home. I look outside and see trees, grass, and the sky. Even though I can look at these whenever I want, some people can’t. One of them is David Farragut, who was in the navy since he was nine and rose to the rank of prize master at 12 years old. He had to stay at sea for a long time. He would not see trees or grass for a long time. I often wonder if he was homesick. Even though I understand that participation in protecting our country benefits all of us. I still feel sad for him; he sacrificed something I might never want to leave behind. He was fearless. For example, when torpedoes were in the water, and he witnessed the USS Tecumseh sinking and the other ships backing away, he shouted, “What’s the trouble?” The USS Brooklyn answered, “Torpedoes!”  He called back, “Damn the torpedoes! Full speed ahead!” This guy was really amazing! Honestly, this guy deserves a national holiday just for that. We should honor the effort this guy put in to actually serve the country and how he was motivated by torpedoes in the water. 
            <br/>
        Please consider this,
        <br/>
        Zakariah Younus.
        `,
            classes: 'enlarging'
        }
    }
];









// The Logic \/

function loadtitlecard() {
    for (var titles of titlecard) {
        document.getElementById('main').innerHTML += `
<div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <h3>${titles.title1}</h3>
        <h4>${titles.title2}</h4>
        <h5>${titles.name}</h5>
        <br />
        <p class="lead floating">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down floating" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
`
    }
}


function load() {
    for (var card of mycards) {
        document.getElementById('main').innerHTML += `
        <div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <p class="lead ${card.txt.classes}">
          ${card.txt.txt}
        </p>
      </div>
    `
    }


    document.getElementById('main').innerHTML += `<div>Built by ProtonZ With &hearts;</div>`
}
