$('li').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('hover');
});

$('li').mouseout(function()
{
    $(this).removeClass('hover');
});

