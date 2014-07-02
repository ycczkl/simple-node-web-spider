/**
 * Created by Kelun on 7/2/14.
 */
//use request to set up http request
var request = require("request");
//use cheerio to deal with data
var cheerio = require("cheerio");

request("http://www.fifa.com/worldcup/teams/index.html", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var arr = [];
        //load data
        var $ = cheerio.load(body);
        /* 1.find all element which class name is 'team-name'
           2.Iterate these elements, and save the text inside the element into an array
           3.$(this) is equal to elm
         */
        $('.team-name').each(function(i, elm){
            arr[i] = $(this).text();
        });
        console.log(arr);
    }
});