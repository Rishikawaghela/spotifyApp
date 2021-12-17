console.log('heloo spotify');

// initialize the variables 
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('main-tittle');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let play = document.getElementsByClassName('play')
// Arrayray object of songs 
let songs = [
    { songName: 'Bijlii Bijlii - Harry Sandhu',filePath : './songs/1.mp3', coverPath : 'cover/1.jpg' },
    { songName: 'Shaka laka - jass manak',filePath : './songs/2.mp3', coverPath : 'cover/2.jpg' },
    { songName: 'karwa chouth - jass manak',filePath : './songs/3.mp3', coverPath : 'cover/3.jpg' },
    { songName: 'tarasti hai nighaein - superstar',filePath : './songs/4.mp3', coverPath : 'cover/4.jpg' },
    { songName: 'Kanta Laga Mp3 Song',filePath : './songs/5.mp3', coverPath : 'cover/5.jpg' },
    { songName: 'koi kahe kehta rahe - b2 remix',filePath : './songs/6.mp3', coverPath : 'cover/6.jpg' },
    { songName: 'woh larki jo sabse  - new version',filePath : './songs/7.mp3', coverPath : 'cover/7.jpg' },
    { songName: 'Behti hawa sa tha woh - 3 idiots',filePath : './songs/8.mp3', coverPath : 'cover/8.jpg' },
    { songName: 'kali kali zulfon',filePath : './songs/9.mp3', coverPath : 'cover/9.jpg' },
    { songName: 'uff teri ada - HD full song',filePath : './songs/10.mp3', coverPath : 'cover/10.jpg' },
    // { songName: 'Bijlii Bijlii - Harry Sandhu',filePath : 'songs/11.mp3', coverPath : 'cover/11.jpg' },


]
songItem.forEach((Element, i) =>{
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

// handle play / pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', () =>{
    // update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex  = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0 ;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    let play = document.getElementsByClassName('play');
    play.style.color = 'green';
    gif.style.opacity = 1;
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0 ;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
