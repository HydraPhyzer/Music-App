let Music = document.querySelector('audio');
let Play = document.querySelector('.fa-circle-play');
let Pause = document.querySelector('.fa-circle-pause');
let Anime = document.querySelector('.Image img');
let Next = document.querySelector('.Next');
let Prev = document.querySelector('.Prev');
let MusicName=document.querySelector('.Music-Name');
let SingerName=document.querySelector('.Singer-Name');
let SongIndex=0;
let isPlaying=false;

Pause.style.display = "none";

let Object=
[
    {
        SongName:"Ambition For Cash",
        Artist:"Argit Singh",
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
    isPlaying=true;
})
Pause.addEventListener("click", () => {
    Play.style.display = "block";
    Pause.style.display = "none";
    Anime.classList.remove("Anime")
    Music.pause();
    isPlaying=false
})
Next.addEventListener("click" , ()=>
{
    SongIndex=(SongIndex+1)%Object.length;
    MusicName.textContent=Object[SongIndex].SongName;
    SingerName.textContent=Object[SongIndex].Artist;

    Anime.src=Object[SongIndex].Image;
    Music.src=Object[SongIndex].Path;

    if(isPlaying)
    Music.play();
});
Prev.addEventListener("click" , ()=>
{
    SongIndex=(SongIndex-1)%Object.length;
    if(SongIndex<0)
    {
        SongIndex=Object.length-1;
    }
    MusicName.textContent=Object[SongIndex].SongName;
    SingerName.textContent=Object[SongIndex].Artist;

    Anime.src=Object[SongIndex].Image;
    Music.src=Object[SongIndex].Path;

    if(isPlaying)
    Music.play();
});