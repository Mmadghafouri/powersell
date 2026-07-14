
// for song length
let SongPlayerAll = document.querySelectorAll(".SongPlayerAll");

// audio
let audio = document.querySelectorAll(".SongPlayerAll audio");

// play and pause btn
let playButton = document.querySelectorAll(".playButton");

// current timer 
let timer1_song = document.querySelectorAll(".timer1-song");

/// duration timer
let timer2_song = document.querySelectorAll(".timer2-song");

// audio all div
let songPlayerDiv = document.querySelectorAll(".songPlayerDiv");
let inputRange = document.querySelectorAll(".songPlayerDiv input");
let progress_Song = document.querySelectorAll(".progress-Song");
let titleCurrentTime = document.querySelectorAll(".titleCurrentTime")

// sound icon
let soundSong = document.querySelectorAll(".soundSong");


for (let i = 0; i < SongPlayerAll.length; i++) {

    // play and pause btn
    playButton[i].addEventListener("click", () => {


        if (playButton[i].className == 'playButton') {

            pauseAll()


            playButton[i].classList.add("playing");
            audio[i].play();
            playButton[i].innerHTML = '<ion-icon name="pause-outline"></ion-icon>';

        }
        else {

            pauseAll()


            playButton[i].classList.remove("playing");
            audio[i].pause();
            playButton[i].innerHTML = '<ion-icon name="play-outline"></ion-icon>';

        }
    });
    // play and pause btn

    // audio

    // active range

    inputRange[i].addEventListener("input", () => {

        progress_Song[i].style.width = inputRange[i].value + '%';
    })


    // active range

    audio[i].addEventListener("timeupdate", () => {

        let current = audio[i].currentTime;
        let duration = audio[i].duration;

        // moving range

        let progressWWidth = (current / duration) * 100;

        inputRange[i].value = progressWWidth;
        progress_Song[i].style.width = inputRange[i].value + '%';


        // get current time
        let mins = Math.floor(current / 60);
        let secs = Math.floor(current % 60);

        if (mins < 10) {

            mins = "0" + mins;
        }
        if (secs < 10) {

            secs = "0" + secs;
        }

        let CurrentTime = `${mins}:${secs}`;

        timer1_song[i].innerHTML = CurrentTime;

        // get duration time
        let mins2 = Math.floor(duration / 60);
        let secs2 = Math.floor(duration % 60);

        if (mins2 < 10) {

            mins2 = "0" + mins2;
        }
        if (secs < 10) {

            secs2 = "0" + secs2;
        }

        let DurationTime = `${mins2}:${secs2}`;

        timer2_song[i].innerHTML = DurationTime;



    })

    songPlayerDiv[i].addEventListener("click", (e) => {

        let AllWidth = songPlayerDiv[i].clientWidth;
        let clicked = e.offsetX;
        let audioDuration = audio[i].duration;

        audio[i].currentTime = (clicked / AllWidth) * audioDuration;
    })

    songPlayerDiv[i].addEventListener("mousemove", (e) => {

        let AllWidth = songPlayerDiv[i].clientWidth;
        let clicked = e.offsetX;
        let audioDuration = audio[i].duration;

        let audioCurrentTime;

        if (clicked <= 1) {

            titleCurrentTime[i].style.left = `-19px`;
            audioCurrentTime = 0;

        }
        else if (clicked >= AllWidth) {

            titleCurrentTime[i].style.left = `${AllWidth - 20}px`;
            audioCurrentTime = audioDuration; // AllWidth / AllWidth = 1 ======> 1 * audioDuration = audioDuration

        }
        else {

            titleCurrentTime[i].style.left = `${clicked - 20}px`;
            audioCurrentTime = (clicked / AllWidth) * audioDuration;

        }


        let mins = Math.floor(audioCurrentTime / 60);
        let secs = Math.floor(audioCurrentTime % 60);

        if (mins < 10) {

            mins = "0" + mins;
        }
        if (secs < 10) {

            secs = "0" + secs;
        }

        let time = `${mins}:${secs}`;

        titleCurrentTime[i].innerHTML = time;

        titleCurrentTime[i].classList.add("active")

    })

    songPlayerDiv[i].addEventListener("mouseout", (e) => {


        titleCurrentTime[i].classList.remove("active")

    })

    // audio

    // icon sound

    soundSong[i].addEventListener("click", () => {

        if (soundSong[i].className == 'bi bi-volume-up soundSong') {

            soundSong[i].className = 'bi bi-volume-mute soundSong';
            audio[i].volume = 0;
        }
        else {

            soundSong[i].className = 'bi bi-volume-up soundSong';
            audio[i].volume = 1;
        }
    })

    // icon sound

}

function pauseAll() {

    audio.forEach(a => {

        a.pause()
    })

    playButton.forEach(playButton => {

        playButton.classList.remove("playing")
        playButton.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
    })


}