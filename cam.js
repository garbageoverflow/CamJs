// variables
var startcalled = false
var stopcalled = false
var resumecalled = false
var refreshcalled = false

const WebCam = {
  // webcam id
  id: 'video',

  // logging
  logelement: 'log 1',
  logarray: [],

  // message style
  msgstyle : [
    'background: linear-gradient(#88BD2C, #609307)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';'),

  // info
  info: {
    name: 'CamJs',
    version: '2.0',
    description: 'CamJs is a simple script that makes using Webcams with js easier',
    author: 'garbageoverflow',
    repo: 'www.github.com/garbageoverflow/CamJs',
  },

  // messages
  messages: {
    errormsg: 'Could not detect webcam',
    succesmsg: 'Webcam detected'
  },

  // functions
  start: function() {
    startcalled = true
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        document.getElementById(WebCam.id).srcObject = stream;
        console.log(WebCam.messages.succesmsg);
      }).catch(function() {
        console.error(WebCam.messages.errormsg);
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
  },
  pause: function() {
    document.getElementById(WebCam.id).pause()
  },
  resume: function() {
    document.getElementById(WebCam.id).play()
  },
  refresh: function() {
    WebCam.stop()
    WebCam.start()
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
    console.log(`%c ${WebCam.logelement}`, msgstyle);
  },
}

var message = `This app uses ${WebCam.info.name}, a script made by ${WebCam.info.author}. \n \n ${WebCam.info.repo} \n ${WebCam.info.version}`
console.warn(`%c ${WebCam.info.name} \n`, 'font-weight: bold', message)
