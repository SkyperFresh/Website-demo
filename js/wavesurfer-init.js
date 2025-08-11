// Object to store all players
const players = {};

// Initialize a waveform in a specific container with a specific file
function initWaveform(id, file) {
  const wavesurfer = WaveSurfer.create({
    container: `#${id}`,           // DOM element where waveform appears
    waveColor: '#7FDBFF',          // Baby blue wave color
    progressColor: '#ffffff',      // White progress bar
    backgroundColor: '#072040',    // Dark background for the waveform
    height: 80,
    responsive: true,
  });

  wavesurfer.load(file);           // Load the beat (audio file)
  players[id] = wavesurfer;        // Store player instance for later control
}

// Toggle play/pause for a specific waveform by ID
function togglePlay(id) {
  if (players[id]) {
    players[id].playPause();       // If it exists, play or pause
  }
}

// Initialize players once the page has loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize each beat player
  initWaveform('waveform1', 'beats/ADHD.mp3');

  // To add more players later, repeat this line:
  // initWaveform('waveform2', 'beats/another-beat.mp3');
});
