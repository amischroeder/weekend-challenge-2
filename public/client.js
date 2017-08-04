$(document).ready(function (){
    $('#addButton').on('click', function() {
        console.log('addButton clicked!');
        var firstNumber = $('#numberOne').val();
        var secondNumber = $('#numberTwo').val();
    });
});