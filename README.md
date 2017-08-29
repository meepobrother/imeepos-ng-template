## imeepos angular template

```sh
git remote add origin https://github.com/meepobrother/imeepos-ng-template.git
git push -u origin master
```


### 用法

```sh
git clone https://github.com/meepobrother/imeepos-ng-template.git my-app
cd my-app
yarn 
// 或者
npm install
```

### 发布包到npm

```ts
// 1: 更改package.json中的name为要发布的名字
npm run publishPackage
```

### 使用发布的包

```ts
npm install --save 包名
```


```ts
import { 模块 } from {包名}
```