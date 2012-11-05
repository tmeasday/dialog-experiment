if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to dialog-test.";
  };

  Template.hello.events({
    'click input' : function () {
      openDialog('Are you happy?', 'Click yes if you want me to alert you', function() {
        alert("I'm alerting");
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
