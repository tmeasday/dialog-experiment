if (Meteor.isClient) {
  var dialogCB;
  var openDialog = function(title, message, cb) {
    Session.set('dialogOpen', true);
    Session.set('dialogTitle', title);
    Session.set('dialogMessage', message);
    dialogCB = cb;
  }

  Template.dialog.helpers({
    open: function() { return Session.get('dialogOpen'); },
    title: function() { return Session.get('dialogTitle'); },
    message: function() { return Session.get('dialogMessage'); }
  });

  Template.dialog.events({
    'click .yes': function(e) {
      e.preventDefault();
      Session.set('dialogOpen', false);
      if (dialogCB) dialogCB(true);
    }
  })
}