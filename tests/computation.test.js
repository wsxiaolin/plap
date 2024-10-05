const pl = require("../dist/index");
jest.setTimeout(25000);

describe("Computasion 类功能测试", () => {
  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
      consoleResponse: false,
      consoleError: false,
      checkHttpsAgent: false,
    });
  });

  test("能正常统计支持者", async () => {
    async function main() {
      const user = new pl.User();
      await user.user.login();
      const re = await pl.computation.count.supporter(user, [
        "66febdd83c7548d804bc4054",
        "66aba6d4b833e126e377899a",
      ]);
      expect(re.size).toBeGreaterThan(4);
      expect(re.has("62d3fd092f3a2a60cc8ccc9e")).toBeTruthy();
    }

    await main();
  });
});
