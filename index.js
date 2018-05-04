var timer= null;
function race()
{
    document.getElementByID('rider1').style.right = parseInt(document.getElementById('rider1').style.right) + 945 + 'px';
    document.getElementByID('rider2').style.right = parseInt(document.getElementById('rider2').style.right) + 945 + 'px';
}
window.onload = function()
{
    document.getElementById('startButton').onclick=function()
    {
        if(timer == null)
	{
	    timer = setInterval("race()", 14);
        }
        else
	{
            clearInterval(timer);
            timer = null
        }
    }
    var restartButton = document.getElementById('restartButton');
    button2.onclick= reloadPage;

    function reload()
    {
        window.location.reload();
    }
}
