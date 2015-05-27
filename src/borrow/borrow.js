//@exclude
'use strict';
/* global corbel */
//@endexclude

(function() {

  /**
   * A module to make Borrow requests.
   * @exports Borrow
   * @namespace
   * @memberof app.corbel
   */

  corbel.Borrow = corbel.Object.inherit({

    constructor: function(driver) {
      this.driver = driver;
    },



    /**
     * Create a BorrowBuilder for resource managing requests.
     *
     * @param {String}  id  The id of the borrow.
     *
     * @return {corbel.Borrow.BorrowBuilder}
     */
    resource : function(id) {
        var resource = new corbel.Borrow.BorrowBuilder(id);
        resource.driver = this.driver;
        return resource;
    },

    /**
     * Create a LenderBuilder for lender managing requests.
     *
     * @param {String}  id  The id of the lender.
     *
     * @return {corbel.Borrow.LenderBuilder}
     */
    lender: function(id) {
        var lender = new corbel.Borrow.LenderBuilder(id);
        lender.driver = this.driver;
        return lender;
    },

    /**
     * Create a UserBuilder for user managing requests.
     *
     * @param {String}  id  The id of the user.
     *
     * @return {corbel.Borrow.UserBuilder}
     */
     user: function(id) {
        var user = new corbel.Borrow.UserBuilder(id);
        user.driver = this.driver;
        return user;
     }




  }, {
    moduleName: 'borrow',

    create: function(driver) {
      return new corbel.Borrow(driver);
    },

    _buildUri: function() {
        var uri='';
        Array.prototype.slice.call(arguments).forEach(function(argument) {
          if (argument){
            uri+= '/' + argument;
          }
        });

        var urlBase = this.driver.config.get('borrowEndpoint', null) ||
          this.driver.config.get('urlBase').replace(corbel.Config.URL_BASE_PLACEHOLDER, corbel.Borrow.moduleName);

        if (urlBase.slice(-1) === '/') {
          urlBase = urlBase.substring(0, urlBase.length - 1);
        }

        return urlBase + uri;
    }
  });

  return corbel.Borrow;





})();
