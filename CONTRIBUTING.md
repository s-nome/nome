# Contributing to nome

## セットアップ
開発環境
```bash
$ npm ci # Node.jsのバージョンは.node-versionを参照
$ npx husky install # gitフックを有効にする
$ npm run dev # 開発環境を起動(clientとserver両方)
```

本番環境（仮）
```bash
$ npm run build
$ npm start # http://localhost:3030/
```

## パッケージ管理について
npmのworkspacesを利用してMonoRepo構成をとっている。
https://docs.npmjs.com/cli/v7/using-npm/workspaces

新しくnpmパッケージをinstallする場合は下記のように`-w <packages>`を指定する必要がある。
```bash
npm install abbrev -w client
```

## コミットメッセージの規約について
[commitlint](https://github.com/conventional-changelog/commitlint)と[husky](https://github.com/typicode/husky)によってコミットメッセージの制約を設けている。

commitlintのデフォルトの規約である下記に従っている。
https://www.conventionalcommits.org/ja/v1.0.0/

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 推奨される`type`例
- fix: バグ修正
- feat: 新機能の実装
- build: ビルド関連
- chore: プロダクションコードに変更を加えない作業
- ci: CI関連
- docs: ドキュメントの修正、更新
- style: 空白、書式設定、セミコロンの欠落など
- refactor: バグ修正や機能追加ではないコードの変更
- perf: パフォーマンスを向上させるコードの変更
- test: テストの追加、修正

### 使用例
```bash
$ feat(client): サイドバーの折りたたみ機能
```
