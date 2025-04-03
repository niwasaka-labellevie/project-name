# 22.6.0 のnodeを使う。try~リポジトリのDocker見ると後ろになんかついている(22.6.0 の中でも最小限のものを使う？)
FROM node:22.6.0

# Create and set the working directory →　作業ディレクトリを作る？ 多分なければ作る
WORKDIR /app

# Copy package.json and package-lock.json　→ app/package.jsonにpackage.jsonの内容をコピーする。
COPY package*.json ./

# Install dependencies　→ package.json にあるライブラリ一式インストール
RUN npm install

# Expose the application port → 3000 ポートで起動する
EXPOSE 3000

# Run the application → アプリ起動
CMD ["npm", "start"]