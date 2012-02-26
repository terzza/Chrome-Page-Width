var firstWidthSet = false;
var originalWidth ;
var originalMarginLeft;
var originalMarginRight;
var lastSliderVal = 100;
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (!firstWidthSet){
        originalWidth = document.getElementsByTagName('body')[0].style["width"];
        originalMarginLeft = document.getElementsByTagName('body')[0].style["margin-left"];
        originalMarginRight = document.getElementsByTagName('body')[0].style["margin-right"];
        firstWidthSet = true;
    }
    document.getElementsByTagName('body')[0].style["width"] = request.sliderVal+"%";
    document.getElementsByTagName('body')[0].style["margin-left"] = "auto";
    document.getElementsByTagName('body')[0].style["margin-right"] = "auto";
    if (request.sliderVal == 100){
        document.getElementsByTagName('body')[0].style["width"] = originalWidth;
        document.getElementsByTagName('body')[0].style["margin-left"] = originalMarginLeft;
        document.getElementsByTagName('body')[0].style["margin-right"] = originalMarginRight;
        //console.log("Hit 100, reset to normal");
    }
  });

