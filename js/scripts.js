$(document).ready(function(){
	$(".btn").submit(function(event){

		numberInput = $("input#number").val();

		$("inputnumber").text(numberInput);

		$("#input").append(numberInput);

		event.preventDefault();

	})
})