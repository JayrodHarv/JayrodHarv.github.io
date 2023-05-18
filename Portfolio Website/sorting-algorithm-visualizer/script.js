let ARRAY_SIZE = 100;
let array = [];
let animations = [];
isSorting = false;
isSorted = false;
let SORTING_SPEED = 5;

// let audioCtx = null;

// function playNote(freq) {
//   if(audioCtx == null) {
//     audioCtx = new (
//       AudioContext ||
//       webkitAudioContext || 
//       window.webkitAudioContext
//     )();
//   }
//   const dur = 0.1;
//   const osc = audioCtx.createOscillator();
//   osc.frequency.value = freq;
//   osc.start();
//   osc.stop(audioCtx.currentTime+dur);
//   const node = audioCtx.createGain();
//   node.gain.value = 0.05;
//   node.gain.linearRampToValueAtTime(
//     0, audioCtx.currentTime+dur
//   );
//   osc.connect(node);
//   node.connect(audioCtx.destination);
// }

let context = null;

function playNote(freq) {
  if (context == null) {
    context = new AudioContext();
  }
  const node = new Tone.Gain().toDestination();
  const osc = new Tone.ToneOscillatorNode(freq, "triangle").connect(node);
  node.gain.value = 0.05;
  osc.start();
  // node.gain.linearRampToValueAtTime(0, context.currentTime + 0.1);
  osc.stop("+0.1");
}

for (let i = 1; i < ARRAY_SIZE + 1; i++) {
  array.push(i);
}

function applySettings() {
  if (document.getElementById("array-size").value) {
    array = [];
    ARRAY_SIZE = parseInt(document.getElementById("array-size").value);
    for (let i = 1; i < ARRAY_SIZE + 1; i++) {
      array.push(i);
    }
    genArray();
  }
  if (document.getElementById("sorting-speed").value) {
    SORTING_SPEED = parseFloat(document.getElementById("sorting-speed").value);
  }
}

function genArray() {
  shuffle();
  isSorting = false;
  isSorted = false;
  showBars();
}

function shuffle() {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function doBubbleSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    animations = bubbleSort(copy);
    animate(animations);
  }
}

function doQuickSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    animations = quickSort(copy);
    animate(animations);
  }
}

function doMergeSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    console.log(mergeSort(copy));
    animate(animations);
  }
}

function doInsertionSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    animations = insertionSort(copy);
    animate(animations);
  }
}

function doSelectionSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    animations = selectionSort(copy);
    animate(animations);
  }
}

function doCocktailSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    animations = cocktailSort(copy);
    animate(animations);
  }
}

function doHeapSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    console.log(mergeSort(copy));
    animate(animations);
  }
}

function doShellSort() {
  if (!isSorting && !isSorted) {
    animations = [];
    isSorting = true;
    const copy = [...array];
    console.log(shellSort(copy));
    animate(animations);
  }
}

function animate(animations) {
  if (animations.length == 0) {
    if (isSorting) {
      isSorting = false;
      showBars();
      // for (let i = 0; i < array.length; i++) {
      //   animations.push([i, null, "compare"]);
      // }
    }
    return;
  }
  const [i, j, type] = animations.shift();
  if (isSorting && type == "swap") {
    [array[i], array[j]] = [array[j], array[i]];
  }
  playNote(500 + array[i] * (500 / array.length));
  // if (j) {
  //   playNote(200 + array[j] * (500 / array.length));
  // }
  showBars([i, j, type]);
  setTimeout(function() {
    if (isSorting || isSorted) {
      animate(animations);
    }
  }, SORTING_SPEED)
}

function showBars(indices) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array.length <= 100 ? array[i] + "%" : array[i] * (100 / array.length) + "%";
    bar.style.width = (97 / array.length) + "vw";

    if (!isSorted || isSorting) {
      if (indices && indices.includes(i)) {
        if (indices[2] == "swap") {
          bar.style.backgroundColor = "yellow";
        }
        else if (indices[2] == "compare") {
          bar.style.backgroundColor = "yellow";
        }
      }
    } else {
      bar.style.backgroundColor = "green";
    }
    container.appendChild(bar);
  }
}

genArray();