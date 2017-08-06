$(document).ready(function () {
    //  function getNumbers() {
    //     $.ajax({
    //         method: 'GET',
    //         url: '/calculator',
    //         success: function (response) {
    //             console.log(response);
    //             addNumbers (response);
    //             subtractNumbers(response);
    //             multiplyNumbers (response);
    //             divideNumbers (response);
    //         }
    //     })
    // }
    $('.mathButtons').on('click', function () {
        console.log('Math button clicked');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val(); 
        var mathType = $(this).attr('id');
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: mathType
        };

    })
    $('#addButton').on('click', function () {
        function addNumbers() {
            var sum = parseInt(inputObject.firstInput) + parseInt(inputObject.secondInput);
            $('#answerSpace').append('<div>' + sum + '</div>')
        }
         $.ajax({
             method: 'POST',
             url: '/calculator',
             data: inputObject,
             success: function (response) {
                 console.log(response);
                 addNumbers();
             }
         })
    });
    $('#subtractButton').on('click', function () {
        function subtractNumbers() {
            var sum = parseInt(inputObject.firstInput) - parseInt(inputObject.secondInput);
            $('#answerSpace').append('<div>' + sum + '</div>')
        }
         $.ajax({
             method: 'POST',
             url: '/calculator',
             data: inputObject,
             success: function (response) {
                 console.log(response);
                 subtractNumbers();
             }
         })
    })
    $('#multiplyButton').on('click', function () {
        console.log('multiplyButton clicked!');
        function multiplyNumbers() {
            var sum = parseInt(inputObject.firstInput) * parseInt(inputObject.secondInput);
            $('#answerSpace').append('<div>' + sum + '</div>')
        }
         $.ajax({
             method: 'POST',
             url: '/calculator',
             data: inputObject,
             success: function (response) {
                 console.log(response);
                 multiplyNumbers();
             }
         })
    })
    $('#divideButton').on('click', function () {
        console.log('divideButton clicked!');
        function divideNumbers() {
            var sum = parseInt(inputObject.firstInput) / parseInt(inputObject.secondInput);
            $('#answerSpace').append('<div>' + sum + '</div>')
        }
         $.ajax({
             method: 'POST',
             url: '/calculator',
             data: inputObject,
             success: function (response) {
                 console.log(response);
                 divideNumbers();
             }
         })
    })
    $('#clearButton').on('click', function () {
        console.log('clearButton clicked!');
        $('#numberOne').val('');
        $('#numberTwo').val('');
        $('#answerSpace').empty();
    })
});