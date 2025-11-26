$(function(){
    $('#add').on('click', function(){
        $('#posts').append('<li>New post</li>');
    });
    $('#feat').on('click', function(){
        $('#posts').prepend('<li>Featured post</li>');
    });
    $('#rm').on('click', function(){
        $('#posts li:last').remove();
    });
    $('#posts').on('click','li', function(){
        $(this).after('<span class="tag"> #new</span>');
    });
    $('#posts li').each(function(){
        if($(this).text().toLowerCase().includes('three')) $(this).css('background','#fffae6');
    });
});