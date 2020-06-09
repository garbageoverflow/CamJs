var startcalled = false
var stopcalled = false
var resumecalled = false
var refreshcalled = false

const WebCam = {
  info: 'CamJs is a simple script that makes using Webcams with js easier made by garbageoverflow',
  name: 'CamJs',
  version: '1.1',
  description: 'CamJs is a simple script that makes using Webcams with js easier',
  author: 'garbageoverflow',
  repo: 'github.com/garbageoverflow/CamJs',

  errormsg: 'Could not detect webcam',
  succesmsg: 'Webcam detected',

  start: function() {
    startcalled = true
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        document.getElementById('mycam').srcObject = stream;
        console.log(WebCam.succesmsg);
      }).catch(function() {
        console.log(WebCam.errormsg);
      });
  },
  stop: function(e) {
    stopcalled = true
    var video = document.getElementById('mycam')
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
    video.srcObject = null;
  },
  pause: function() {
    document.getElementById('mycam').pause()
  },
  resume: function() {
    document.getElementById('mycam').play()
  },
  refresh: function() {
    WebCam.stop()
    WebCam.start()
  },
  onload: function(funcname) {
    document.getElementById('mycam').addEventListener("onload", funcname)
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
}

console.log(`App uses Cam.js, made by ${WebCam.author}. Repo: ${WebCam.repo}`)
