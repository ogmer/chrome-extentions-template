# Chrome Extension Template

Next.js + TypeScript + TailwindCSS + Vite を使用した Chrome 拡張機能開発のテンプレートです。

## 機能

- TypeScript による型安全性
- TailwindCSS によるスタイリング
- Vite による高速な開発環境
- React + Next.js によるモダンな UI 開発

```

## Chrome 拡張機能としての読み込み方法

1. Chrome ブラウザで `chrome://extensions/` を開く
2. 右上の「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. プロジェクトの `dist` ディレクトリを選択

## プロジェクト構造

```

chrome-extension-template/
├── manifest.json # Chrome 拡張機能の設定ファイル
├── package.json # プロジェクトの依存関係管理
├── tsconfig.json # TypeScript の設定
├── vite.config.ts # Vite の設定
├── tailwind.config.js # TailwindCSS の設定
├── postcss.config.js # PostCSS の設定
├── index.html # メインの HTML ファイル
└── src/ # ソースコード
├── main.tsx # アプリケーションのエントリーポイント
├── App.tsx # メインの App コンポーネント
└── index.css # グローバルスタイル

```

```
