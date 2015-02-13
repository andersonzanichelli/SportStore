'use strict';

angular.module('sportStore.version', [
  'sportStore.version.interpolate-filter',
  'sportStore.version.version-directive'
])

.value('version', '0.1');
