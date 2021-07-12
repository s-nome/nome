# Contributing to nome

## セットアップ
開発環境
```bash
$ npm ci # Node.jsのバージョンは.node-versionを参照
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

## コミットメッセージルール（仮）

```bash
$ git commit -m '<Prefix>: Message here...'
```

下記のいずれかの`Prefix`をコミットメッセージに含めてください。

- chore: プロダクションコードに変更を加えない作業
- docs: ドキュメントの修正、更新
- feat: 新機能の実装
- fix: バグ修正
- perf: パフォーマンスを向上させるコードの変更
- refactor: バグ修正や機能追加ではないコードの変更
- style: 空白、書式設定、セミコロンの欠落など
- test: テストの追加、修正
