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
    }) 

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
        $('#answerSpace').text(response);
    }
    $('#clearButton').on('click', function () {
        console.log('clearButton clicked!');
        $('#numberOne').val('');
        $('#numberTwo').val('');
        $('#answerSpace').empty();
    })
});