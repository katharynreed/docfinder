function Doctor(medicalIssue) {
  this.medicalIssue = [];
}

Doctor.prototype.findDoctors = function(userInput) {

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + userInput + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=4e8845222bc6a858d55f09ca29dc833a')
     .then(function(result) {
        if (result.data.length > 0) {

          for (var i = 0; i < result.data.length; i++) {
            $('#showDoctors').append('<div id="doctorInfo" class="media page-header"><div class="media-left"><img id="doctorImage" class="media-object" src="' + result.data[i].profile.image_url + '" alt=""></div><div class="media-body"><h4 class="media-heading">' + result.data[i].profile.first_name + ' ' +  result.data[i].profile.last_name + ', ' + result.data[i].profile.title +  '</h4>' + result.data[i].profile.bio + '</div>');
          }
        } else {
          $('#showDoctors').append('<h3 id="noShow">There are no specialists in Portland for this condition.</h3>');
        }
      })
    .fail(function(error){
      console.log("fail");
    });
  };

  exports.doctorModule = Doctor;
