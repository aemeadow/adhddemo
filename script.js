function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        var hd = h;
        $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
        t = setTimeout(function () { startTime() }, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

document.onmousedown = function(e) {
  
  e.preventDefault();

  var dragElement = e.target;

  if (!dragElement.classList.contains('draggable')) return;

  var shiftX, shiftY;

  startDrag(e.clientX, e.clientY);

  document.onmousemove = function(e) {
    moveAt(e.clientX, e.clientY);
  };

  dragElement.onmouseup = function() {
    finishDrag();
  };

  function startDrag(clientX, clientY) {

    shiftX = clientX - dragElement.getBoundingClientRect().left;
    shiftY = clientY - dragElement.getBoundingClientRect().top;

    document.body.appendChild(dragElement);

    moveAt(clientX, clientY);
  };
  
    function moveAt(clientX, clientY) {
    // новые координаты
    var newX = clientX - shiftX;
    var newY = clientY - shiftY;

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

  function finishDrag() {
    // конец переноса
    dragElement.style.position = 'absolute';

    document.onmousemove = null;
    dragElement.onmouseup = null;
  }

  // отменим действие по умолчанию на mousedown (выделение текста, оно лишнее)
  return false;
}

let circles = [];
function createCircle() {
  for (let x = 0; x < 12; x++) {
    let c = document.createElement('div');
    c.classList.add('trail');
    document.body.appendChild(c);
    circles.push(c);
  }
}
createCircle();


let currentCircle = 0;

function trail(e) {
  let circle = circles[currentCircle];
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  currentCircle = (currentCircle + 1) % circles.length;
}

addEventListener('mousemove', trail);

const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.getElementById("mainaudio");
const targetDiv = document.getElementById("fadebg");
const static = document.getElementById("staticaudio");

button.addEventListener("mouseover", soundoff, false);
button.addEventListener("mouseout",soundon, false);

function soundoff()
{
  audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
    targetDiv.style.display = "block";
  
}
function soundon()
{
  audio.volume = 1;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    targetDiv.style.display = "none";
  
}

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 1;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
    
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
    if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
    
  }
    
  }
  button.classList.add("fade");
});

const fourohfour = document.getElementById("fourfour");
$(document).ready(function () {
        startTime();
        audio.play();
        targetDiv.style.display = "none";
        fourohfour.style.display = "none";
        $('#startMenu').hide();
        $('#start').click(function () {
            $('#startMenu').toggle();
            $(this).toggleClass('startClick');
          fourohfour.style.display = "block";
          audio.pause();
          static.play();
        });

        $('#desktop').click(function () {
            $('#startMenu').hide();
          fourohfour.style.display = "none";
          audio.play();
          static.pause();
           $('#start').removeClass('startClick').addClass('startRest');
          fourohfour.style.display = "none";
          audio.play();
          static.pause();
        })


        $('.desktopIcon').dblclick(function () {
            alert($(this).text());
        });

    });