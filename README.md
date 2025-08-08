
# n8n Orchestrator (静态原型 · 阶段1)

## 快速开始
```bash
pnpm i   # 或 npm i / yarn
pnpm dev # http://localhost:5173
```

默认使用 mock 数据。要接入真实 n8n：编辑 `src/config/app.config.ts`，把 `mode: 'mock'` 改成 `mode: 'live'`，并填写 `environments.dev.baseURL` 与 `token`。

## 目录
- src/config/app.config.ts       —— 全局配置（mock/live 切换）
- src/adapters/*                 —— mock/http adapter 实现，统一 `IN8nClient` 接口
- src/components/Layout/*        —— 布局：TopBar + SideNav + 内容区
- src/pages/*                    —— 页面骨架
- src/mocks/*                    —— 演示数据
- src/routes/Router.tsx          —— 路由入口

## 下一步建议
- 接入 React Flow 到 `WorkflowDetail` 画布
- 新增发布抽屉与激活/禁用真实调用（/rest/workflows/:id/(de)activate）
- 增加 TanStack Query 做请求缓存与加载状态
