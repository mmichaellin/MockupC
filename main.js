$('.cart-button').click(function(){
  $('#modal-container').removeAttr('class').addClass('action')
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
