const path = require('path');

/**
 * process.mainModule
Added in: v0.1.17Deprecated since: v14.0.0
Stability: 0 - Deprecated: Use require.main instead.
 */
module.exports = path.dirname(require.main.filename); 
