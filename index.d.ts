/**
 * @link https://github.com/nabiltntn/loggedin-mixin
 */

interface LoggedInMixinError {
  error: string;
  message?: string;
  reason?: string;
}

interface ValidatedMethodOption {
  checkLoggedInError?: LoggedInMixinError;
  checkRoles?: {
    roles: string|string[]
    rolesError: LoggedInMixinError
  };
}

declare module 'meteor/tunifight:loggedin-mixin' {
  export let LoggedInMixin: any;
}
