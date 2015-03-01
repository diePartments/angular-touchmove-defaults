(function() {
    'use strict';

    var module = angular.module('dp.utils.touchmoveDefaults', []),
        hasTouchmove = 'ontouchmove' in document,
        allowTouchmoveDefaultsCallback = function(e) {
            e.allowTouchmoveDefault = true;
        },
        preventTouchmoveDefaultsCallback = function(e) {
            if (e.allowTouchmoveDefault !== true) {
                e.preventDefault();
            }
        };

    /**
     * Prevent touchmove default behaviour (i.e. iOS momentum scroll)
     *
     * @directive preventTouchmove
     */
    module.directive('dpPpreventTouchmove', function() {

        return {
            restrict: 'A',
            link: function(scope, el) {
                if (!hasTouchmove) {
                    return;
                }

                el.on('touchmove', preventTouchmoveDefaultsCallback);

                el.on('$destroy', function() {
                    el.off('touchmove', preventTouchmoveDefaultsCallback);
                });
            }
        };
    });

    /**
     * Allow touchmove default behavior
     *
     * @directive
     */
    module.directive('dpAllowTouchmove', function() {

        return {
            restrict: 'A',
            link: function(scope, el) {
                if(!hasTouchmove) {
                    return;
                }

                el.on('touchmove', allowTouchmoveDefaultsCallback);

                el.on('$destroy', function() {
                    el.off('touchmove', allowTouchmoveDefaultsCallback);
                });
            }
        };
    });

    /**
     * Conditionally allow touchmove default behavior
     *
     * @directive
     * @param {expression} allowTouchmoveIf Condition to decide if default touchmove should be allowed
     */
    module.directive('dpAllowTouchmoveIf', function() {

        return {
            restrict: 'A',
            link: function(scope, el, attrs) {

                if(!hasTouchmove) {
                    return;
                }

                var condition = attrs.allowTouchmoveIf,
                    touchmoveCb = function(e) {
                        e.allowTouchmoveDefault = !!scope.$eval(condition);
                    };

                el.on('touchmove', touchmoveCb);

                el.on('$destroy', function() {
                    el.off('touchmove', touchmoveCb);
                });
            }
        };
    });
})();
