import React from "react";
import renderer from "react-test-renderer";

import parser from "../utils/testParser";

describe("stylus custom parser", () => {
  test("sanity check", () => {
    const DIV = `
    button
      color mistyrose
      border-radius 3px
    `;

    const data = parser(DIV);

    expect(data).toMatchObject({
      element: "button",
      hash: { "data-css-1j9g9kt": "" },
      stylesheet: [{ color: "#ffe4e1" }, { borderRadius: "3px" }]
    });
  });

  test("basic selector", () => {
    const BUTTON = `
    button
      border-radius 4px
      border 2px solid grey
      color pink
      &:hover
        color purple
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
  });

  test("pythonic nature i.e gives errors on wrong indentation", () => {
    const BUTTON = `
    button
    border-radius 4px
    `;

    try {
      const data = parser(BUTTON);
    } catch (e) {
      expect(e.message).toBe("Indentation error");
    }
  });

  test("works with functions", () => {
    const BUTTON = `
    plus(a, b)
      a + b
  
    button
      padding plus(10px, 20px)
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
    expect(data.stylesheet[0].padding).toBe("30px");
  });

  test("works with pseudo selectors", () => {
    const BUTTON = `
    button
      &:focus
        outline none
      &:hover
        color pink
      &:active
        outline none
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
  });

  test("works with mixins", () => {
    const BUTTON = `
    border-radius(n)
      border-radius n

    button
      color red
      border-radius(3px)
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
  });

  test("works with built-in functions", () => {
    const BUTTON = `
    button
      color green(#000, 255)
      background-color lighten(mistyrose, 30)
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
  });

  test("works with rest params", () => {
    const DIV = `
    box-shadow(args ...)
      box-shadow args
    
    div
      box-shadow 1px 2px 5px #eee
    `;

    const data = parser(DIV);

    expect(data).toMatchSnapshot();
  });

  test("works with @block", () => {
    const DIV = `
    foo = @block {
      width: 20px
      height: 20px
    }

    div
      {foo}
    `;

    const data = parser(DIV);

    expect(data).toMatchSnapshot();
  });

  test("throws error on invalid element", () => {
    const DIV = `
    d
      padding 10px
    `;

    try {
      const data = parser(DIV);
    } catch (e) {
      expect(e.message).toBe("'d' is not a valid HTML element.");
    }
  });

  test("works with conditionals", () => {
    const DIV = `
    overload-padding = true
    
    if overload-padding
      padding(y, x)
        margin y x
    
    div
      padding 5px 10px
    `;

    const data = parser(DIV);

    expect(data).toMatchSnapshot();
  });

  test("works with char escaping", () => {
    const DIV = `
    div
      padding (1 \+ 2)px
    `;

    const data = parser(DIV);

    expect(data).toMatchSnapshot();
  });

  test("works with operators (usage with mixins)", () => {
    const DIV = `
    pad(types = padding, n = 5px)
      if padding in types
        padding n
      if margin in types
        margin n

    body
      pad()
    `;

    const data = parser(DIV);

    expect(data).toMatchSnapshot();
  });

  test("works with interpolations", () => {
    const BUTTON = `
    apply(prop, args)
      {prop} args

    border-radius()
      apply('border-radius', arguments)
  
    box-shadow()
      apply('box-shadow', arguments)
    
    button
      border-radius 1px 2px / 3px 4px
    `;

    const data = parser(BUTTON);

    expect(data).toMatchSnapshot();
  });
});
