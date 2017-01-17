$(document).ready(function(){
	if(document.getElementById("ENoption").checked)
	{
		$(".EN").show();
		$(".FR").hide();
	}
	else
	{
		$(".EN").hide();
		$(".FR").show();
	}
	 $('#someForm').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#comments').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/eric.grimard@polymtl.ca',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:comments,
                _subject:'My Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock').hide();
                $('#thankyouBlock').show();
            }   

        });     
        
    });
});
function toggleLang()
{
	if(document.getElementById("ENoption").checked)
	{
		$(".EN").show();
		$(".FR").hide();
	}
	else
	{
		$(".EN").hide();
		$(".FR").show();
	}
}
