let Music = document.querySelector('audio');
let Play = document.querySelector('.fa-circle-play');
let Pause = document.querySelector('.fa-circle-pause');
let Anime = document.querySelector('.Image img');
let Next = document.querySelector('.Next');
let Prev = document.querySelector('.Prev');
let SongIndex=1;

Pause.style.display = "none";

let Object=
[
    {
        SongName:"Zelda",
        Artist:"Bujaa",
        Image:'/Logo/Logo1.jpg',
        Path:'/Songs/Music1.mp3'
    },
    {
        SongName:"Rokhri",
        Artist:"Ultra Beats",
        Image:'/Logo/Logo2.jpg',
        Path:'/Songs/Music2.mp3'
    },
    {
        SongName:"Jamila",
        Artist:"Tarang",
        Image:'/Logo/Logo3.jpg',
        Path:'/Songs/Music3.mp3'
    }
]

Play.addEventListener("click", () => {
    Pause.style.display = "block";
    Play.style.display = "none";
    Anime.classList.add("Anime")
    Music.play();
})
Pause.addEventListener("click", () => {
    Play.style.display = "block";
    Pause.style.display = "none";
    Anime.classList.remove("Anime")
    Music.pause();
})
Next.addEventListener("click" , ()=>
{
    alert("asas")
});