var up = document.getElementById('up');

addEventListener("scroll" , function()
{
    if( window.scrollY >=300 )
    {
        up.style.display="block";
    }
    else{
        up.style.display="none";

    }
} )

up.addEventListener( 'click' , function()
{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })

} )

////////////////////////////////////

var barr = document.getElementById('navbar');
var mnav = document.getElementById('m-nav');


barr.addEventListener( 'click' , function()
{
    mnav.classList.toggle( 'hide-show-nav' );

} )
//////////////////////////////////////////////////

var mn = document.querySelectorAll('#m-nav li a');

mn.forEach( i =>
    {
        i.addEventListener( 'click' , (e)=>
        {
            e.preventDefault();
            mnav.classList.toggle('hide-show-nav');
        } )

    } )

/////////////////////////////////////////////////////

var navv = document.querySelectorAll( '.nav-right ul li a' );

navv.forEach( a =>
    {
        a.addEventListener( 'click' , function(e)
        {
            e.preventDefault();
           var sec = document.getElementById( a.getAttribute('data-link') );
           sec.scrollIntoView({
            behavior:'smooth',
            block: 'start'
           });

           ///

        } )
    } )

//////////////////////////////////////////////////

