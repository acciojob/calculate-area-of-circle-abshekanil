 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user

	 let radiusInput = parseInt(radius);

	 if(!isNaN(radiusInput) && radiusInput > 0)
	 {
		 var area = Math.PI * Math.pow(radiusInput , 2);
	 }

	 let roundedAns = Math.round(area * 100) / 100;

	 alert("The area of the circle with radius " + radius + " is " + roundedAns);
           
}
calculateArea();
