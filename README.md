# lerna 流程 https://www.lernajs.cn/

1. lerna 有两种工作模式：
   independent mode: 配合 git 文件变动，只发布修改的的 packge(推荐)
   fixed/Locked mode: 默认模式，不管是否修改，每次全量发布
2. lerna.json 配置，bootstrap/hoist，将各个 package 的 node_modules 的依赖统一放在根目录下的 node_modules 中；
   （1）如果之前的 package 已经下载依赖，可以使用 lerna clean 清理；
   （2）如果使用 yarn，则不能使用 bootstrap/hoist, 官方说明：https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/

   需在根目录下的 package.json 配置:
   "workspaces": [
   "packages/*"
   ]
   然后直接使用 yarn 下载依赖

3. 安装依赖, -W 是 workspace 的意思
   yarn add -W -D eslint
   单独给某个包安装：$ lerna workspace packagesname add <package>[@version]
4. lerna 发布失败，git tag 提交成功，但是包发布失败
   https://github.com/huruji/blog/issues/67
5. react没有做测试   
