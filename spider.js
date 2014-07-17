/**
 * Created by Kelun on 7/2/14.
 */
//use request to set up http request
var request = require("request")
//use cheerio to deal with data
    ,cheerio = require("cheerio")
    ,iconv = require('iconv-lite');

var options = {
    encoding: null,
    url: 'http://tieba.baidu.com/f?kw=%B1%B1%BE%A9%B9%FA%B0%B2&fr=index'
};
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var arr = [];
        //load data

        var result = iconv.decode(body, 'GBK');
        var $ = cheerio.load(result);
        /* 1.find all element which class name is 'team-name'
           2.Iterate these elements, and save the text inside the element into an array
           3.$(this) is equal to elm
         */

        //console.log(result);
        $('.j_th_tit').each(function(i, elm){
            var title = $(this).text();
            arr[i] = title;
        });
        console.log(arr);
    }
});