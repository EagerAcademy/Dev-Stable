import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Students } from './students.js';


export const updatePoints = new ValidatedMethod({
  /*name: 'student.updatePoints',
  validate: new SimpleSchema({
    
  }).validate(),
  run()
  */
});