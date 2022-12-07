
$('.gallery-item').click(function()
{
  var src=$(this).find('img').data('full');
  $('.img-view-item img').attr('src',src);
  $('.img-view-item').css('display','block');
  $('.monitor').css('display','none');
  $('.img-view').css('display','flex');
//  console.log($('.img-view-item img').attr('src'));
  });
  $('.img-view').click(
    function(){
        $('.img-view-item').css('display','none');
        $('.img-view').css('display','none');
        $('.monitor').css('display','block');
    });
