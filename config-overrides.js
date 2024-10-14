const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    "react-optimized-image/plugin"
    /* Add plug-in names here (separate each value by a comma) */
  )
);