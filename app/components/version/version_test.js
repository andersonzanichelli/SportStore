'use strict';

describe('sportStore.version module', function() {
  beforeEach(module('sportStore.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
