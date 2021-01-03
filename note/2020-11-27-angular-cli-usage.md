# angular cli 的使用

## 步骤

```
npm install -g @angular/cli

ng new my-dream-app

cd my-dream-app

ng serve

```

```
ng generate component xyz

ng generate service xyz

```


## 问题

* npm WARN tar ENOENT: no such file or directory, open

删掉node_modules，重新`npm install`或者`cnpm install`一下， 不行就换台Linux机器或者类Linux机器执行`npm install`完把项目拷到window下运行(ps: 前面的我试了我没成功，最后我是用这个曲线救国的)


* 配置外网访问

```
ng server --host 0.0.0.0
```


* Error [ERR_STREAM_WRITE_AFTER_END]: write after end

https://github.com/npm/npm/issues/19989

* installing Angular-cli in window 10

https://stackoverflow.com/questions/39743890/installing-angular-cli-on-windows-10/50611736


* webpack-dev-server-middleware-security
https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a


## 参考文献

https://cli.angular.io/


