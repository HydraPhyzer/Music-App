let Music = document.querySelector('audio');
let Play = document.querySelector('.fa-circle-play');
let Pause = document.querySelector('.fa-circle-pause');
let Anime = document.querySelector('.Image img');
let Next = document.querySelector('.Next');
let Prev = document.querySelector('.Prev');
let MusicName=document.querySelector('.Music-Name');
let SingerName=document.querySelector('.Singer-Name');

let Running=document.querySelector('.Running');
let Total=document.querySelector('.Total');
let B=document.querySelector('.B');
let A=document.querySelector('.A');
let SongIndex=0;
let isPlaying=false;
let Box=0;

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
Next.addEventListener("click" , NextSong=()=>
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

Music.addEventListener("timeupdate" , (Event)=>
{
        let {currentTime,duration}=Music;

        let Min=Math.floor(duration/60);
        let Sec=Math.floor(duration%60);
        if(duration)
        Total.textContent=`${Min}:${Sec}`

        let CMin=Math.floor(currentTime/60);
        let CSec=Math.floor(currentTime%60);
        if(currentTime)
        Running.textContent=`${CMin}:${CSec}`

        let Wid=(currentTime/duration)*100;
        B.style.width=`${Wid}%`;
});

Music.addEventListener("ended" , ()=>
{
    NextSong();
});

let Seek=(Val)=>
{
    Music.currentTime=Val;
}
A.addEventListener("click" , (Event)=>
{
    let Widt=(Event.offsetX/Event.srcElement.clientWidth)*100;

    let Val=(Widt/100)*Music.duration;
    Seek(Val)
});

document.querySelector('.Range').addEventListener("change" , (Event)=>
{
    let Vol=Event.target.value;
    Music.volume=Vol/100
});