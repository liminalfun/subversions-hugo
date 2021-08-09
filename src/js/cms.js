// eslint-disable-next-line no-unused-vars
import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import AboutPreview from "./cms-preview-templates/about";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{
    name: "id",
    label: "Youtube Video ID",
    widget: "string"
  }],
  pattern: /{{< youtube ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    return `{{< youtube ${obj.id} >}}`;
  },
  toPreview: function(obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
  },
});
CMS.init();
