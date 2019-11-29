var recognizing;
console.log("Reached here")
var recognition = new SpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = reset;

recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      textarea.value += event.results[i][0].transcript;
    }
  }
}

function reset() {
  recognizing = false;
  button.innerHTML = "Click to Speak";
}

function toggleStartStop() {
  if (recognizing) {
    console.log("recognition:: ", recognition)
    recognition.stop();
    reset();
  } else {
      console.log("recognition:: ", recognition)
    recognition.start();
    recognizing = true;
    button.innerHTML = "Click to Stop";
  }
}

function x() {
    console.log("I am here")
}