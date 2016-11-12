$('.upload-btn').on('click', function (){
    $('#upload-input').click();
});

var count = 0;

$('#upload-input').on('change', function(){

  var files = $(this).get(0).files;

  // allows for only one file at a time to prevent overloading
  if (files.length == 1) {
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    var file = files[0];

    // add the files to formData object for the data payload
    // rename the file to an index number + the file extension
    formData.append('uploads[]', file, count + file.name.substring(file.name.lastIndexOf('.')));
    count ++
    }

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      }
    });

});
