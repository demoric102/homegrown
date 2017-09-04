/**
 * Caterer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      unique: true,
      required: true
    },
    school: {
      model: 'School'
    },
    zone: {
      model: 'Zone'
    },
    bankAccount: {
      model: 'BankAccount'
    }
  }
};

