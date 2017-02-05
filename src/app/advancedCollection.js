import Bn from 'backbone'

/**
 * Overrides fetch method from Backbone so we can use collection out of the box with promises.
 * All standard fetch return properties are still there for developer to use if necessary.
 */
export default Bn.Collection.extend({

  fetch(options) {
      return Bn.Collection.prototype.fetch.call(this, options)
      .then((data, textStatus, jqXHR) => {
          let collection = new Bn.Collection(data);
          return new Promise(function (resolve, reject) {
              resolve({collection, data, textStatus, jqXHR})
          })
      });

  }

})
