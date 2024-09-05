console.log("Welcome To LOP SONGS");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("a2songs/1.mp3.mp3");
let masterPlay = document.getElementById('masterPlay');
let songItemPlay = document.getElementById('songItemPlay');
let  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "More Beautiful(Arjan Dhillon)",filePath:"a2songs/1.mp3", coverPath: "5061.jpg"},
    {songName: "Milli Milli(Arjan Dhillon)",filePath:"2.mp3", coverPath: "5061.jpg"},
    {songName: "Milde(Arjan Dhillon)",filePath:"3.mp3", coverPath: "5061.jpg"},
    {songName: "Hurry Up(Arjan Dhillon)", filePath:"4.mp3", coverPath: "5061.jpg"},
    {songName: "High(Arjan Dhillon)", filePath:"5.mp3", coverPath: "5061.jpg"},
    {songName: "Heer(Arjan Dhillon)", filePath:"6.mp3", coverPath: "5061.jpg"},
    {songName: "Dil Toot Jayega(Arjan Dhillon)", filepath:"7.mp3", coverPath: "5061.jpg"},
    {songName: "Dont Mind(Arjan Dhillon)", filePath:"8.mp3", coverPath: "5061.jpg"},
    {songName: "Back To Sikhi(Arjan Dhillon)", filePath:"9.mp3", coverPath: "6275.jpg"},
    {songName: "Biography(Arjan Dhillon)", filePath:"10.mp3", coverPath: "6275.jpg"},
    {songName: "Glorious(Arjan Dhillon)", filePath:"11.mp3", coverPath: "6275.jpg"},
    {songName: "Hot Shit(Arjan Dhillon)", filePath:"12.mp3", coverPath: "6275.jpg"},
    {songName: "Kuz Saal(Arjan Dhillon)", filePath:"13.mp3", coverPath: "6275.jpg"},
    {songName: "Maavan(Arjan Dhillon)", filePath:"14.mp3", coverPath: "6275.jpg"},
    {songName: "Parallel Thoughts(Arjan Dhillon)", filePath:"15.mp3", coverPath: "6275.jpg"},
    {songName: "Sandalbar(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "Suits You(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "Tyaar(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "Vigde(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "Way Bigger(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "Woah(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
    {songName: "youth Flow(Arjan Dhillon)", filePath:"16.mp3", coverPath: "6275.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }


    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause'); 
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',() =>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(makeAllPlays()|| audioElement.currentTime<=0){
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        (audioElement.currentTime = 0);
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
        }

        else{
        makeAllPlays()
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            (audioElement.currentTime = myProgressBar);
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-circle-play'); 
            masterPlay.classList.remove('fa-circle-pause')};
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=16){
        songIndex=0
    }
    else{
        songIndex += 1;

    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;

    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
})
