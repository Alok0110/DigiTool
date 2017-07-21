;(function (global, $){
    
    // auto scroll true or false - default true
    // auto mobile button option, hover of right panel - default false
    // auto sample description show on hover of right panel - default false
    // set top margin through API - default 0px
    // set bottom margin through API - default 0px
    // set background color content holder - default
    // set background color left panel holder - default
    
    
    /*
     * Check if jquery is loaded first  
     */
    if( !$ ){
        throw new  Error("jQuery not loaded");
    }
    
    /*
     * Initialize, obj is the options object  
     */
    var SlideBlogNav = function( obj ) {
            console.log("print this first ==> 1"+JSON.stringify(global.$SB)+" "+$.isEmptyObject(global.$SB));
            return new SlideBlogNav.init( obj );
    }

    /*
     * Initialize, default options in case no options are
     * provided String / boolean
     */
    var defaultVar = {
        image: true,
        topMargin: "0px",
        bottomMargin: "0px",
        setImageAsBackground: true,
        setBackgroundColor: "#dedede",
        imageBorderColor: "#2980b9",
        imageBorderStyle: "solid",
        imageBorderWidth: "3px",
        blogTitleFontSize: "25px",
        blogTitleTopMargin: "20px",
        blogTitleBottomMargin: "20px",
        blogTitleFontColor: "#2980b9"
    };
    
    /*
     * Internal settings
     *
     */
    var innerSettings = {
        
    };
    
    var obj = {};
    
    /*
     * API functionalities
     */
    SlideBlogNav.prototype = {
        
        /*
         * The Navigator will only indicate which Blog is selected but will not
         * Auto scroll to the desired Blog if the parameter passed is false
         */
        autoScrollOnNavEnable: function( isEnabledAutoScroll ) {
        
            if( isEnabledAutoScroll ) {
                
            }
            
            return this;
        },
        
        /*
         * The Navigator will hide itself if parameter passed to this method is
         * true
         */
        showSampleDescription: function( isEnabledSampleShow ) {
        
            if( isEnabledSampleShow ) {
                
            }
            
            return this;
        },
        
        /*
         * Set top margin in px, pass pixel to this function
         */
        setTopMargin: function( pxValue ){
            
            if( pxValue ) {
                
            }
            
            return this;
            
        },
        
        /*
         * Set bottom margin in px, pass pixel to this function
         */
        setBottomMargin: function( pxValue ){
            
            if( pxValue ) {
                
            }
            
            return this;
            
        },
        
        /*
         * The Navigator will hide itself if parameter passed to this method is
         * true
         */
        autoHideNavigation: function( isEnabledAutoHide ) {
        
            if( isEnabledAutoHide ) {
                
            }
            
            return this;
        },
        
        /*
         * Performs the scroll animation
         * 
         */
        scrollAnimation: function( posAnim ) {
            var self = this;
            $( 'body' ).animate({scrollTop: ""+posAnim[1]+"px" },500);
            
        },
        
        /*
         * Finds the position's
         * 
         */
        findPos: function( objT ) {
            var curleft = curtop = 0;
            if (objT.offsetParent) {
            
                do {
                        curleft += objT.offsetLeft;
                        curtop += objT.offsetTop;
                    } while (objT = objT.offsetParent);
                
            }
            return [curleft,curtop];
        },
        
        /*
         * Bind an event to the Navigator click
         * set paramenter to false in order to unbind event
         */
        setAutomaticScroll: function( isEnabledAutoNavigationScroll ) {
            var self = this;
                var cnt=0;
                while( true ) {
                    console.log("run "+cnt);
                    if( $(".control-nav-x-"+cnt).get(0) ) {
                        
                        if( isEnabledAutoNavigationScroll ) {
                            $(".control-nav-x-"+cnt).bind("click",function( e ){
                                var cT = e.currentTarget;
                                var getCid = $(cT).attr("class");
                                var lastInd = getCid.lastIndexOf("-");
                                var tempStr = getCid.substring(0,lastInd)+"x"+getCid.substring(lastInd);
                                tempStr = tempStr.trim();
                                self.scrollAnimation( self.findPos( $("."+tempStr).get(0) ) );
                            });
                        } else if ( !isEnabledAutoNavigationScroll ) {
                            $(".control-nav-x-"+cnt).unbind("click");
                        }
                        
                    }
                    else {
                        break;
                    }
                    cnt++;
                }
        },
        
        
        
        /*
         * Check's the user setting's or returns default setting's
         */
        checkProperty: function( userSetting, defaultSetting ) {
            if( $.type(userSetting) === "undefined" ) {
                    return defaultSetting;
            }
            else {
                    if( $.type(userSetting) !== $.type(defaultSetting)  ) {
                        throw new Error("The type of option's provided is not correct");
                    }
                    return userSetting;
            }
        },
        
        /*
        /* This Function Add's The Basic Setup Only
        /* Handles CSS For Main Panel
        /*
        */
        commonFuncForImageAndDescription: function(ind, ele, self, optionSelect) {
            
                    console.log("first child"+ind);
                    if( optionSelect === "containerSB" ) {
                        $(ele).addClass("col-sm-9");
                        $(ele).addClass("col-md-9");
                        $(ele).addClass("col-lg-9");
                        $(ele).addClass("control-nav-xx-"+ind);
                    }
                    else if( optionSelect === "NavcontainerSB" ) {
                        
                    }
                    
                    var imgSet = $(ele).find("img");
                    console.log("test each image ==> "+imgSet.length);
                        
                    var DescriptionBlock = $(imgSet).siblings();
                        
                        
                    if( imgSet.length > 1 ) {
                        throw new Error("More than one image element found!");        
                    }
                    else {
                           
                            var setImg;
                            setImg = self.checkProperty( self.obj.setImageAsBackground, self.defaultVar.setImageAsBackground );
                            if( optionSelect === "NavcontainerSB" ) {
                                setImg = true;
                            }
                        
                            var tempDivHolder = $("<div></div>");
                            var srcOfFile = imgSet.attr("src");
                            //alert("ok ==> "+srcOfFile);
                            tempDivHolder.css("background-image","url("+srcOfFile+")");
                            tempDivHolder.css("background-position","center");
                            tempDivHolder.css("background-size","cover");
                            tempDivHolder.css("border-color",""+self.checkProperty( self.obj.imageBorderColor, self.defaultVar.imageBorderColor ));
                            tempDivHolder.css("border-style",""+self.checkProperty( self.obj.imageBorderStyle, self.defaultVar.imageBorderStyle ));
                            tempDivHolder.css("border-width", ""+self.checkProperty( self.obj.imageBorderWidth, self.defaultVar.imageBorderWidth ));
                            
                            
                            if( optionSelect === "NavcontainerSB" ) {
                                tempDivHolder.css("height","150px");
                                tempDivHolder.css("cursor","pointer");

                            }
                            else {
                                tempDivHolder.css("height","400px");
                            }
                        
                            if( setImg ) {
                                    
                                    
                                    imgSet.addClass("image-no-SB");
                                    imgSet.css("display","none");
                                    //tempDivHolder.insertAfter(ele);
                                    //$(ele).after(imgSet);
                                    
                                    $(ele).prepend(tempDivHolder);
                            }
                            else {
                                    
                                    tempDivHolder.css("display","none");
                                    $(ele).prepend(tempDivHolder);
                                    
                                    imgSet.css("display","block");
                                    imgSet.css("height","auto");
                                    imgSet.css("max-width","100%");
                                    imgSet.css("border-color",""+self.checkProperty( self.obj.imageBorderColor, self.defaultVar.imageBorderColor ));
                                    imgSet.css("border-style",""+self.checkProperty( self.obj.imageBorderStyle, self.defaultVar.imageBorderStyle ));
                                    imgSet.css("border-width", ""+self.checkProperty( self.obj.imageBorderWidth, self.defaultVar.imageBorderWidth ));
                                    imgSet.css("margin","auto");
                                    imgSet.css("text-align","center");
                            } 
                    }
                        
                    if( DescriptionBlock.length > 1 ) {
                        throw new Error("More than one container found for displaying the blog article's heading and contents, wrong format!");        
                    }
                    else {
                        
                        if( optionSelect !== "NavcontainerSB" ) {
                            
                            var headingOfBlog = DescriptionBlock.first();
                            var descArr = DescriptionBlock.children();
                            //var bodyOfBlog = descArr[1];
                            //var headingOfBlog = descArr[0];

                            descArr.each(function( ind, ele ) {
                                if( ind === 0 ) {
                                      $(ele).css("text-align","center");  
                                      $(ele).css("font-weight","bold"); 
                                      $(ele).css("font-size",""+self.checkProperty( self.obj.blogTitleFontSize, self.defaultVar.blogTitleFontSize ));
                                      $(ele).css("color",""+self.checkProperty( self.obj.blogTitleFontColor, self.defaultVar.blogTitleFontColor ));
                                      $(ele).css("margin-top",""+self.checkProperty( self.obj.blogTitleTopMargin, self.defaultVar.blogTitleBottomMargin ));
                                      $(ele).css("margin-bottom",""+self.checkProperty( self.obj.blogTitleBottomMargin, self.defaultVar.blogTitleBottomMargin ));
                                }
                                if( ind === 1 ) {
                                    $(ele).css("display","inline-block");
                                    $(ele).css("width","70%");
                                    $(ele).css("margin-left","15%");
                                    $(ele).css("margin-right","15%");
                                    $(ele).css("margin-bottom","20px");
                                }
                            });
                            
                        }
                        
                        
                }
            
        },
        
        /*
        /* This Function Handles CSS For Navigation Panel
        /* 
        /*
        */
        commanFunctionForNavigationPanel: function( imgItr1, imgItr2 ) {
                this.imgItr1 = imgItr1;
                this.imgItr2 = imgItr2;
            if( imgItr1 && imgItr2 ){
                    Object.keys( imgItr2 ).forEach( function(ele, ind) {

                            if( imgItr2[ind] ) {

                                if( $(imgItr1[ind]).css("background-image") !== 'none' ) {

                                    $(imgItr2[ind]).addClass("control-nav-x-"+(ind/2));
                                    $(imgItr2[ind]).css( "background-image", ""+$(imgItr1[ind]).css( "background-image" ) );
                                }
                                else {

                                    $(imgItr2[ind]).html( ""+$(imgItr1[ind]).children("div").first().html() );
                                    $(imgItr2[ind]).children("p").css("text-align","center");
                                    $(imgItr2[ind]).children("p").css("font-weight","bold");

                                }

                            }
                    } );
               } else {
                   throw new Error("Image Elements missing");
               }
        
        },
        
        
        /*
         * Set's all the required settings
         * Pass DOM element as parameter's for Jasmine test suite
         */
        runSlideBlogNavEngine: function( /* parentDomContainerElement, parentDomNavigationContainerElement */ ){
            var self = this;
            
            var loopCounter=true;
            var BigExternalContainer = $("<div></div>");
            BigExternalContainer.addClass("container-fluid");
            BigExternalContainer.css("background-color",""+self.checkProperty( self.obj.setBackgroundColor, self.defaultVar.setBackgroundColor ));
            //BigExternalContainer.css("margin-top",""+self.checkProperty( self.obj.topMargin, self.defaultVar.topMargin ));
            
            var ParaFirstContainer = $(".container-SB");
            ParaFirstContainer.addClass("row");
            ParaFirstContainer.css("margin-top",""+self.checkProperty( self.obj.topMargin, self.defaultVar.topMargin ));
            
            var ParaSecondContainer = $(".nav-container-SB");
            ParaSecondContainer.css("margin-top",""+self.checkProperty( self.obj.topMargin, self.defaultVar.topMargin ));
            ParaSecondContainer.addClass("scrollbar");
            ParaSecondContainer.attr("id","style-1");
            
            BigExternalContainer.append( ParaFirstContainer );
            //BigExternalContainer.append( ParaSecondContainer );
            
            var firstEle = $("body").children().first();
            if( $.type( firstEle ) !== "undefined" ) {
                  $( firstEle ).after( BigExternalContainer );
                  $( firstEle ).after( ParaSecondContainer );
            }
            else {
                $("body").prepend( BigExternalContainer );
                $( "body" ).after( ParaSecondContainer );
            }
            
            
                if( $(".container-fluid").get(0) ) {
                    //alert("ok")
                    var firstChilds = $(".container-SB").children();
                    console.log("These are first childs of ==> "+firstChilds);
                    
                    firstChilds.each(function(ind, ele){
                        self.commonFuncForImageAndDescription(ind, ele, self, "containerSB");
                    
                    });
                    
                    $(".nav-container-SB").css("display","block");
                    $(".nav-container-SB").css("margin-top",""+self.checkProperty( self.obj.topMargin, self.defaultVar.topMargin));
                    $(".nav-container-SB").css("height","100vh");
                    $(".nav-container-SB").css("width","25%");
                    $(".nav-container-SB").css("z-index","997");
                    $(".nav-container-SB").css("position","fixed");
                    $(".nav-container-SB").css("margin-left","75%");
                    $(".nav-container-SB").css("overflow","auto");
                    
                    var firstNavContainerChilds = $(".nav-container-SB").children();
                    console.log("These are first Nav childs of ==> "+firstNavContainerChilds);
                    
                    firstNavContainerChilds.each(function(ind, ele){
                        self.commonFuncForImageAndDescription(ind, ele, self, "NavcontainerSB");
                    
                    });
                    
            }
                   
                   var imgItr1 = ParaFirstContainer.find("img").siblings();
                   var imgItr2 = ParaSecondContainer.find("img").siblings();
                    
                   self.commanFunctionForNavigationPanel( imgItr1, imgItr2 );

        },
        
        /*
         * Required only when Html does not have necessary contents, In such
         * case users are allowed to add contents through API
         */
        addContents: function(imgSrc, actualContentsOfBlog ) {
            if( !($(".container-SB").get(0) && $(".nav-container-SB").get(0)) ) {
                throw new Error("Parent containers not found!");
            }
            if( imgSrc ) {
                console.log("No image selected");
            }
            else {
                
            }
            if( actualContentsOfBlog ){
                throw new Error("Contents are missing");
            }
            else {
                
            }
            
            return this;
        },
        
        defaultVar: defaultVar,
        
        innerSettings: innerSettings
    };
    
    SlideBlogNav.init = function( obj ) {
        var self = this;
        
        if($.type(obj) !==  "object" ) {
                throw new Error("Parameter passed is not of type Object");
        }
        
        self.obj = obj;
        if( obj ) {
            Object.getOwnPropertyNames(obj).forEach(function (obj, index){
                if( $.type(self.defaultVar[obj]) === "undefined" ) {
                       throw new Error("Invalid option's"); 
                }
            });   
        }
        else {
            self.obj = {};
        }
        console.log("check obj ==>  "+$(".container")+" ==> "+$(".nav-container"));
        if( !($(".container-SB").get(0) && $(".nav-container-SB").get(0)) ) {
               var par1 = $("<div></div>"), par2 = $("<div></div>");
               par1.addClass("container-SB");
               par2.addClass("nav-container-SB");
               $("body").append(par1).append(par2);
        }
        
        self.runSlideBlogNavEngine();
        
        self.obj = obj || self.defaultVar;
        
    }
    
    SlideBlogNav.init.prototype = SlideBlogNav.prototype;
    
    /*
     * Exposing $SB and SlideBlogNav variables to global environment
     */
    global.SlideBlogNav = global.$SB = SlideBlogNav;
    
}(window, jQuery));


