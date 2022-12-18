var User = require("../models/User");

describe("User", () => {
  it("should create a new user", () => {
    const user = new User();
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("password");
  });
});
