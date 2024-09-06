console.log("Welcome To LOP SONGS");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songItemPlay = document.getElementById('songItemPlay');
let  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Punjab(Arjan Dhillon)",filePath:"1.mp3", coverPath: "1.jpg"},
    {songName: "Tusi Ki Karde Je(Arjan Dhillon)",filePath:"2.mp3", coverPath: "2.jpg"},
    {songName: "No Debts(Arjan Dhillon)",filePath:"3.mp3", coverPath: "3.jpg"},
    {songName: "Thaba Ku Zulfan Waliya(Arjan Dhillon)", filePath:"4.mp3", coverPath: "4.jpg"},
    {songName: "Tera Ishq(Arjan Dhillon)", filePath:"5.mp3", coverPath: "5.jpg"},
    {songName: "Raah Warga(Arjan Dhillon)", filePath:"6.mp3", coverPath: "6.jpg"},
    {songName: "Salute(Arjan Dhillon)", filePath:"7.mp3", coverPath: "7.jpg"},
    {songName: "Peach Rang(Arjan Dhillon)", filePath:"8.mp3", coverPath: "8.jpg"},
    {songName: "Punjab Warga(Arjan Dhillon)", filePath:"9.mp3", coverPath: "9.jpg"},
    {songName: "Night Out(Arjan Dhillon)", filePath:"10.mp3", coverPath: "10.jpg"},
    {songName: "Nakhre(Arjan Dhillon)", filePath:"11.mp3", coverPath: "11.jpg"},
    {songName: "Munda(Arjan Dhillon)", filePath:"12.mp3", coverPath: "12.jpg"},
    {songName: "Munda Nahi Bolda(Arjan Dhillon)", filePath:"13.mp3", coverPath: "13.jpg"},
    {songName: "Likhari(Arjan Dhillon)", filePath:"14.mp3", coverPath: "14.jpg"},
    {songName: "Kath(Arjan Dhillon)", filePath:"15.mp3", coverPath: "15.jpg"},
    {songName: "Jutti(Arjan Dhillon)", filePath:"16.mp3", coverPath: "16.jpg"},
    {songName: "Jawani(Arjan Dhillon)", filePath:"17.mp3", coverPath: "17.jpg"},
    {songName: "Ilzaam(Arjan Dhillon)", filePath:"18.mp3", coverPath: "18.jpg"},
    {songName: "Gutt(Arjan Dhillon)", filePath:"19.mp3", coverPath: "19.jpg"},
    {songName: "Flat(Arjan Dhillon)", filePath:"20.mp3", coverPath: "20.jpg"},
    {songName: "Duty(Arjan Dhillon)", filePath:"21.mp3", coverPath: "21.jpg"},
    {songName: "Chah Pindan Di(Arjan Dhillon)", filePath:"22.mp3", coverPath: "22.jpg"},
    {songName: "Calculations(Arjan Dhillon)", filePath:"23.mp3", coverPath: "2338.jpg"},
    {songName: "Calculation(Arjan Dhillon)", filePath:"24.mp3", coverPath: "2338.jpg"},
    {songName: "Dunia(Arjan Dhillon)", filePath:"25.mp3", coverPath: "2338.jpg"},
    {songName: "Her Town(Arjan Dhillon)", filePath:"26.mp3", coverPath: "2338.jpg"},
    {songName: "Jaan Vaariye(Arjan Dhillon)", filePath:"27.mp3", coverPath: "2338.jpg"},
    {songName: "LIl Bit(Arjan Dhillon)", filePath:"28.mp3", coverPath: "2338.jpg"},
    {songName: "Long Back(Arjan Dhillon)", filePath:"29.mp3", coverPath: "2338.jpg"},
    {songName: "Mighty Mirza(Arjan Dhillon)", filePath:"30.mp3", coverPath: "2338.jpg"},
    {songName: "Punjabi(Arjan Dhillon)", filePath:"31.mp3", coverPath: "2338.jpg"},
    {songName: "Peg(Arjan Dhillon)", filePath:"32.mp3", coverPath: "2338.jpg"},
    {songName: "Rabb(Arjan Dhillon)", filePath:"33.mp3", coverPath: "2338.jpg"},
    {songName: "Range(Arjan Dhillon)", filePath:"34.mp3", coverPath: "2338.jpg"},
    {songName: "Tape 2(Arjan Dhillon)", filePath:"35.mp3", coverPath: "2338.jpg"},
    {songName: "Thode Vargia(Arjan Dhillon)", filePath:"36.mp3", coverPath: "2338.jpg"},
    {songName: "World Wide(Arjan Dhillon)", filePath:"37.mp3", coverPath: "2338.jpg"},
    {songName: "25-25(Arjan Dhillon)", filePath:"38.mp3", coverPath: "2338.jpg"},
    {songName: "Drunk Arjan(Arjan Dhillon)", filePath:"39.mp3", coverPath: "3949.jpg"},
    {songName: "Fantasy(Arjan Dhillon)", filePath:"40.mp3", coverPath: "3949.jpg"},
    {songName: "Hazur(Arjan Dhillon)", filePath:"41.mp3", coverPath: "3949.jpg"},
    {songName: "Hommie Call(Arjan Dhillon)", filePath:"42.mp3", coverPath: "3949.jpg"},
    {songName: "Its My Time(Arjan Dhillon)", filePath:"43.mp3", coverPath: "3949.jpg"},
    {songName: "Janu Janu(Arjan Dhillon)", filePath:"44.mp3", coverPath: "3949.jpg"},
    {songName: "Memory Lane(Arjan Dhillon)", filePath:"45.mp3", coverPath: "3949.jpg"},
    {songName: "Munde Pindan De(Arjan Dhillon)", filePath:"46.mp3", coverPath: "3949.jpg"},
    {songName: "Rafal(Arjan Dhillon)", filePath:"47.mp3", coverPath: "3949.jpg"},
    {songName: "Tha Karke(Arjan Dhillon)", filePath:"48.mp3", coverPath: "3949.jpg"},
    {songName: "Tere Baad(Arjan Dhillon)", filePath:"49.mp3", coverPath: "3949.jpg"},
    {songName: "Sanu Teri Lod(Arjan Dhillon)", filePath:"50.mp3", coverPath: "5061.jpg"},
    {songName: "Reshmi Rumal(Arjan Dhillon)", filePath:"51.mp3", coverPath: "5061.jpg"},
    {songName: "Please(Arjan Dhillon)", filePath:"52.mp3", coverPath: "5061.jpg"},
    {songName: "Ohi Lagdi Aa(Arjan Dhillon)", filePath:"53.mp3", coverPath: "5061.jpg"},
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
            (audioElement.currentTime = 0);
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-circle-play'); 
            masterPlay.classList.remove('fa-circle-pause')};
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=61){
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

// Listen for the song to end and play the next song
audioElement.addEventListener('ended', () => {
    songIndex += 1;
    if (songIndex >= songs.length) {
        songIndex = 0; // Loop back to the first song if it's the last one
    }
    audioElement.src = songs[songIndex].filePath; // Update the audio source
    masterSongName.innerText = songs[songIndex].songName; // Update the song name display
    audioElement.currentTime = 0; // Reset the time
    audioElement.play(); // Play the next song
    masterPlay.classList.remove('fa-circle-play'); 
    masterPlay.classList.add('fa-circle-pause'); // Update play/pause icon
});
