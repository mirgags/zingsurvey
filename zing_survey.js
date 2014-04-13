if (Meteor.isClient) {
  var questionList = {
    'questions': [ {
      'qName': 'favoriteWiggin',
      'qText': 'Who is your favorite Wiggin',
      'qValue': {
        'peter': 'Peter',
        'valentine': 'Valentine',
        'ender': 'Ender',
        'dad': 'Their stupid dumb dad',
        'mom': 'Their lame mom'
        }
      },{
        'qName': 'favoriteBassDrop',
        'qText': 'What is your favorite bass drop',
        'qValue': {
          'brr': 'Brrrrrrrr',
          'bzz': 'Bzzzzzzzz',
          'brz': 'Brrrrzzzz'
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
    var rtn;
    for (i=0; i < questionList['questions'].length; i++) {
      rtn += '<h2>'+questionList['questions'][i]['qText']+'</h2>';
      for (key in questionList['questions'][i]['qValue']) {
        rtn += '<input type="radio" name="'+
        questionList['questions'][i]['qName']+
        '" value="'+key+'">'+
        questionList['questions'][i]['qValue'][key]+'<br>';
      }
    }
    rtn += '<input type="button" class="submit_button" value="submit">';
    return new Handlebars.SafeString(rtn);
  };

  Template.question.events({
    'click .submit_button': function (event) {
      var selection = "None selected";
      theFields = document.getElementsByTagName("input");
      console.log(theFields.length);
      for (i=0; i < theFields.length; i++) {
        console.log(theFields[i].type);
        if (theFields[i].type == "radio" && theFields[i].checked) {
          console.log(theFields[i].value);
        }
      }
    }
  });
};

if (Meteor.isServer) {
  Meteor.startup(function () {
  // code to run on server at startup

  }
)};
