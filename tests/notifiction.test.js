const pl = require("../dist/index");
const User = pl.User;
jest.setTimeout(20000);

describe("Notifiction 类功能测试", () => {
  let user;

  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
      consoleResponse: false,
      consoleError: false,
      checkHttpsAgent: false,
    });
    user = new User(process.env.ADMIN, process.env.PASSWORD);
    await user.user.login();
  });

  test("获取消息", async () => {
    const re = await user.notification.get(3,20);
    expect(re.Data.Messages).toBeDefined();
  });

});
