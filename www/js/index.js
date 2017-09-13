$(document).ready(function(){
    var $newTaskInput = $('#newTaskInput');
    var $taskList = $('#taskList');

    $('#addNewTask').on('click', function(){
        var newTask = '<li class="list-group-item"><span>' + $newTaskInput.val() + '</span></li>';
        $taskList.append(newTask);
        $newTaskInput.val('');
    });


});
