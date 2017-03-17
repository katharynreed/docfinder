var Doctor = require('./../js/doc.js').doctorModule;

$(document).ready(function() {
  $('#userSubmit').click(function() {
    $('#showDoctors').empty();
    var medicalIssue = $('#userInput').val();
    var newDoctor = new Doctor(medicalIssue);
    var result = newDoctor.findDoctors(medicalIssue);
  });
});
