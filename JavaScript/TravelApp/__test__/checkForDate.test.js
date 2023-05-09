import { checkForDateConsole } from "../src/client/js/checkForDateConsole";

describe("checkForDateConsole function", () => {
    test('checkForDateConsole function returns true when start date is earlier than or equal to end date', () => {
    expect(checkForDateConsole('2023-02-07', '2023-02-08')).toBe(true);
    expect(checkForDateConsole('2023-02-07', '2023-02-07')).toBe(true);
    });
  
    test('checkForDateConsole function returns false when start date is later than end date', () => {
    expect(checkForDateConsole('2023-02-08', '2023-02-07')).toBe(false);
    });
});
