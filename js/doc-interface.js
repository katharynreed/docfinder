var Doctor = require('./../js/doc.js').doctorModule;

$(document).ready(function() {
  $('#userSubmit').click(function() {
    $('#showDoctors').empty();
    var medicalIssue = $('#userInput').val();
    var newDoctor = new Doctor(medicalIssue);
    var result = newDoctor.findDoctors(medicalIssue, function(result) {
      if (result.data.length > 0) {

        for (var i = 0; i < result.data.length; i++) {
          $('#showDoctors').append('<div id="doctorInfo" class="media page-header"><div class="media-left"><img id="doctorImage" class="media-object" src="' + result.data[i].profile.image_url + '" alt=""></div><div class="media-body"><h4 class="media-heading">' + result.data[i].profile.first_name + ' ' +  result.data[i].profile.last_name + ', ' + result.data[i].profile.title +  '</h4>' + result.data[i].profile.bio + '</div>');
    }
    } else {
      $('#showDoctors').text('<h3 id="noShow">There are no specialists in Portland for this condition.</h3>');
      }
    });
  });
});
