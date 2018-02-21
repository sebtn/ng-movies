(function() {
  'use strict'
  var module = angular.module("psMovies")

  module.component('movieRating', {
    templateUrl: '/ps-movies/movie-rating.component.html',
    bindings: {
      value: '<'
    },
    controllerAs: "model",
    transclude: true,
    controller: function() {
      var model = this

      model.$onInit = function() {
        model.entries = new Array(model.value)
      }

      model.$onChanges = function() {
        model.entries = new Array(model.value)        
      }

    }
  })

}())