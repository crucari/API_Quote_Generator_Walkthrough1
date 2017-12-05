/*global $ */

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/
// http://fontawesome.io/icons/

var qGenerator={
    quote: "",
    author: "",
    getQuote: function(){
        var that= this;
        $.ajax({
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            dataType: "json",
            success: function(data){
                console.log(data); //sanity check, doesn't have to be labeled data, can be anything//
                that.quote = data.quote; 
                that.author = data.author;
                that.displayQuote();
                
            } 
        })
},
displayQuote: function(){
     document.getElementById("insertQuote").innerHTML = qGenerator.quote;
     document.getElementById("insertAuthor").innerHTML = qGenerator.author;
}
}

document.getElementById("newQuote").onclick = function(){
    qGenerator.getQuote();
    
}

document.getElementById("postTwitter").onclick = function(){
    window.open("https://twitter.com/intent/tweet?text="+'"' + qGenerator.quote+ '"'+ '-' + qGenerator.author);
}

qGenerator.getQuote();