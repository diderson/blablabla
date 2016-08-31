angular.module('WebApp')

.constant('RESTFUL_API', {
  requestURL: 'http://api.newbank.com:6754/'
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
});