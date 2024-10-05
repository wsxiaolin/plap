const pl = require("../dist/index");
const User = pl.User;
jest.setTimeout(20000);

describe("Projects 类功能测试", () => {
  let user;
  const id = "66aba6d4b833e126e377899a";
  const type = "Discussion";

  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
      consoleResponse: false,
      consoleError: false,
      checkHttpsAgent: false,
    });
    user = new User(process.env.XIAOLIN, process.env.PASSWORD);
    await user.user.login();
  });

  test("获取详细信息", async () => {
    const re = await user.projects.getDerivatives(id, type);
    expect(re.Data.Supporters).toBeDefined();
  });

  test("获取摘要", async () => {
    let summary = await user.projects.getSummary(id, type);
    expect(summary.Data.Description[0]).toBeDefined();
  });

  test("获取支持者", async () => {
    const re = await user.projects.getSupporters(id, type, 4);
    expect(re.Data.$values[0]).toBeDefined();
  });

  test("查询作品列表", async () => {
    const re = await user.projects.query("Discussion", {
      tags: ["精选"],
      take: 30,
    });
    expect(re.Data.$values.length).toBeGreaterThan(20);
  });

  test("收藏", async () => {
    user = new User(null, null);
    await user.user.login();
    const re = await user.projects.star(id, type, true);
    expect(re.Data.User.ID).toBeDefined();
  });
});
