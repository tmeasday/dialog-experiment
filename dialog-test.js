if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to dialog-test.";
  };

  Template.hello.events({
    'click input' : function () {
      openDialog('Are you happy?', 'Click yes if you want me to alert you');
      Session.set('lastDialog', 'alert-dialog');
    }
  });
  
  // This code is global, and is only "attached" to the callback via proximity in the code. Not the most natural thing in the world
  Meteor.autorun(function() {
    if (Session.equals('lastDialog', 'alert-dialog') && 
        Session.equals('dialogOpen', false) && 
        Session.equals('lastDialogSuccess', true)) {
      alert("I'm alerting");
      
      // ensure it doesn't happen again, e.g. on another HCP
      Session.set('lastDialog', null);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
