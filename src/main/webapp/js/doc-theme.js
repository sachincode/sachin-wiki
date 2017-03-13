// Don't display the sidebard on the iPhone. Will need to support other phones in the future.
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    AJS.$("#splitter-sidebar").hide();
}
else {

    // Main vertical splitter, anchored to the browser window
    var splitterOptions = {
        type: "v",
        outline: false,
        minLeft: 0, sizeLeft: 300, maxLeft: 500,
        anchorToWindow: true,
        accessKey: "L",
        cookie: "doc-sidebar",
        cookiePath: "/"
    };
    var splitterDiv = AJS.$("#splitter"),
        splitterButon = AJS.$("#splitter-button"),
        splitterSidebar = AJS.$("#splitter-sidebar");

    splitterDiv.splitter(splitterOptions);
    splitterButon.removeClass("hidden")
    .click(function(){
        if(splitterSidebar.width() > 0){
            splitterDiv.trigger("resize", [ 0 ]);
            AJS.$(this).addClass("collapsed");
        }
        else{
            splitterDiv.trigger("resize", [ 300 ]);
            AJS.$(this).removeClass("collapsed");
        }
    })
    .hover(function(){
                AJS.$(this).parent().addClass("opened");
            },
            function(){
                AJS.$(this).parent().removeClass("opened");
            }
    );
    if(splitterSidebar.width() == 0) {
        splitterButon.addClass("collapsed");
    }

    AJS.toInit(function() {
        // Hide the default browser scrollbars
        AJS.$("html").css("overflow", "hidden");
        AJS.$("body").css("overflow", "hidden");
        splitterOptions.update();
    });
}