/**
 * Caterer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    formId: {
      type: 'string',
      required: true,
      unique: true
    },
    firstname: {
      type: 'string',
      required: true
    },
    middlename: {
      type: 'string'
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
    gender: {
      type: 'string',
      enum: ['male','female'],
      defaultsTo: 'male'
    },
    maritalStatus: {
      type: 'string',
      enum: ['single','married','divorced'],
      defaultsTo: 'single'
    },
    school: {
      model: 'School'
    },
    lga: {
      model: 'lga'
    },
    bankAccount: {
      model: 'BankAccount'
    },
    dateOfBirth: {
      type: 'datetime'
    },
    nameOfGuarantor: {
      type: 'string',
    },
    addressOfGuarantor: {
      type: 'string',
    },
    phoneOfGuarantor: {
      type: 'string',
    },
    toJSON: function () {
        var obj = this.toObject();
        obj.fullname = (''.concat(obj.firstname,' ',obj.lastname));
        return obj;
    }
  }
};

