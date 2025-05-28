const notesDiv = document.querySelectorAll('.notes__item');

let heightNoteDiv = 30;

for (let i = notesDiv.length - 1; i >= 0; i--) {
  notesDiv[i].style.height = `${heightNoteDiv}%`;
  heightNoteDiv = heightNoteDiv + (130 - heightNoteDiv) / notesDiv.length;
}

const notesDieseDiv = document.querySelectorAll('.notes-diese__item');

let heightNoteDieseDiv = 40;

for (let i = notesDieseDiv.length - 1; i >= 0; i--) {
  notesDieseDiv[i].style.height = `${heightNoteDieseDiv}%`;
  heightNoteDieseDiv = heightNoteDieseDiv + (140 - heightNoteDieseDiv) / notesDiv.length;
}

for (let noteDiv of notesDiv) {
  let typeNote = noteDiv.classList[1];
  noteDiv.addEventListener('click', function () {
    noteDiv.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteDiv.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet ${typeNote}.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteDiv.style.background = "url('images/G.png') center / cover";
      noteDiv.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  });
}

for (let noteDieseDiv of notesDieseDiv) {
  let typeNote = noteDieseDiv.classList[2];
  typeNote = typeNote.split('');
  typeNote[2] = typeNote[1];
  typeNote[1] = '%23';
  typeNote = typeNote.join('');

  noteDieseDiv.addEventListener('click', function () {
    noteDieseDiv.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteDieseDiv.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet ${typeNote}.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteDieseDiv.style.background = "url('images/G.png') center / cover";
      noteDieseDiv.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  });
}

document.addEventListener('keydown', function (e) {
  let noteTouch = e.key;
  if (noteTouch === 'c' || noteTouch === 'C') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet C2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'd' || noteTouch === 'D') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet D2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'e' || noteTouch === 'E') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet E2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'f' || noteTouch === 'F') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet F2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'g' || noteTouch === 'G') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet G2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'a' || noteTouch === 'A') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet A2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  } else if (noteTouch === 'b' || noteTouch === 'B') {
    const noteKeydown = document.querySelector(`.notes__item.${noteTouch.toUpperCase()}2`);
    noteKeydown.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('images/G.png') center / cover";
    noteKeydown.style.boxShadow = '2px 2px 5px rgb(31, 31, 31)';
    const audio = new Audio(`Audios/Mallet B2.wav`);
    audio.play();
    audio.addEventListener('ended', function () {
      noteKeydown.style.background = "url('images/G.png') center / cover";
      noteKeydown.style.boxShadow = '5px 5px 25px rgb(33, 33, 33)';
    });
  }
});
