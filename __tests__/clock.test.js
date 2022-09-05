import {createTimeByZone} from "../src/helper";


// test  createTimeZone from helper
test("return  time by zone like object", () => {
    const date = createTimeByZone("Africa/Lome")
    expect(typeof  date).toBe("object");
    expect(date).not.toBeNull()
});