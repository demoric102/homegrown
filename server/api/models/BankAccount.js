/**
 * BankAccount.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    caterer: {
      model: 'Caterer'
    },
    accountNumber: {
      type: 'string',
      unique: true,
      required: true
    },
    bank: {
      model: 'Bank',
      
    },
    bvn: {
      type: 'string',
      unique: true,
    },
    verified: {
      type: 'boolean',
      defaultsTo: false
    },
  }
};

