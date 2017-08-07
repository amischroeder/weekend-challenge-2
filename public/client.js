$(document).ready(function () {
    $('.mathButtons').on('click', function () {
        getNumbers();
        console.log('Math button clicked');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val(); 
        var mathType = $(this).attr('id');
        console.log(mathType);

        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: mathType
        };
        console.log(inputObject);

        $.ajax({
             method: 'POST',
             url: '/calculator',
             data: inputObject,
             success: function (response) {
                 console.log(response);
                 getNumbers();
             }
         })
    }) //end click math button

      function getNumbers() {
        $.ajax({
            method: 'GET',
            url: '/calculator',
            success: function (response) {
                console.log(response);
                getResult(response);
            }
        })
    }

    function getResult(response){
        $('#answerSpace').append(response);
    }
    $('#clearButton').on('click', function () {
        console.log('clearButton clicked!');
        $('#numberOne').val('');
        $('#numberTwo').val('');
        $('#answerSpace').empty();
    })

    // $('#addButton').on('click', function () {
    //     function addNumbers() {
    //         var sum = parseInt(inputObject.firstInput) + parseInt(inputObject.secondInput);
    //         $('#answerSpace').append('<div>' + sum + '</div>')
    //     }
    // });
    // $('#subtractButton').on('click', function () {
    //     function subtractNumbers() {
    //         var sum = parseInt(inputObject.firstInput) - parseInt(inputObject.secondInput);
    //         $('#answerSpace').append('<div>' + sum + '</div>')
    //     }
    // })
    // $('#multiplyButton').on('click', function () {
    //     console.log('multiplyButton clicked!');
    //     function multiplyNumbers() {
    //         var sum = parseInt(inputObject.firstInput) * parseInt(inputObject.secondInput);
    //         $('#answerSpace').append('<div>' + sum + '</div>')
    //     }
    // })
    // $('#divideButton').on('click', function () {
    //     console.log('divideButton clicked!');
    //     function divideNumbers() {
    //         var sum = parseInt(inputObject.firstInput) / parseInt(inputObject.secondInput);
    //         $('#answerSpace').append('<div>' + sum + '</div>')
    //     }
    // })
});