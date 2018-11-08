// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-calendar-semantic-ui.js.
import { name as packageName } from "meteor/perfectsofttunisia:autoform-calendar-semantic-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-calendar-semantic-ui - example', function (test) {
  test.equal(packageName, "autoform-calendar-semantic-ui");
});
