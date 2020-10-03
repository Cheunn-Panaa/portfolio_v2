'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeUpdate(params, data) {
      if(data.current) {
        data.end_date = null
      }
    }
  }
};
