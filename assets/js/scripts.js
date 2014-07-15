function timeSince(date) {
  var d = new Date(date);
  var now = new Date();
  
  var years = inYears(d, now);
  if(years>0) return years+"Y";

  var months = inMonths(d, now);
  if(months>0) return months+"M";

  var weeks = inWeeks(d, now);
  if(weeks>0) return weeks+"W";

  var days = inDays(d, now);
  if(days>0) return days+"D";

  return "New";
}

function inDays(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();

  return parseInt((t2-t1)/(24*3600*1000));
}
 
function inWeeks(d1, d2) {
  var t2 = d2.getTime();
  var t1 = d1.getTime();

  return parseInt((t2-t1)/(24*3600*1000*7));
}
 
function inMonths(d1, d2) {
  var d1Y = d1.getFullYear();
  var d2Y = d2.getFullYear();
  var d1M = d1.getMonth();
  var d2M = d2.getMonth();

  return (d2M+12*d2Y)-(d1M+12*d1Y);
}
 
function inYears(d1, d2) {
  return d2.getFullYear()-d1.getFullYear();
}
