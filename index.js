// var a=Math.min(0,150,30,20,-8,-200);
// alert("Hello "+a);
// a=new Date();
// alert("Hello "+a);
// a=new Date(milliseconds);
// alert("Hello "+a);
// a=new Date(dateString);
// alert("Hello"+a);
// a=new Date(year,month,day,hours,minutes,seconds);
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
alert(diffTime + " milliseconds");
alert(diffDays + " days");