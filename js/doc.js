function Doctor(medicalIssue) {
  this.medicalIssue = [];
}

Doctor.prototype.findDoctors = function(userInput, callback) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + userInput + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=4e8845222bc6a858d55f09ca29dc833a')
   .then(function(result) {
     callback(result);
    })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
