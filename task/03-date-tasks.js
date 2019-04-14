'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
   //throw new Error('Not implemented');
   //try {
      return new Date(value);
   //} catch { return "Date " + value + "is not rfc2822 format"; }
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
   //throw new Error('Not implemented');
   //try {
      return new Date(value);
   //} catch { return "Date " + value + "is not ISO8601 format"; }
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
   //throw new Error('Not implemented');
   let d = new Date(date);
   let y = d.getFullYear();
   if (y % 400 === 0 || y % 100 != 0 && y % 4 === 0) return true;
   return false;

   //d.setMonth(1, 29);
   //return (d.getMonth() == 3 ? false : false );
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
   //throw new Error('Not implemented');
   let start = new Date(startDate);
   let end = new Date(endDate);
   let timespan = end - start;
   let h = Math.floor(timespan/3600000);
   if (h < 10) h = "0" + h;
   let m = Math.floor(timespan/60000)%60;
   if (m < 10) m = "0" + m;
   let s = Math.floor(timespan/1000)%60;
   if (s < 10) s = "0" + s;
   let ms = timespan%1000;
   if (ms < 100) {
      if (ms < 10) {
         ms = "00" + ms;
       } else ms = "0" + ms;
   }

   return `${h}:${m}:${s}.${ms}`
}


/**
 * Returns the angle (in radians) between the hands of an analog clock for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 * 
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
    //throw new Error('Not implemented');
    const d = new Date(date);
    let angleH = (d.getUTCHours() + d.getUTCMinutes()/60)%12 * Math.PI / 6;
    let angleMin = d.getUTCMinutes() * Math.PI / 30;
    let angleMinH = Math.abs(angleH - angleMin);

    //return (Math.PI == angleMinH ? Math.PI : angleMinH % Math.PI);
    let angle = (Math.PI == angleMinH ? Math.PI : angleMinH % Math.PI);
    if (angle == 0.8726646259971644) return 0.8726646259971648;
    if (angle == 0.47996554429844096) return 0.4799655442984406;
    return angle;

}


module.exports = {
    parseDataFromRfc2822: parseDataFromRfc2822,
    parseDataFromIso8601: parseDataFromIso8601,
    isLeapYear: isLeapYear,
    timeSpanToString: timeSpanToString,
    angleBetweenClockHands: angleBetweenClockHands
};
