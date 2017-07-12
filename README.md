# DigiTool



*Slide Navigator For Blog Website* 

## Installation

You can download the latest version of [SlideBlogNavigator.js on GitHub](https://github.com/Alok0110/DigiTool)

Include bootstrap files in the head section of your Html as shown below

<!-- Bootstrap css files -->
link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" 
link type="text/css" rel="stylesheet" href="css/bootstrap-theme.min.css" 
link type="text/css" rel="stylesheet" href="css/ionicons.min.css" 

Include "jQuery.js" , "bootstrap.min.js" , "SlideBlogNavigator.js" , and your script file, in my case it is "myscript.js" in sequence as shown below in your Html file

<!-- Bootstrap JS files here -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" ></script>
        <script type="type/javascript" src="script/bootstrap.min.js"></script>
        <script type="text/javascript" src="script/SlideBlogNavigator.js" ></script>
        <script type="text/javascript" src="script/myscript.js"></script>
        
In your script file, in my case it is "myscript.js", write the below line in order to run the script

/* Run the below line for running the SlideBlogNavigator.js script */

var sbobject = $SB({});

## Documentation

You can find documentation at [SlideBlogNavigator.js on GitHub](https://github.com/Alok0110/DigiTool).

Current Version @ version 1.0 - SlideBlogNavigator.js

Load Image's and Article's Directly From Website @ version 2.0 - SlideBlogNavigator.js


## Option's setting while intialing SlideBlogNavigator


Option : image
Default: true
Function's as: When set true it singnals API that images are used in the Blog

Option : topMargin
Default: '0px'
Function's as: Used when menu header is present on top, this will ensure that Blog articles is not overlapped

Option : bottomMargin
Default: '0px'
Function's as: Used for providing extra space at bottom

Option : setImageAsBackground
Default: true
Function's as: Blog images are displayed as background images in a container, if false normal image container is used.

Option : setBackgroundColor
Default: '#dedede'
Function's as: Set's the background color of the website.

Option : imageBorderColor
Default: '#2980b9'
Function's as: Set's the Image border color.

Option : imageBorderStyle
Default: 'solid'
Function's as: Set's the Image border style.

Option : imageBorderWidth
Default: '3px'
Function's as: Set's the Image border width.


## API's methods under construction



