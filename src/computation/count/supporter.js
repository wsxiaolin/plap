// @ts-nocheck

const userSupportMap = new Map();

/**
 * 统计所提供作品列表中每个用户分别支持了多少次
 * 
 * @async
 * @param {Array} selectedWorks - 包含作品ID的数组，用于查询支持者。
 * @returns {Promise<Map>} 返回一个 Promise，解析为用户ID及其支持数量的 Map。
 */
module.exports = async function (userInstance,selectedWorks) {

    const promises = selectedWorks.map(async (workId) => {
        const response = await userInstance.projects.getSupporters(workId, "Discussion");

        const supporters = response.Data.$values || [];

        await Promise.all(
            supporters.map(async (user) => {
                userSupportMap.set(user.ID, (userSupportMap.get(user.ID) || 0) + 1);
            })
        );
    });

    await Promise.all(promises);

    const sortedEntries = Array.from(userSupportMap.entries());
    sortedEntries.sort((a, b) => b[1] - a[1]);

    return new Map(sortedEntries);
}
