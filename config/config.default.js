'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = app.name + '_1543719331264_1174';

  exports.middleware = [
    'locals',
    'access',
    'errorHandler'
  ];

  exports.errorHandler = {
    match: '/admin/api'
  }

  exports.mysql = {
    client: {
      host: '',
      port: '',
      user: '',
      password: '',
      database: 'smartyclass'
    },
    app: true,
    agent: false
  };

  exports.security = {
    csrf: {
      // cookieName: 'csrfToken',
      // sessionName: 'csrfToken',
      headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  };

  return exports;
};