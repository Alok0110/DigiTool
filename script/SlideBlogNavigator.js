;(function(global, $){
    
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
     * This variable exposes test functions to the global environment for testing purposes only
     * This variable should always be set to true before running the Jasmine Test Suite
     */
    global.jasmineTestSuiteRun = false;
    
    /*
     * Initialize, obj is the options object  
     */
    var SlideBlogNav = function( obj ) {
            console.log("print this first ==> 1"+JSON.stringify(global.$SB));
            return new SlideBlogNav.init( obj );
    }

    /*
     * Initialize, default options in case no options are
     * provided 
     */
    var defaultVar = {
        image: true,
        topMargin: "0px",
        bottomMargin: "0px"
    };
    
    
    /*
     * API functionalities
     */
    SlideBlogNav.prototype = {
        
        testMethod: function() {
            var self = this;
            console.log("First API method call, check default var first ==> "+defaultVar.image);
            return defaultVar.image;
        },
        
        testMethodTwo: function(){
            console.log("check method chaining ==> "+defaultVar.image);
            return this;
        },
        
        defaultVar: defaultVar
    };
    
    SlideBlogNav.init = function( obj ) {
        var self = this;
        if( obj ) {
            Object.getOwnPropertyNames(obj).forEach(function (obj, index){
                if( !self.defaultVar[obj] ) {
                       throw new Error("Invalid option's"); 
                }
            });   
        }
        self.obj = obj || self.defaultVar;
        
    }
    
    SlideBlogNav.init.prototype = SlideBlogNav.prototype;
    
    /*
     * Exposing $SB and SlideBlogNav variables to global environment
     */
    global.SlideBlogNav = global.$SB = SlideBlogNav;
    
}(window, jQuery));


