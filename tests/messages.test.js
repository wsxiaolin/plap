const pl = require("../dist/index");
jest.setTimeout(25000);

describe("Messages 类功能测试", () => {
  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
      consoleResponse: false,
      consoleError: false,
      checkHttpsAgent: false,
    });
  });

  test("发布消息", async () => {
    async function main() {
      const user = new pl.User(process.env.ADMIN, process.env.PASSWORD);
      await user.user.login();
      const re = await user.messages.comment(
        "66b644c80c0a3e021bf9a400",
        "Discussion",
        "内容"
      );
      expect(re.Data.UserID).toBeDefined();
    }
    await main();
  });

  test("读取消息", async () => {
    async function main() {
      const user = new pl.User(process.env.ADMIN, process.env.PASSWORD);
      await user.user.login();
      const re = await user.messages.get(
        "66b644c80c0a3e021bf9a400",
        "Discussion",
        50
      );
      expect(re.Data.Comments[8]).toBeDefined();
    }
    await main();
  });
});
