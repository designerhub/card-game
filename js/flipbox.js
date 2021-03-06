  $(document).ready(function(){
    $('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

    // set up click/tap panels
    $('.click').toggle(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

    // set up block configuration
    $('.block .action').click(function(){
      $('.block').addClass('flip');
    });
    $('.block .edit-submit').click(function(e){
      $('.block').removeClass('flip');

      // why not update that list for fun?
      $('#list-title').text($('#form_title').val());
      $('#list-items').empty();
      for (var num = $('#form_items').val(); num >= 1; num--) {
        $('#list-items').append('<li>Super seller</li>');
      }
      e.preventDefault();
    });

    // set up contact form link
    $('.contact .action').click(function(e){
      $('.contact').addClass('flip');
      e.preventDefault();
    });
    $('.contact .edit-submit').click(function(e){
      $('.contact').removeClass('flip');
      e.preventDefault();
    });

  });
