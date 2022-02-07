$(".hidden-toggle").hide();

$(document).ready(function ()
{
    toggle();
});


var rotated = false

function toggle()
{
   
    $('.toggle-trigger').click(function(e)
    {
        e.preventDefault();
        $(this).css('transform', rotated ? 'rotate(0deg)' : 'rotate(-270deg)');
        $(this).closest('.toggle-wrap').find('.toggle-area').slideToggle();
        rotated = !rotated;
    });
}

$('#id1').hide();