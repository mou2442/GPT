# CODEX HANDOFF

## 当前状态

Pages 可用，当前入口：
- `av-constraint-translator/index.html`

当前版本是**单文件纯前端页面**，能直接运行。

---

## 当前不要动的事

1. 不要覆盖仓库根目录 `index.html`
2. 不要破坏 `av-constraint-translator/` 现有在线入口
3. 不要在第一步就引入重后端或复杂构建链
4. 不要先做视频处理和自动识别

---

## 优先迭代顺序

### 第一优先：轻量功能补齐
- 多帧输入占位 UI
- 经验包导入 JSON
- 风格模板切换
- 表单复制 / 重置 / 小交互优化

### 第二优先：结构整理
- 在不破坏现有页面的前提下，考虑拆分为 `data.js` / `app.js` / `styles.css`
- 但 Pages 入口仍应保持直观

### 第三优先：再谈自动分析
- 自动提边
- 自动分层建议
- 锚点辅助标注

---

## 当前已有模板

- `templates/piying-demo.json`

建议后续模板目录继续扩展：
- `templates/piying-demo.json`
- `templates/xiuxiang-demo.json`
- `templates/handdraw-basic.json`

---

## 当前应用定位

它不是普通提示词生成器，而是：

**把静帧母本整理成结构约束 + 运动约束 + 风格约束的前处理工作台。**

重点是中间层，不是花哨 UI。

---

## 推荐改法

如果要继续改，优先：
1. 保持单页可运行
2. 先补导入与模板
3. 再整理代码结构
4. 最后才碰自动化分析
