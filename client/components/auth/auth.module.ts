'use strict';

angular.module('boilerSpaApp.auth', [
  'boilerSpaApp.constants',
  'boilerSpaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
