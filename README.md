# Webpack Boilerplate
Boilerplate for creating static HTML sites

## 開発の始め方
Node.js のバージョンは、 package.json 内の `engines.node` を参照してください。  
※ 指定以外のバージョンでパッケージをインストールした際は、エラーが表示されます。

### 1. パッケージのインストール  
開発に依存するパッケージを package-lock.json からインストールします。

```
npm ci
```

### 2. ルート直下に env ファイルの作成
開発用、テスト用、本番用の3種作成する。  
`.env.example` を参照。

- 開発用: `.env.development.local`
- テスト用： `.env.test.local`
- 本番用: `.env.production.local`

### 3. 開発サーバーの立ち上げ
```
npm run start
```

### 4. コミット前
stylelint

```
npm run stylelint
```

```
npm run stylelint:format
```

eslint

```
npm run eslint
```

```
npm run eslint:format
```

### リリース準備
```
npm run clean
```

```
npm run build
```

※ テストアップしたい場合

```
npm run test
```

※ 非圧縮ファイルが必要な場合

```
npm run dev
```
