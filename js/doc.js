function Doctor() {
}

Doctor.prototype.findDoctors = function(userInput) {
    
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + userInput + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=4e8845222bc6a858d55f09ca29dc833a')
     .then(function(result) {
        if (result.data.length > 0) {

          for (var i = 0; i < result.data.length; i++) {
            $('#showDoctors').append('<li>' + result.data[i].profile.first_name + ' ' +  result.data[i].profile.last_name + ', ' + result.data[i].profile.title + '</li>');
            console.log(result.data[i].profile.first_name);
          }
        } else {
          $('#showDoctors').append('There are no specialists in Portland for this condition.');
        }
      })
    .fail(function(error){
      console.log("fail");
    });
  };

  exports.doctorModule = Doctor;
