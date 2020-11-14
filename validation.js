$(document).ready(function () {
    var myRules =
        {
            height:
            {
                required: true,
                min: 59,
                max: 79,
                digits: true
            },
            weight:
            {
                min: 88,
                max: 353,
                required: true,
                digits: true
            }
        };
    var myMessages =
        {
            height:
                {
                    required: "Put a number in here",
                    min: "Too Low",
                    max: "Too High",
                    digits: "Put a number in here"
                },
            weight:
                {
                    min: "Too Low",
                    max: "Too High",
                    required: "Put a number in here",
                    digits: "Put a number in here"
                }
        };
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages

        }
    );

    function runMyProgram() {
        var weight = parseInt($("#Weight").val());
        var height = parseInt($("#Height").val());
        var heightsq = height * height;
        var unfinishedBMI = weight/heightsq
        var bmi = unfinishedBMI*703
        var category
        if(bmi < 18.5){
            category = "underweight"
        }
        else if(bmi >= 18.5 && bmi < 25){
            category = "normal"
        }
        else if(bmi >= 25 && bmi < 30){
            category = "overweight"
        }
        else{
            category = "obese"
        }
        $("#message").text("You have a Body-Mass Index of " + bmi.toFixed(2) + " which makes you " + category + ".")

    }



});