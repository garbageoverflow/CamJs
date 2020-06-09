# CamJs
CamJs is a simple script that makes using Webcams with js easier

|version|1.1|
|----|----|

## How to use?
1. Link this script in the HTML document you want to use
```HTML
<!-- link to the cam.js file on github -->
<script src="https://github.com/garbageoverflow/CamJs/cam.js">
```

```HTML
<!-- link to the cam.js file locally -->
<script src="./cam.js">
```

2. Initialize the webcam
```JS
WebCam.start()
```

3. Create a `<video>` tag
Create a `<video>` tag with the id of `mycam` in yout HTML document.
You can add aditional attributes link `height`, `width` and `style` to your `<video>` tag

```HTML
<video id="mycam" autoplay width="100%" height="100%"></video>
```

###### These are the minimum steps to make the webcam work.

## Commands

|WebCam.start()|This function starts the webcam|
|----|----|
|WebCam.stop()|This function is responsible for stopping the webcam|
|WebCam.pause()|This function does not stop your webcam, it just freezes it|
|WebCam.refresh()|This program stops and starts your webcam, just like refreshing|
|WebCam.onload(functionname)|Start a function when the `<video>` tag loads|
|WebCam.onstart(functionname)|Start a function when the video starts|
|WebCam.onstop(functionname)|Start a function when the video stops|
|WebCam.onresume(functionname)|Start a function when the video resumes|
|WebCam.onrefresh(functionname)|Start a function when the video refreshes|

#### Using WebCam.onload()
This function calls another function once the `<video>` tag has loads

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onload(hi())
```

#### Using WebCam.onstart()
This function calls another function when the webcam starts

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onstart(hi())
```

#### Using WebCam.onstop()
This function calls another function when the webcam stops

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onstop(hi())
```

#### Using WebCam.onresume()
This function calls another function when the webcam resumes

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onresume(hi())
```

#### Using WebCam.onrefresh()
Thsi function calls another function when the webcam refreshes

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onrefresh(hi())
```

## Variables
|info|Usage: WebCam.info Output: CamJs is a simple script that makes using Webcams with js easier made by garbageoverflow|
|----|----|
|name|Usage: WebCam.name Output: CamJs|
|version|Usage: WebCam.version Output: 1.1|
|description|Usage: WebCam.description Output: CamJs is a simple script that makes using Webcams with js easier|
|author|Usage: WebCam.author Output: garbageoverflow|

These Outputs only appera when used in commands like `console.log(WebCam.author)` or `document.write(WebCam.author)`

#### I don't know why this script works only in combination with electron.js, maybe it will work for you
