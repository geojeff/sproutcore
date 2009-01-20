// ========================================================================
// SproutCore -- JavaScript Application Framework
// Copyright ©2006-2008, Sprout Systems, Inc. and contributors.
// Portions copyright ©2008 Apple, Inc.  All rights reserved.
// ========================================================================
//
// Force a field to be not empty.
//
// ==========================================================================

require('validators/validator') ;

/**
  Requires some content in field, but does not check the specific content.
  
  @class
  @extends SC.Validator
  @author Charles Jolley
  @version 1.0
*/
SC.Validator.NotEmpty = SC.Validator.extend(
/** @scope SC.Validator.NotEmpty.prototype */ {
  
  validate: function(form, field) {
    var value = field.get('fieldValue'); 
    var ret = !!value ;
    if (ret && value.length) ret = value.length > 0 ;
    return ret ;
  },
  
  validateError: function(form, field) {
    var label = field.get('errorLabel') || 'Field' ;
    return SC.$error("Invalid.NotEmpty(%@)".loc(label.capitalize()), field.get('errorLabel'));
  }
    
}) ;
