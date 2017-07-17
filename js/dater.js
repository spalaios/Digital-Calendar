
$(function(){
	//creating date object
	var date=new Date();
	//getting minute value
	$minute=date.getMinutes();
	//getting hour value
	$hours=date.getHours();
	//getting day value
	$day=date.getDay();
	//getting month value
	$month=date.getMonth();
	//getting year value
	$year=date.getYear();
	//getting date value
	$date=date.getDate();
	//getting seconds value
	$seconds=date.getSeconds();
	//modified year value format
	 $yearmod=(($year-100)+2000);
	 //attaching circles class to hourcontainer
	$('#hourcontainer>div').addClass('circles');
	//attaching squares class to squarecontainer
	$('#datecontainer>div').addClass('squares');
	//date element
	$datenumber=$('<p>',{
		'text': $date,
		'id':'dat'
	});
	 $datebox=$('#datebox');
	 $datebox.append($datenumber);
	 //array for weekdays
	 var weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	 //day element
	 $day=$('<p>',{
	 	'text':weekdays[$day],

	 });
	 $('#daybox').append($day);
	 //array of months
	 var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	 //month element
	 $monthnum=$('<p>',{
	 	'text':months[$month],
		});
	 $('#monthbox').append($monthnum);
	 //year element
	 $yearnum=$('<h5>',{
	 	'text':$yearmod,
	 }).css({
	 	'font-weight':'500',

	 });
	 $('#yearbox').append($yearnum);
	 //hour element
	 $hournum=$('<p>',{
	 	'text':$hours,
	 });
	 $('#hourbox').append($hournum);
	 //minute element
	
	 $minutenum=$('<p>',{
	 	'text':$minute.toString().length <2 ? "0"+$minute : $minute
	 });
	 $('#minutebox').append($minutenum);
	 //seconds element
	 $secondnum=$('<p>',{
	 	'text':$seconds.toString().length <2 ? "0"+$seconds : $seconds
	 });
	 $('#secondsbox').append($secondnum);


	 $greeting=greet($hours,$minute);
	 $wishing=$('<h1>',{
	 	'text':'Hi there have a very '+$greeting,

	 });
	 $('#greeting').append($wishing);



	//logic for greeting 
	 function greet(hour,minute){
	var wish='';
	if ((hour>=5 && hour <12) && minute<=59) {
		wish='good morning';
	}
	else if ((hour >= 12 && hour <16) && minute<=59 ) {
		wish='good afternoon';
	}
	else if ((hour >= 16 && hour <20) && minute<=59) {
		wish='good evening';
	}
	else {
		wish='good night';
	}
	return wish;
}

// setInterval(refresh,1000);

// function refresh(){
// 	location.reload();
// }
});