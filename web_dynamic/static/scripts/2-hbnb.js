$(function () {
  //Creting an Empty Dictionary
  const amenit_checks = {};
  $(document).on('change', "input[type='checkbox']", function () {
	//Put or delete checked checkbox information in the dictionary
    if (this.checked) {
      amenit_checks[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenit_checks[$(this).data('id')];
    }
	//Show in h4 tag the checked checkbox information
    const Objs = Object.values(amenit_checks);
    console.log(Object.values(amenit_checks));
    if (Objs) {
      $('.amenities > h4').text(Object.values(amenit_checks).join(', '));
    } else {
      $('.amenities > h4').html('&nbsp;');
    }
  });
  //Get API status and 
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
