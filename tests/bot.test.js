const pl = require("../dist/index");
jest.setTimeout(30000);

describe("Bot 类功能测试", () => {
  beforeAll(async () => {
    pl.setConfig({
      timeout: 5000,
      consolelog: false,
    });
  });

  test("能正常读取，写入队列，处理，并回复", async () => {
    async function processFunction(msg) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return msg.Nickname;
    }

    const myBot = new pl.Bot(
      process.env.Username,
      process.env.PASSWORD,
      processFunction,
      (i) => {
        expect(i.Nickname).toBeTruthy();
      },
      (i) => {
        expect(i.msg).toBeTruthy();
      },
      () => {
        return;
      }
    );

    async function main() {
      const user = new pl.User(process.env.ADMIN, process.env.PASSWORD);
      await user.user.login();
      await user.messages.comment(
        "66fab3b39c503ff86ad94078",
        "Discussion",
        "内容"
      );
      await myBot.init("66fab3b39c503ff86ad94078", "Discussion", {
        ignoreReplyToOters: true,
        readHistory: true,
        replyRequired: false,
      });

      await myBot.run();
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }

    try {
      await main();
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });
});
