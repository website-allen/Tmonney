document.querySelectorAll('.set-bg').forEach(el => {
    const bg = el.getAttribute('data-setbg');
    el.style.backgroundImage = `url(${bg})`;
  });
  



document.querySelectorAll('.single_player_container').forEach(player => {
  const audio = player.querySelector('.audio-player');
  const playBtn = player.querySelector('.play-btn');
  const progressBar = player.querySelector('.progress-bar');
  const currentTime = player.querySelector('.current-time');
  const duration = player.querySelector('.duration');
  const volumeBar = player.querySelector('.volume-bar');
  const muteBtn = player.querySelector('.mute-btn');

  // Play / Pause
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '❚❚';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  // Load duration
  audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
  });

  // Update progress
  audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
    
  });

  // Seek
  progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  // Volume
  volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
  });

  // Mute
 muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? '🔇' : '🔊';
  });

  function formatTime(time) {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
});

alert(window.innerWidth);