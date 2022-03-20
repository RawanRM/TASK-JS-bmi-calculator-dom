function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let calcBMI = weight / ((height / 100) ^ 2);

  document.getElementById("submit").onclick = function () {
    myFunction();
  };
  function myFunction() {
    // if(calcBMI < 18.5){
    //   alert("BMI: "+calcBMI+" Underweight")

    // } else if(calcBMI>=18.5 && calcBMI<= 24.9){
    //   alert("BMI: "+calcBMI+" Healthy Weight")

    // } else if(calcBMI >= 25.0 && calcBMI <= 29.9){
    //   alert("BMI: "+calcBMI+" Overweight")

    // } else if(calcBMI >= 30.0){
    //   alert("BMI: "+calcBMI+" Obesity")

    // }

    //CHALLENGE 3
    if (calcBMI <= 18.5) {
      if (age >= 19) {
        alert("Underweight!");
      }
    } else if (calcBMI >= 40) {
      alert("Obese");
    } else if (calcBMI >= 19 && calcBMI <= 24) {
      if (age >= 19 && age <= 24) {
        alert("Normal");
      }
    } else if (calcBMI >= 20 && calcBMI <= 25) {
      if (age >= 25 && age <= 34) {
        alert("Normal");
      }
    } else if (calcBMI >= 21 && calcBMI <= 26) {
      if (age >= 35 && age <= 44) {
        alert("Normal");
      }
    } else if (calcBMI >= 22 && calcBMI <= 27) {
      if (age >= 45 && age <= 54) {
        alert("Normal");
      }
    } else if (calcBMI >= 23 && calcBMI <= 28) {
      if (age >= 55 && age <= 64) {
        alert("Normal");
      }
    } else if (calcBMI >= 24 && calcBMI <= 29) {
      if (age > 65) {
        alert("Normal");
      }
    } else if (calcBMI >= 20 && calcBMI <= 39) {
      if (age >= 19 && age <= 24) {
        alert("Overweight");
      }
    } else if (calcBMI >= 21 && calcBMI <= 39) {
      if (age >= 25 && age <= 34) {
        alert("Overweight");
      }
    } else if (calcBMI >= 22 && calcBMI <= 26) {
      if (age >= 35 && age <= 44) {
        alert("Overweight");
      }
    } else if (calcBMI >= 23 && calcBMI <= 39) {
      if (age >= 45 && age <= 54) {
        alert("Overweight");
      }
    } else if (calcBMI >= 24 && calcBMI <= 39) {
      if (age >= 55 && age <= 64) {
        alert("Overweight");
      }
    } else if (calcBMI >= 25 && calcBMI <= 39) {
      if (age > 65) {
        alert("Overweight");
      }
    }
  }
}
