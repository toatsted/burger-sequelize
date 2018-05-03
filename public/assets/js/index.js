$(() => {
	$("#addBurger").on("submit", function(e){
		e.preventDefault();

		$.ajax("/", {
			type: "POST",
			data: {
				name: $("#burgerInput").val().trim()
			},
			success: data => location.reload()
		})
	});
 	
	$(".eatBtn").on("click", function(e){
		let id = $(this).data("id");
		$.ajax(`/${id}`, {
			type: "PUT",
			data: {
				eaten: 1
			},
			success: data => location.reload()
		})
	});

	$(".delBtn").on("click", function(e){
		let id = $(this).data("id");
		$.ajax(`/${id}`, {
			type: "DELETE",
			success: data => location.reload()
		})
	});
});