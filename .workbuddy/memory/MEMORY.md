# MEMORY.md

## 项目信息
- **项目名称**: hangzhou-cppcc-website（杭州市政协 · 上城区政协工作平台）
- **技术栈**: React 18 + React Router v6 + Vite 6 + TailwindCSS 3
- **路径**: C:\Users\33132\Desktop\Web程序设计\project8\project
- **课程**: Web程序设计 / 2026spring

## 项目结构
- 7个主要页面: 首页、委员之家、街道委员小组、界别基本情况、协商民主实践中心、委员履职平台、星级委员工作室、履职计划
- 6个公共组件: Layout, DataTable, PhotoGallery, SectionTitle, TabSwitch, Timeline
- 数据层: src/data/mock.js 包含所有模拟数据
- 主色调: #C41230 (政协红), #1A56DB (蓝色辅助)

## 开发记录
- 2026-04-23: 完成项目整体搭建和所有页面数据填充
  - 补充了 30 条模拟委员数据
  - 补充了 14 个街道的完整信息（含委员名单）
  - 补充了 18 个界别的详细信息
  - 补充了 50 个委员工作室数据（25个五星、17个四星）
  - 补充了 18 项界别履职计划和 28 项民生议事堂计划
  - 补充了两个协商民主实践中心的详细信息和年度活动计划
  - 构建通过，49 模块，生产包 ~236KB
