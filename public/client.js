$(document).ready(function () {
     function getNumbers() {
        $.ajax({
            method: 'GET',
            url: '/calculator',
            success: function (response) {
                console.log(response);
                addNumbers (response);
                subtractNumbers(response);
                multiplyNumbers (response);
                divideNumbers (response);
            }
        })
    }
    $('.math').on('click', function () {
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val(); 

    })
    $('#addButton').on('click', function () {
        console.log('addButton clicked!');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: ''
        }
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
        console.log('subtractButton clicked!');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: "Subtract"
        }
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
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: "Multiply"
        }
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
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: "Divide"
        }
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