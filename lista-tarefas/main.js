$(document).ready(function() {

    $('button').click(function() {
        $('ul').slideDown();
    })


})

    $('form').on('submit', function(e) {
        
        e.preventDefault();

    const nomeTarefa = $('#tarefa-nome').val();
    const novaTarefa = $('<li></li>');
    
    $(`
        <li>${nomeTarefa}</li>
    `).appendTo(novaTarefa);
    
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).slideDown();

    $('#tarefa-nome').val('');

})


$('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('riscado');
})
