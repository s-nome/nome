# Contributing to nome

## Development Guidelines
- 基本的にはissueで対応範囲や実装方法を明確にした後にそれに紐づくPRを作成する
- 議論したい内容がある場合でもissueテンプレートをもとにissueを立てる
- 自分以外のメンバがPRのレビューを行い確認できたらマージを行う
- 既に存在するissueをセルフアサインするか、新しくissueをたてて作業を行う
- 作業ブランチは`feature/issue-XXXX`の形式でIssue番号でブランチを切る

## Set up
開発環境
```bash
$ npm ci # Node.jsのバージョンは.node-versionを参照
$ npm run dev # 開発環境を起動(clientとserver両方)
```

本番環境（仮）
```bash
$ npm run build
$ npm start # http://localhost:5000/
```

## Package management
npmのworkspacesを利用してMonoRepo構成をとっている。
https://docs.npmjs.com/cli/v7/using-npm/workspaces

新しくnpmパッケージをinstallする場合は下記のように`-w <packages>`を指定する必要がある。
```bash
npm install abbrev -w client
```

## Commit message Guidelines
[commitlint](https://github.com/conventional-changelog/commitlint)と[husky](https://github.com/typicode/husky)によってコミットメッセージの制約を設けている。

commitlintのデフォルトの規約である下記に従っている。
https://www.conventionalcommits.org/ja/v1.0.0/

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 推奨される`type`
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

## Merge Guidelines
squashで以下のコメントルールに沿ってマージを行う。

```bash
<プルリク識別子>: <プルリクタイトル> (#<プルリク番号>)

* <commitメッセージ01>

* <commitメッセージ02>

* <commitメッセージ03>
```
