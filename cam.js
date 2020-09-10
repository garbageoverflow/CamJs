// variables
var startcalled = false
var stopcalled = false
var resumecalled = false
var refreshcalled = false

const WebCam = {
  // webcam id
  id: 'video',

  // webcam size
  width: '700',
  height: '500',

  // snap settings
  canvas: 'canvas',
  shutter_sound_path: './shutter_sound.mp3',
  shutter_sound: 'true',

  // logging
  logelement: 'log 1',
  logarray: [],

  // info
  info: {
    name: 'CamJs',
    version: '2.1',
    description: 'CamJs is a simple script that makes using Webcams with js easier',
    author: 'garbageoverflow',
    repo: 'www.github.com/garbageoverflow/CamJs',
  },

  // messages
  messages: {
    errormsg: 'Could not detect webcam',
    succesmsg: 'Webcam detected',
    refreshmsg: 'WebCam refreshed succesfully',
    snapmsg: 'Snap Taken'
  },

  // functions
  start: function() {
    startcalled = true
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        document.getElementById(WebCam.id).srcObject = stream;
        console.log("%c [CamJs]"+`%c ${WebCam.messages.succesmsg}`, "color: magenta", "color: green")
      }).catch(function() {
        console.log("%c [CamJs]"+`%c ${WebCam.messages.errormsg}`, "color: magenta", "color: red")
      });
  },
  stop: function(e) {
    stopcalled = true
    var video = document.getElementById(WebCam.id)
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
    video.srcObject = null;
    console.log("%c [CamJs]"+`%c Webcam stopped`, "color: magenta", "color: red")
  },
  pause: function() {
    document.getElementById(WebCam.id).pause()
    console.log("%c [CamJs]"+`%c Webcam paused`, "color: magenta", "color: green")
  },
  resume: function() {
    document.getElementById(WebCam.id).play()
    console.log("%c [CamJs]"+`%c Webcam resumed`, "color: magenta", "color: green")
  },
  refresh: function() {
    var video = document.getElementById(WebCam.id)
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
    video.srcObject = null;

    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        document.getElementById(WebCam.id).srcObject = stream;
        console.log("%c [CamJs]"+`%c ${WebCam.messages.refreshmsg}`, "color: magenta", "color: green")
      }).catch(function() {
        console.log("%c [CamJs]"+`%c ${WebCam.messages.errormsg}`, "color: magenta", "color: red")
      });
  },
  onload: function(funcname) {
    document.getElementById(WebCam.id).addEventListener("onload", funcname)
  },
  onstart: function(startfuncname) {
    startcalled = true
    if (startcalled = true) {
      startfuncname
    }
    startcalled = false
  },
  onstop: function(stopfuncname) {
    stopcalled = true
    if (stopcalled = true) {
      stopfuncname
    }
    stopcalled = false
  },
  onresume: function(resumefuncname) {
    resumecalled = true
    if (resumecalled = true) {
      resumefuncname
    }
    resumecalled = false
  },
  onrefresh: function(refreshfuncname) {
    refreshcalled = true
    if (refreshcalled = true) {
      refreshfuncname
    }
    refreshcalled = false
  },
  log: function() {
    WebCam.logarray.push(WebCam.logelement)
    console.log(`%c ${WebCam.logelement}`, 'color: green');
  },
  snap: function() {
    var webcam = document.getElementById(`${WebCam.id}`)
    var canvas = document.getElementById(`${WebCam.canvas}`)
    var context = canvas.getContext('2d');
    context.drawImage(webcam, 0, 0, WebCam.width, WebCam.height);
    console.log("%c [CamJs]"+`%c ${WebCam.messages.snapmsg}`, "color: magenta", "color: green")

    if (WebCam.shutter_sound == true) {
      var shutter = new Audio(`${WebCam.shutter_sound_path}`);
      shutter.play()
    } else if (WebCam.shutter_sound == false) {
      console.log("%c [CamJs]"+`%c Shutter sound didn't play`, "color: magenta", "color: orange")
    }
  }
}

var message = `This app uses ${WebCam.info.name}, a script made by ${WebCam.info.author}. \n \n ${WebCam.info.repo} \n ${WebCam.info.version}`
console.warn(`%c ${WebCam.info.name} \n`, 'font-weight: bold', message)
