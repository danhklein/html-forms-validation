// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
    $('form').on('submit', function() {
      // alert('Fuck off');
      event.preventDefault();
   });

    // function validateEmail (email) {

    //   var emailArr = email.split("");
    //   if (emailArr[emailArr.length - 1] === '@' || emailArr[emailArr.length - 1] === '.' || emailArr[] ){return false};

    // }

//     ['preferredName', 'lastName'].forEach(function (inputName) {
//   var $input = $('input[name="' + inputName + "'']");

//    $input.on('keydown', function() {
//       var val = $input.val();
//       if (!val) {
//         $input.addClass('warning');
//       } else {
//         $input.removeClass('warning');
//       }
//       console.log(val === true)
//     });
//   });
// });

// $email = %'(input)[type="email"]';
// $email.on('blur', function() {
//   var val = $email.val();
//   toggleClass($email, val);
// })
