angular.
    module('designApp').
    component('tableContainer', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/table/table.template.html',
        controller: function TableController() {
            
        }
    });