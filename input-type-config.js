let AutoForm;

if (Package['aldeed:autoform']) {
    AutoForm = Package['aldeed:autoform'].AutoForm;
} else if (Package['perfectsofttunisia:autoform']) {
    AutoForm = Package['perfectsofttunisia:autoform'].AutoForm;
} else {
    throw new Meteor.Error('You need to add an autoform package');
}

AutoForm.addInputType('calendar', {
    template: 'afCalendar',
    valueOut: function() {
        if (this.data('moduleCalendar')) {
            return this.calendar('get date');
        } else {
            return null;
        }
    },
    valueConverters: {
        string: function(val) {
            return (val instanceof Date) ? AutoForm.valueConverters.dateToDateStringUTC(val) : val;
        },
        stringArray: function(val) {
            if (val instanceof Date) {
                return [AutoForm.valueConverters.dateToDateStringUTC(val)];
            }
            return val;
        },
        number: function(val) {
            return (val instanceof Date) ? val.getTime() : val;
        },
        numberArray: function(val) {
            if (val instanceof Date) {
                return [val.getTime()];
            }
            return val;
        },
        dateArray: function(val) {
            if (this.data('moduleCalendar')) {
                var valArray = this.calendar('get date');
                if (allArrayItemsAreDates(valArray)) return valArray;
            }
            return val;
        },
    },
});


function allArrayItemsAreDates(items) {
    let nonDates = _.filter(items, function(val) { return !(val instanceof Date); });
    return nonDates.length === 0;
}