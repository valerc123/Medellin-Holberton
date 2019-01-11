document.addEventListener ("DOMContentLoaded", function (event) { 
    var thumbnailElement = document.getElementById ("smart_thumbnail");
    thumbnailElement.addEventListener ("click", function () {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
            console.log("grande a pequeña");
        }
        else{
            thumbnailElement.className = "";
            console.log("pequeña a grande");
        }
      });

});