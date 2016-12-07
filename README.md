# NgDb

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



mongodb setup 
----------------------------
yere (C:\Program Files\MongoDB\Server\3.2\bin) gidip oradaki .exe’leri çalıştırmayacağım. MongoDB biraz önce de belirttiğim gibi C:\Program Files\MongoDB\Server\3.2\bin yoluna kuruluyor ve burada şuanda bizim için önemli olan 2 .exe dosyası var. Birincisi mongod.exe ki bu exe ile server i çalıştırmaya başlıyoruz. Diğeri ise mongo.exe ki bu exe ile de veritabanı işlemlerimizi gerçekleştireceğiz.

/////////////////////////////////////////

As Admin, create directory:
mkdir c:\mongo\data\db
As Admin, install service:
.\mongod.exe --install --logpath c:\mongo\logs --logappend --bind_ip 127.0.0.1 --dbpath c:\mongo\data\db --directoryperdb
Start MongoDB:
net start MongoDB
Start Mongo Shell:
c:\mongo\bin\mongo.exe
