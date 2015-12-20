'use strict';

describe('Controller: TemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('templateStoreApp'));

  var TemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TemplateCtrl = $controller('TemplateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TemplateCtrl.awesomeThings.length).toBe(3);
  });
});
