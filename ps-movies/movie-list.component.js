(function(){

  'use strict'
  var module = angular.module("psMovies")

  function fetchMovies($http) {
    return $http.get("/movies.json")
      .then(function(response) {
        return response.data
    })
  } 

  // add functionality to the controller inside this function
  function controller($http) {
    var model = this
    model.movies = []

    model.$onInit = function() {
      fetchMovies($http)
        .then(function(movies){
        model.movies = movies 
      })
    }

    model.upRating = function(movie) {
      if(movie.rating < 5){
        movie.rating += 1
      }
    }

    model.downRating = function(movie) {
      if(movie.rating > 0) {
        movie.rating -= 1
      }
    }

  }


  module.component("movieList", {
    controllerAs: "model",
    templateUrl: "/ps-movies/movie-list.component.html",
    controller: ["$http", controller]
  })

}())