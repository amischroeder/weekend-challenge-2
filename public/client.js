$(document).ready(function () {
    $('#addButton').on('click', function () {
        console.log('addButton clicked!');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber,
            type: "Add"
        }
        function addNumbers() {
            var sum = parseInt(inputObject.firstInput) + parseInt(inputObject.secondInput);
            $('body').append('<div>' + sum + '</div>')
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
    function getNumbers() {
        $.ajax({
            method: 'GET',
            url: '/calculator',
            success: function (response) {
                console.log(response);
                addNumbers(response);
            }
        })
    }
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
            $('body').append('<div>' + sum + '</div>')
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

        function getNumbers() {
            $.ajax({
                method: 'GET',
                url: '/calculator',
                success: function (response) {
                    console.log(response);
                    subtractNumbers(response);
                }
            })
        }
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
            $('body').append('<div>' + sum + '</div>')
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

        function getNumbers() {
            $.ajax({
                method: 'GET',
                url: '/calculator',
                success: function (response) {
                    console.log(response);
                    multiplyNumbers(response);
                }
            })
        }
    })
});