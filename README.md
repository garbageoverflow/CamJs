# CamJs
CamJs is a simple script that makes using Webcams with js easier

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
WebCam.id = 'your video tag id'
WebCam.start()
```

3. Create a `<video>` tag
Create a `<video>` tag with the id of the value of `WebCam.id` in yout HTML document.

```HTML
<video id="your id here" autoplay width="100%" height="100%"></video>
```

## Variables
|Variable Name| Usage and output|
|----|----|
|name|Usage: WebCam.info.name Output: CamJs|
|version|Usage: WebCam.info.version Output: 2.0|
|description|Usage: WebCam.info.description Output: CamJs is a simple script that makes using Webcams with js easier|
|author|Usage: WebCam.author Output: garbageoverflow|

## Succes and error message customization
|Variable Name|Usage|Output|
|---|---|---|
|errormsg|WebCam.messages.errormsg = 'errormsg'|The value of WebCam.messages.errormsg|
|succesmsg|WebCam.messages.succesmsg = 'succesmsg'|The value of WebCam.messages.succesmsg|

## Other Variables

|Variable Name|Usage|
|---|---|
|id|WebCam.id = 'id'|
|logelement|WebCam.logelement = 'text'; WebCam.log Output: Console message|
|logarray|Used to store all the logelements|
|msgstyle|Used to give style to the console messages from WebCam.log()|

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
|WebCam.log()|log something important|

## Command usage
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
This function calls another function when the webcam refreshes

###### Syntax
```JS
function hi() {
  alert('hi')
}

WebCam.onrefresh(hi())
```

#### Using WebCam.log()
Think beyond the capabilities of this function and you could have some great results

```JS
// give a name to the message you want to send
WebCam.logelement = 'start'
// log the message
WebCam.log()
```

###### Other examples
You can use this function in many ways, for better understanding you should look at the code of the function and how it works

+ Use the log command in another function to use it more quickly
```JS
function functionname() {
    WebCam.logelement = 'start'
    WebCam.log()
}
```

+ Use the log function together with the `WebCam.onstart()`/`WebCam.onstop()` function

```JS
function functionname() {
    WebCam.logelement = 'start'
    WebCam.log()
}

WebCam.onstart(functionname())
//WebCam.onstop(functionname())
//WebCam.onreload(functionname())
//WebCam.onload(functionname())
//WebCam.onresume(functionname())
//WebCam.onrefresh(functionname())
```

+ Use the some logelement more times
For this to work you need to understand how the function works.
  - You define the value of the logelement with `WebCam.logelement = 'value'`
  - You use the `WebCam.log()` function to actually display the message
  - The message is stored in the `WebCam.logarray` array, if needed it can be reused

  ###### example:
  ```JS
  // this will log the first element of the array
  console.log(WebCam.logarray[1]);

  // you can also style it using the style we made
  console.log(WebCam.logarray[1], msgstyle);
  ```

As I said, your imagination is the limit.
Over all, it's not the best script out there, but it gets the job done.
