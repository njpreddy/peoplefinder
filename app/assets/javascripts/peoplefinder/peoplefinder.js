/* global $, document */

$(function() {
  $(document).on('click', '#add_membership', function(e) {
    e.preventDefault();
    $.ajax({
      url: this,
      success: function(data) {
        var el_to_add = $(data).html();
        $('#memberships').append(el_to_add);
      }
    });
  });

  $(document).on('click', 'a.remove-new-membership', function(e) {
    e.preventDefault();
    $(this).parents('.membership').remove();
  });

  $(document).on('click', 'a.show-editable-fields', function(e) {
    e.preventDefault();
    $(this).closest('.editable-summary').hide();
    $(this).closest('.editable-container').children('.editable-fields').show();
  });

  $(document).on('click', '#person_no_phone', function() {
    $('#person_primary_phone_number').val('');
    $('#person_secondary_phone_number').val('');
    $('.phone_numbers').toggle();
  });
});
