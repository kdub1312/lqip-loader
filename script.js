window.addEventListener('load', getHighRes);

var lowResImages;
    
function getHighRes() {
    //collect nodeList of images that have the data-highRes attr
    lowResImages = document.querySelectorAll("img[data-highRes]");
    
    //loop thru the dataset of nodeList 
    for (i = 0; i < lowResImages.length; i++) {
        //check that a value is present in each data-highRes
        if (lowResImages[i].getAttribute('data-highRes') != "") {
            //assign highRes image urls to variable
            lowResImages[i].src = lowResImages[i].getAttribute('data-highRes');
        }
        
    }
}
