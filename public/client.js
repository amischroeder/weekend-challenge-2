$(document).ready(function (){
    $('#addButton').on('click', function() {
        console.log('addButton clicked!');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
        var inputObject = {
            firstInput: firstNumber,
            secondInput: secondNumber
        }
        $.ajax({
            method: 'POST',
            url: '/calculator',
            data: inputObject,
            success: function (response) {
                console.log(response);
            }
        })
    });
});