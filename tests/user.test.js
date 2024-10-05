const pl = require("../dist/index");
jest.setTimeout(25000);

describe("User 类功能测试", () => {
  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
      consoleResponse: false,
      consoleError: false,
      checkHttpsAgent: false,
    });
  });

  test("能正常登录、查询用户信息", async () => {
    async function main() {
      const user = new pl.User();
      await user.user.login();
      const re = await user.user.getUser("60e933da4ad4cae147f48a66");
      const re2 = await user.user.getUserByComments("66aeddf8b833e126e377a5f5");
      expect(re.Data.User.Nickname).toBeDefined();
      expect(re2.Data.User.Nickname).toBeDefined();
    }

    await main();
  });
});
