/*

 ***** NOTE *****

 This is a scratchpad.
 Used to demo UI effects, not intended for production!
 It's sketch code!

*/

$(function() {

  // add / remove job role in new_person
  $('#duplicatePanelTemplate').hide();

  $('#duplicatePanelControl').on('click', function(e) {
    e.preventDefault();
    $this = $(this);
    var $newPanel = $($('#duplicatePanelTemplate').html());
    $newPanel.insertBefore($this.parent());
    $newPanel.find('input').first().focus();
  });

  $('.roles').on('click', '.remove-parent-panel', function(e) {
    e.preventDefault();
    var $target = $(this).parents('.panel-indent');
    console.log($target);
    $target.remove();
  });

});