/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var ha = "";
    for (i = 0; i < num; i++){
        ha += "ha";
    }
    return ha + "!";
};

    console.log(laugh(10));