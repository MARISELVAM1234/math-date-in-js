// const get = date.getDate()
// console.log(get);

const date = new Date()
console.log("year" ,date.getFullYear() );
console.log("month" ,date.getMonth());
console.log( "date" ,date.getDate());
console.log( "day" ,date.getDay());  //0-6 sunday to saturday
console.log( "hour" ,date.getHours());
console.log('mins' , date.getMinutes());
console.log('sec' , date.getSeconds());
console.log('millisec', date.getMilliseconds());
console.log( "UTCtimeZone" , date.getTimezoneOffset());
console.log("UTCDATE" , date.getUTCDate());
console.log("UTCDay" , date.getUTCDay());
console.log("UTCfullyear" , date.getUTCFullYear());
console.log("UTChour" , date.getUTCHours());
console.log("UTCMilli" , date.getUTCMilliseconds());
console.log("UTCmin" , date.getUTCMinutes());
console.log("UTCmonth" , date.getUTCMonth());
console.log("UTCsec" , date.getUTCSeconds());


//set date 
const date2 = new Date(2012 ,12,23, 10 ,34,50 ,60) //(year,month,date ,hour,minutes,sec , millisec)
 date2.setTime(12)
 console.log(date2.getTime());




 //math methods
 console.log("Euler Number",Math.E);
 console.log("log10" , Math.LN10);
 console.log("log2" , Math.LN2);
 console.log("PT " , Math.PI);
 console.log("square root 1\2 " , Math.SQRT1_2);
 console.log("square root 2 " , Math.SQRT2);
 console.log(" absolute" ,Math.abs(3 - 6));
 console.log("cuberoot" , Math.cbrt(80));
 console.log("ceil" ,Math.ceil(8.7));
 console.log("floor " , Math.floor(8.3));
 console.log("round" , Math.round(9.4));
 console.log("power",Math.pow(2,4));
console.log("random",Math.random());


// UTC time ipa irukura time kuda 10 ah add panna enna ahgum
