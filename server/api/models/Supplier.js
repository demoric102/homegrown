/**
 * Supplier.js
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
    email: {
      type: 'string',
    },
    foods: {
      collection: 'food'
    },
    lga: {
      model: 'lga'
    },
    accountNumber: {
      type: 'string',
      unique: true
    },
    bank: {
      model: 'BankAccount'
    }
  }
};

