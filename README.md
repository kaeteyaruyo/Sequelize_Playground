# Sequelize Playground

* 各位安，這是一個[sequelize](http://docs.sequelizejs.com)的範例code資料夾，大部份程式碼改編自sequelize官方網站，並加上一些測試用的資料。
* 這個repo僅為了筆記用，並沒有實作任何實用的功能。
* 非常歡迎各位想要學習sequelize的朋友們一起[做共筆](https://paper.dropbox.com/doc/Sequelize-E5g5n0dlVQdf1HjLS0zkp)~

## Installation

* 在開始執行測試code之前，你需要準備以下東西：
    * Database
        * Database Server（我使用的是MariaDB/MySQL，不是使用MySQL的朋友們請至Config.js變更protocol)
        * Database GUI（可選）
    * Server
        * Node.js (我使用9.8.0）
        * npm （我使用6.0.0）
    * module
        * Database的JavaScipt套件
        * Sequelize
        * Sequelize-auto（可選）

* 我們假設你已經會安裝Database Server，此處不贅述如何安裝
* 我們也假設你已經裝好node和npm，此處不贅述如何安裝
* 所有module皆可使用npm安裝，請在package.json所在的資料夾打 `npm install`

## Configuration
* 在開始執行前，請複製一份 `config.js.default`，並重新命名為 `config.js`，並填入你的資料庫使用者帳號密碼，以及對應的protocol(dialect)

## Run
* 欲執行測試程式碼，請打 `node ./path/file_name.js`，並至資料庫內查看執行是否成功