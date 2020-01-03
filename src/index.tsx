import React from "react";
import { render } from "react-dom";
import App from "./containers/App/index";

function bootstrapApp() {
  const ele = document.createElement("div");
  ele.setAttribute('id', 'react-spa-template-ts');
  document.body.appendChild(ele);
  render(<App />, ele);

  const update = () => {
    const NewApp = require("./containers/App/index").default;
    render(<NewApp />, ele)
  };

  return {
    update
  };
}

const app = bootstrapApp();

if (module.hot) {
  module.hot.accept("./containers/App/index", () => {
    app.update();
  });
}
