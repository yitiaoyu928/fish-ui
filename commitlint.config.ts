import type { UserConfig } from "@commitlint/types"
const config:UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, "always", [
      "build", // 打包项修改
      "ci", // 配置文件修改
      "docs", // 文档修改
      "feat", // 功能修改
      "fix", // 修复BUG
      "style", // 修改style
      "test", // 增加测试文件
      "refactor", // 重构代码
      "revert" // 回滚代码
    ]]
  },
  prompt: {
    messages:{

    },
    questions: {
      type: {
        description: `支持一下选项${JSON.stringify([
          "build", // 打包项修改
          "ci", // 配置文件修改
          "docs", // 文档修改
          "feat", // 功能修改
          "fix", // 修复BUG
          "style", // 修改style
          "test", // 增加测试文件
          "refactor", // 重构代码
          "revert" // 回滚代码
        ])}`
      }
    }
  }
}
module.exports = config;
