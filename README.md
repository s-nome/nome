# nome
All-in-one workspace.

## パッケージ管理について
npmのworkspacesを利用してMonoRepo構成をとっている。
https://docs.npmjs.com/cli/v7/using-npm/workspaces

新しくnpmパッケージをinstallする場合は下記のように`-w <packages>`を指定する必要がある。
```bash
npm install abbrev -w client
```
