## 啟動專案
```bash
# 安裝依賴
npm install
# 啟動伺服器
npm run dev 或 node index.js

Tool-taco-recipe:使用 Node.js + Express 建置，搭配 EJS 模板進行前端渲染
### 功能簡介
點選喜歡的食材（雞肉、牛肉、魚），顯示對應的 Taco 食譜與食材組成。
### 技術
- Node.js
- Express
- EJS
- LocalStorage（前端背景色與圖片記憶）
### 使用方法
1. 進入 `/` 主頁
2. 點選想吃的 taco 食材
3. 頁面即顯示對應食譜內容與圖片
4. 可上傳圖片或切換背景顏色，自訂網站風格

Tool-qr-code:使用 Node.js + Express 建置，搭配 EJS 模板進行前端渲染
### 功能簡介
使用者可輸入任意文字或網址，即時生成對應的 QR Code。
### 技術棧
- Node.js
- Express
- EJS
- [qrcode](https://www.npmjs.com/package/qrcode) 套件
### 使用方法
1. 進入 `/qr` 路由
2. 輸入要產生的文字或網址
3. 點擊「產生」，即顯示 QR Code 圖片

