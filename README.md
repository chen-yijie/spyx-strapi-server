## ⚙️ 准备环境
安装PostgreSQL 15 
```
# 添加PostgreSQL 15 源
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

wget -qO- https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo tee /etc/apt/trusted.gpg.d/pgdg.asc &>/dev/null

sudo apt update

# 安装postgresql
sudo apt install postgresql -y

# 状态查询
sudo systemctl enable postgresql
sudo systemctl start postgresql
sudo systemctl status postgresql
psql --version

# 登录postgres
sudo -u postgres psql

# 修改密码
postgres=# ALTER USER postgres PASSWORD 'demoPassword';

# 允许远程连接
sudo vi /etc/postgresql/15/main/postgresql.conf
listen_addresses = '*'
sudo vi /etc/postgresql/15/main/pg_hba.conf
host  all  all 0.0.0.0/0 md5

# 开启防火墙
sudo ufw allow 5432/tcp

# 远程连接postgres
psql -h 192.168.1.192 -U postgres

```

安装nodejs
```
bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/main/install.sh)"

# 列出所有可安装版本
nvm ls-remote

# 安装某个版本Node
nvm install v16.18.1

# 切换Node版本
nvm use 16.18.1

# 设置node_modules路径
cd ~
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# checkout 代码
git clone https://github.com/chen-yijie/spyx-strapi-server.git

# 编译发布版代码
npm install
NODE_ENV=production npm run build

# 开启防火墙1337端口
sudo ufw allow 1337/tcp
```

pm2 配置

```
npm install pm2@latest -g

sudo ln -s ~/.npm-global/bin/pm2 /usr/local/bin/

生成配置文件
cd ~
pm2 init
sudo nano ecosystem.config.js
```
```
module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/your-name/my-strapi-project/my-project',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'localhost', // database endpoint
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'postgres', // DB name
        DATABASE_USERNAME: 'postgres', // your username for psql
        DATABASE_PASSWORD: '123456', // your password for psql
      },
    },
  ],
};
```
```
# 启动配置文件
pm2 start ecosystem.config.js

# 列表 PM2 启动的所有的应用程序
pm2 list

# 显示每个应用程序的CPU和内存占用情况
pm2 monit 

# 停止所有的应用程序
pm2 stop all 
```

部署web hook自动拉取代码
https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync#step-4-testing-the-webhook



# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`
F
Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
