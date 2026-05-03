// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];


  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');

      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);

      voiceSelect.appendChild(option);
    } 
  }


  populateVoiceList();
  if (speechSynthesis.onvoiceschanged != undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  setTimeout(() => {
    if (voices.length === 0) {
      populateVoiceList();
    }
  }, 250);


  playButton.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener('start', function() {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterThis.addEventListener('end', function() {
      faceImage.src = 'assets/images/smiling.png';
    });
1
    synth.speak(utterThis);
  });


}
