import React from "react";
import renderer from "react-test-renderer";

import parser from "../utils/testParser";

describe("@support rules", () => {
  test("Example one", () => {
    const DIV = `
    @supports (display: flex)
      div
        display flex
    `;

    const data = parser(DIV);

    expect(data).toEqual({
      element: "div",
      hash: { "data-css-18ahxhe": "" },
      stylesheet: [
        [
          {
            display: [
              "-webkit-box",
              "-moz-box",
              "-ms-flexbox",
              "-webkit-flex",
              "flex"
            ]
          }
        ]
      ]
    });
  });
});
