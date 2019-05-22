import {Template} from 'meteor/templating';

let AutoForm;

if (Package['aldeed:autoform']) {
    AutoForm = Package['aldeed:autoform'].AutoForm;
} else if (Package['perfectsofttunisia:autoform']) {
    AutoForm = Package['perfectsofttunisia:autoform'].AutoForm;
} else {
    throw new Meteor.Error('You need to add an autoform package');
}

Template.afCalendar.onRendered(function () {
    let $input = this.$('.ui.calendar');
    let data = this.data;

    // instanciate calendar
    $input.calendar(data.atts.datePickerOptions);

    this.autorun(() => {
        const data = Template.currentData();
        const value = data.value;

        if (value) {
            $input.calendar('set date', value, true, true);
        } else {
            $input.calendar('set date', null, true, true);
        }
    });
});

Template.afCalendar.helpers({
    atts() {
      let atts = _.clone(this.atts);

      atts = AutoForm.Utility.addClass(atts, 'ui calendar');
      delete atts.datePickerOptions;
      return atts;
    }
});

Template.afCalendar.onDestroyed(function () {
    let $input = this.$('.ui.calendar');
    $input.calendar('destroy');
});