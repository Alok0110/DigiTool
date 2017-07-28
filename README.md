# DigiTool



*Slide Navigator For Blog Website* 

## Installation

You can download the latest version of [SlideBlogNavigator.js on GitHub](https://github.com/Alok0110/DigiTool)

Include CSS bootstrap files in the head section of your Html as shown below

<!-- Bootstrap css files -->
link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" 
link type="text/css" rel="stylesheet" href="css/bootstrap-theme.min.css" 

Include "jQuery.js" , "bootstrap.min.js" , "SlideBlogNavigator.js" , and your script file, in my case it is "myscript.js" in sequence as shown below in your Html file

<!-- Bootstrap JS files here -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" ></script>
        <script type="type/javascript" src="script/bootstrap.min.js"></script>
        <script type="text/javascript" src="script/SlideBlogNavigator.js" ></script>
        <script type="text/javascript" src="script/myscript.js"></script>
        
In your script file, in my case it is "myscript.js", write the below line in order to run the script

/* Run the below line for running the SlideBlogNavigator.js script */

var sbobject = $SB({});

you can pass options to the empty object passed as a parameter to $SB() function, for example refer below function call

var sbobject = $SB({ image: true, setImageAsBackground: true,topMargin: "0px" });

/* In your "index.html" file include just the below two container div "container-SB" Div & "nav-container-SB" Div, as below, replace your image source path and your Blog description */

<!-- Copy paste below template, replace image source path and blog description, this is the first container -->
&lt;div class="container-SB"&gt; 
            &lt;div &gt; 
                &lt;img  src="got1.jpeg" /&gt; 
            &lt;div &gt; 
                    &lt;div &gt;&lt;p&gt;Game Of Thrones&lt;/p&gt;&lt;/div&gt;
                    &lt;div &gt; 
                        &lt;p&gt; 
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
&lt;/div&gt;

<!-- Copy paste below template, replace image source path, this is the second container -->
&lt;div class="nav-container-SB"&gt;
            &lt;div &gt;
                 &lt;img  src="" /&gt;
                 &lt;div &gt; &lt;/div&gt;
             &lt;/div&gt;
 &lt;/div>

/* Run the index.html using the browser */

index.html

/* Run the SpecRunner.html using the browser for running the JASMINE test suites */

SpecRunner.html

## Documentation

You can find documentation at [SlideBlogNavigator.js on GitHub](https://github.com/Alok0110/DigiTool).

Current Version @ version 1.0 - SlideBlogNavigator.js

Load Image's and Article's Directly From Website @ version 2.0 - SlideBlogNavigator.js


## Option's setting while initiating SlideBlogNavigator


<b>Option</b> : image
<b>Default</b>: true
<b>Function's as</b>: When set true it singnals API that images are used in the Blog

<b>Option</b> : topMargin
<b>Default</b>: '0px'
<b>Function's as</b>: Used when menu header is present on top, this will ensure that Blog articles is not overlapped

<b>Option</b> : bottomMargin
<b>Default</b>: '0px'
<b>Function's as</b>: Used for providing extra space at bottom

<b>Option</b> : setImageAsBackground
<b>Default</b>: true
<b>Function's as</b>: Blog images are displayed as background images in a container, if false normal image container is used.

<b>Option</b> : setBackgroundColor
<b>Default</b>: '#dedede'
<b>Function's as</b>: Set's the background color of the website.

<b>Option</b> : imageBorderColor
<b>Default</b>: '#2980b9'
<b>Function's as</b>: Set's the Image border color.

<b>Option</b> : imageBorderStyle
<b>Default</b>: 'solid'
<b>Function's as</b>: Set's the Image border style.

<b>Option</b> : imageBorderWidth
<b>Default</b>: '3px'
<b>Function's as</b>: Set's the Image border width.


## API's methods ( Few CSS methods under construction )

<b>Method</b>: setAutomaticScroll( --boolean-- )
<b>Default</b>: No click event assigned
<b>Function's</b>: Assign's click event to Navigation Panel

<b>Method</b>: setAutoNavPanelScroll( --boolean-- )
<b>Default</b>: No scroll event assigned
<b>Function's</b>: Assign's scroll event to Blog Navigation

