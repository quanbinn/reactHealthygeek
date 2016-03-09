Meteor.startup(() => {
	  // seed the database
  if (Foods.find().count() == 0) {
    for (var i = 0; i < 5; i++) {
      Foods.insert({name: `食品 ${i}`});
    }
  }
});