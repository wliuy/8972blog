/**
 * 8972 博客 - Git 自动化推送脚本
 * 用途：针对 8972blog 项目，一键完成本地修改到 GitHub 的同步
 * 适配：已适配 ESM 模式 (Type: module)
 * 使用方法：在终端运行 `node push.js`
 */

import { execSync } from 'child_process';
import fs from 'fs';

// --- 配置区域 ---
const CONFIG = {
  // 核心：已更新为 8972blog 的仓库地址
  remoteUrl: 'https://github.com/wliuy/8972blog.git', 
  branch: 'main', 
  commitMsg: 'chore: 更新博客内容并优化样式' // 你可以根据需要修改这次的提交文案
};

function run(command) {
  try {
    console.log(`\x1b[36m正在执行: ${command}\x1b[0m`);
    // 执行命令并将结果实时输出到控制台
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    // 捕获异常，但不中断后续简单的逻辑
    return false;
  }
  return true;
}

async function start() {
  console.log('\x1b[33m🚀 开始执行 8972blog 自动化推送...\x1b[0m\n');

  // 1. 检查并初始化 Git
  if (!fs.existsSync('.git')) {
    console.log('检测到尚未初始化 Git，正在初始化...');
    run('git init');
  }

  // 🌟 核心修复：强制校准本地分支名
  run(`git branch -M ${CONFIG.branch}`);

  // 2. 尝试添加远程仓库地址
  // 如果已存在会提示 error，脚本会自动跳过
  run(`git remote add origin ${CONFIG.remoteUrl}`);

  // 3. 添加所有文件
  run('git add .');

  // 4. 提交
  console.log('正在创建提交记录...');
  try {
    // 使用双引号包裹，防止 Windows 命令行解析特殊字符出错
    execSync(`git commit -m "${CONFIG.commitMsg}"`, { stdio: 'inherit' });
  } catch (e) {
    console.log('\x1b[32m提示：没有检测到新改动，无需提交。\x1b[0m');
  }

  // 5. 推送
  console.log(`\n\x1b[35m正在推送到 GitHub (${CONFIG.branch})...\x1b[0m`);
  
  // 使用 -f (强制) 推送，确保云端与本地完全一致
  const success = run(`git push -f origin ${CONFIG.branch}`);

  if (success) {
    console.log('\n\x1b[32m🎉 推送成功！Vercel/Cloudflare 应该已经开始自动构建了。\x1b[0m');
  } else {
    console.log('\n\x1b[31m❌ 推送失败。\x1b[0m');
    console.log('\x1b[33m💡 温馨提示：如果遇到连接超时，请检查你的代理设置，可尝试执行：\x1b[0m');
    console.log('git config --global http.proxy http://127.0.0.1:7890');
  }
}

start();