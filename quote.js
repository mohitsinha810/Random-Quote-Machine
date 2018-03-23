
let q=[
	"It's hard to be humble, when you're as great as I am.","Many people die at 25 and are not buried till they are 75",
	"Life can only be understood backwards; but it must be lived forwards.","Beware the barrenness of a busy life.",
	"If you try, you risk failure. If you don’t, you ensure it.","There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
		"Never take admission in MSIT"];
let a=["Muhammad Ali","Benjamin franklin","Soren Kierkegaard","Socrates","Anonymous","Albert Eienstein","Kushal Vankalaya"];
let c=["red","tomato","purple","green","powderblue","black","goldenrod"];
	$(document).ready(function(){
	$('#press').click(function(){
	let no=Math.floor(Math.random()*(q.length));
	put(no);
	});
	function put(no){
	$('#para1').text(String(q[no]));
	$('#footer1').text('-'+String(a[no]));
	$('.container').css('background-color',String(c[no]));
	$('#box').css('color',String(c[no]));
	$('.twitter-share-button').attr('href','https://twitter.com/intent/tweet?text='+String(q[no]));
	
	}
			});