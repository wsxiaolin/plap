const pl = require("../dist/index");
const User = pl.User;
jest.setTimeout(20000);

describe("Experiment 类功能测试", () => {
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

  test("getExperiment 应返回非空数据", async () => {
    const re = await user.experiment.get(
      "66fab3b39c503ff86ad94078",
      "Discussion"
    );
    expect(re.Data.Type).toBeDefined();
  });

  test("更新摘要", async () => {
    let summary = await user.projects.getSummary(
      "66fab3b39c503ff86ad94078",
      "Discussion"
    );

    expect(summary.Data).toBeDefined();

    // 修改摘要并检查更新
    summary.Data.Description.push("[故事]这个实验通过调用物实网络api更新");
    const updateResponse = await user.experiment.update(summary.Data);

    expect(updateResponse).toBeDefined();
    expect(updateResponse.Data).toBeDefined();
    expect(updateResponse.Data).not.toEqual({});
  });

  test("cover 方法不应抛出错误", async () => {
    const imagePath =
      "tests/test.jpg";
    const discussionId = "Discussion";
    const experimentId = "66fab3b39c503ff86ad94078";

    await expect(
      user.experiment.cover(imagePath, discussionId, experimentId)
    ).resolves.not.toThrow();
  });
});
