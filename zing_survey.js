if (Meteor.isClient) {
  var questionList = {
    'questions': [ {
      'qName': 'favoriteWiggin',
      'qText': 'Who is your favorite Wiggin',
      'qValue': {
        'peter': 'Peter',
        'valentine': 'Valentine',
        'ender': 'Ender'
        }
      } 
    ]
  };

  Template.hello.greeting = function () {
    return new Handlebars.SafeString("<strong>Welcome</strong> to zing_survey.");
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
        alert("buttonpush");
    }
  });

  Template.question.form = function () {
    for (i=0; i < questionList['questions'].length; i++) {
      rtn = '<h2>'+questionList['questions'][i]['qText']+'</h2>';
      for (key in questionList['questions'][i]['qValue']) {
        rtn += '<input type="radio" name="'+
        questionList['questions'][i]['qName']+
        '" value="'+key+'">'+
        questionList['questions'][i]['qValue'][key]+'<br>';
      }
    }
    return new Handlebars.SafeString(rtn);
  }  
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
