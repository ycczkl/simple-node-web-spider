/**
 * Created by Kelun on 7/3/14.
 */
var request = require('request');
var r = request.post('http://profitsi.com/clockin/timeclock.php', function optionalCallback (err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Successful');
});
console.log(process.argv[2]);
var form = r.form();
form.append('left_fullname', 'Kelun Zhang');
form.append('employee_passwd', 'welcomekelun');
form.append('left_inout', process.argv[2]);
form.append('submit_button', 'Punch Status');

//left_fullname	Kelun Zhang
//employee_passwd	welcomekelun
//left_inout	out
//left_notes
//submit_button	Punch Status
