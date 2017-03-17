var Doctor = require('./../js/doc.js').doctorModule;

var displayDoctors = function(medicalIssue) {
  for (var i=0; i<doctors.length; i++){
    $('#doctors').append(
      "<li>" + doctors[i] + "</li>"
    );
  }
};
