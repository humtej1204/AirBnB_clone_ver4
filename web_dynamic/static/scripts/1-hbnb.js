$(function () {
  //Creting an Empty Dictionary
  let amenit_checks = {};
  $(document).on('change', "input[type='checkbox']", function () {
	//Put or delete checked checkbox information in the dictionary
    if (this.checked) {
      amenit_checks[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenit_checks[$(this).data('id')];
    }
    const Objs = Object.values(amenit_checks);
    console.log(Object.values(amenit_checks));
	//Show in h4 tag the checked checkbox information
    if (Objs) {
      $('.amenities > h4').text(Object.values(amenit_checks).join(', '));
    } else {
      $('.amenities > h4').html('&nbsp;');
    }
  });
});
