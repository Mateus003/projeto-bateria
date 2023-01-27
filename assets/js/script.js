document.body.addEventListener('keyup', (event)=>{
   playSong(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    if(song != ''){
        let songArray = song.split('');
        let wait = 0;

        for(let songItem of songArray){
            setTimeout(()=>{
                playSong(`key${songItem.toLowerCase()}`);
            }, wait) ;
            
            wait+=270;
        }
        
    }
});


function playSong(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);
    if(audioElement){
        audioElement.currentTime = 0 ;
        audioElement.play();
    }

    if (keyElement){
        keyElement.classList.add('active');

        setTimeout(function(){
            keyElement.classList.remove('active');
        }, 300);
    }

}

