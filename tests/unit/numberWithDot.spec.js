import { numberWithDot } from "../../src/utils/helpers/numberWithDot";
test("Number with dot", () => {
  expect(numberWithDot("12000")).toBe("12.000");
});
