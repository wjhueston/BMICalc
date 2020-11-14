$(document).ready(function () {
    var myRules =
        {
            firstName:
            {
                required: true
            },
            grade:
            {
                min: 5,
                max: 8,
                digits: true,
                required: true
            }
        };
    var myMessages =
        {
            firstName:
                {
                    required: "Put something in here."
                },
            grade:
                {
                    min: "Too Low",
                    max: "Too High",
                    digits: "Wrong",
                    required: "Put something in here."
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
        var name = $("#firstName").val()
        var grade = $("#grade").val()
        $("#message").text(`You have successfully registered ${name} for grade ${grade} camp.`)


    }



});