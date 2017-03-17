var Doctor = require('./../js/doc.js').doctorModule;

var displayDoctors = function(medicalIssue, doctors) {
  for (var i=0; i<doctors.length; i++){
    $('#showDoctors').append(
      "<li>" + doctors[i] + "</li>"
    );
  }
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#medicalIssue').click(function() {
    $('#medicalInput').val("");
    currentDoctorObject.getDoctors(medicalIssue, doctors);
  });
});
