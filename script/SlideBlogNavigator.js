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
         * Set's all the required settings
         * Pass DOM element as parameter's for Jasmine test suite
         */
        runSlideBlogNavEngine: function( /* parentDomContainerElement, parentDomNavigationContainerElement */ ){
            var self = this;
            
            var BigExternalContainer = $("<div></div>");
            BigExternalContainer.addClass("container-fluid");
            BigExternalContainer.css("background-color",""+self.checkProperty( self.obj.setBackgroundColor, self.defaultVar.setBackgroundColor ));
            BigExternalContainer.css("margin-top",""+self.checkProperty( self.obj.topMargin, self.defaultVar.topMargin ));
            
            var ParaFirstContainer = $(".container-SB");
            ParaFirstContainer.addClass("row");
            
            var ParaSecondContainer = $(".nav-container-SB");
            BigExternalContainer.append( ParaFirstContainer );
            BigExternalContainer.append( ParaSecondContainer );
            
            var firstEle = $("body").children().first();
            if( $.type( firstEle ) !== "undefined" ) {
                  $( firstEle ).after( BigExternalContainer );  
            }
            else {
                $("body").prepend( BigExternalContainer );
            }
            
            
                if( $(".container-fluid").get(0) ) {
                    //alert("ok")
                    var firstChilds = $(".container-SB").children();
                    console.log("These are first childs of ==> "+firstChilds);
                    firstChilds.each(function(ind, ele){
                    console.log("first child"+ind);
                    $(ele).addClass("col-sm-9");
                    $(ele).addClass("col-md-9");
                    $(ele).addClass("col-lg-9");
                    var imgSet = $(ele).find("img");
                    console.log("test each image ==> "+imgSet.length);
                        
                    var DescriptionBlock = $(imgSet).siblings();
                        
                        
                    if( imgSet.length > 1 ) {
                        throw new Error("More than one image element found!");        
                    }
                    else {
                            var setImg;
                            setImg = self.checkProperty( self.obj.setImageAsBackground, self.defaultVar.setImageAsBackground );
                            
                            if( setImg ) {
                                    var tempDivHolder = $("<div></div>");
                                    var srcOfFile = imgSet.attr("src");
                                    //alert("ok ==> "+srcOfFile);
                                    tempDivHolder.css("background-image","url("+srcOfFile+")");
                                    tempDivHolder.css("background-position","center");
                                    tempDivHolder.css("background-size","cover");
                                    tempDivHolder.css("border-color",""+self.checkProperty( self.obj.imageBorderColor, self.defaultVar.imageBorderColor ));
                                    tempDivHolder.css("border-style",""+self.checkProperty( self.obj.imageBorderStyle, self.defaultVar.imageBorderStyle ));
                                    tempDivHolder.css("border-width", ""+self.checkProperty( self.obj.imageBorderWidth, self.defaultVar.imageBorderWidth ));
                                    tempDivHolder.css("height","400px");
                                    imgSet.addClass("image-no-SB");
                                    imgSet.css("display","none");
                                    //tempDivHolder.insertAfter(ele);
                                    //$(ele).after(imgSet);
                                    $(ele).prepend(tempDivHolder);
                            }
                            else {
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
                        
                        /*if( headingContainer.length > 2 ) {
                            throw new Error("More than two container found for heading");
                        }
                        else {
                            headingContainer.css("text-align","center");
                            headingContainer.css("font-weight","bold");
                            headingContainer.css("font-size","25px");
                            headingContainer.css("color","#2980b9");
                        }*/
                    }
                        
                });
            }
            
            
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


