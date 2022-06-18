(function ($) {
$(".contact-form").submit(function (event) {
event.preventDefault();

  // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
  let form = $('#' + $(contact_form).attr('id'))[0];

  // Сохраняем в переменные дивы, в которые будем выводить текст ошибки
  let inpNameError = $(this).find('.contact-form__error_name');
  let inpEmailError = $(this).find('.contact-form__error_email');


  // Сохраняем в переменную див, в который будем выводить сообщение формы
  let formDescription = $(this).find('.contact-form__description');

  let fd = new FormData(form);
  $.ajax({
    url: "/mail/php/mail.php",
    type: "POST",
    data: fd,
    processData: false,
    contentType: false,
    success: function success(res) {
      let respond = $.parseJSON(res);

      if (respond.name) {
       inpNameError.text(respond.name);
      } else {
       inpNameError.text('');
      }


      if (respond.email) {
        inpEmailError.text(respond.email);
      } else {
        inpEmailError.text('');
      }

      if (respond.message) {
        formDescription.text(respond.message);
      } else {
        formDescription.text('');
      }

      if (respond.success) {
        formDescription.text(respond.success).fadeIn();
        setTimeout(() => {
          formDescription.fadeOut("slow");
        }, 4000);
        setTimeout(() => {
          formDescription.text('');
        }, 5000);
      }
    },
  });
});
}(jQuery));
