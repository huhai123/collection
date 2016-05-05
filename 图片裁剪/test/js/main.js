$(function () {
  $('.out').click(function(){
    $('.cut_box').show()
  });



  // Methods
  $(document.body).on('click', '[data-method]', function () {
    var data = $(this).data(),
        $target,
        result;

    if (data.method) {
      data = $.extend({}, data); // Clone a new one

      if (typeof data.target !== 'undefined') {
        $target = $(data.target);

        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      result = $image.cropper(data.method, data.option);

      if (data.method === 'getCroppedCanvas') {
        $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
      }

      if ($.isPlainObject(result) && $target) {
        try {
          $target.val(JSON.stringify(result));
        } catch (e) {
          console.log(e.message);
        }
      }

    }
  }).on('keydown', function (e) {

    switch (e.which) {
      case 37:
        e.preventDefault();
        $image.cropper('move', -1, 0);
        break;

      case 38:
        e.preventDefault();
        $image.cropper('move', 0, -1);
        break;

      case 39:
        e.preventDefault();
        $image.cropper('move', 1, 0);
        break;

      case 40:
        e.preventDefault();
        $image.cropper('move', 0, 1);
        break;
    }

  });

  // ÉÏ´«Í¼Æ¬
  var $inputImage = $('#inputImage'),
      URL = window.URL || window.webkitURL,
      blobURL;

  if (URL) {
    $inputImage.change(function () {
      var files = this.files,
          file;

      if (files && files.length) {
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          blobURL = URL.createObjectURL(file);
          $image.one('built.cropper', function () {
            URL.revokeObjectURL(blobURL); // Revoke when load complete
          }).cropper('reset', true).cropper('replace', blobURL);
          $inputImage.val('');
        } else {
          showMessage('Please choose an image file.');
        }
      }
    });
  } else {
    $inputImage.parent().remove();
  }

}());

