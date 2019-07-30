function Submit(){

		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
        var comment = document.getElementById("comment").value;
		var fullName = fname + " " + lname;
		localStorage.setItem("Full Name", fullName);
        localStorage.setItem("Comment", comment);
		window.location = "display.html";
};