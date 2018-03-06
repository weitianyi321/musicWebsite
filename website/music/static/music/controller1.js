'use strict';

angular.module('tweetApp')
  .controller('TweetsController1', ['$scope', '$http', function($scope, $http) {

    $scope.labels = ['common','business', 'entertainment', 'us', 'health', 'sci_tech', 'world', 'sport'];
    //$scope.tags = ['Common', 'Local', 'Entertainment', 'Sport', 'Health', 'Science & Technology', 'World', 'Business'];
    // $scope.all = true;

    $http.get("http://ec2-52-90-91-249.compute-1.amazonaws.com:5000/get_tweets_by_city/chicago").then(function(response) {
      $scope.tweets = response.data.result;
      console.log($scope.tweets);
    });


    $scope.labeledTweets = [];
    $scope.showTweetsByCategory = function(tag) {
      // $scope.all = false;
      $scope.labeledTweets = $scope.tweets[$scope.labels.indexOf(tag)][tag];
    }

    function extractTweetsIds(tweets, tweetsIds) {
      var length = tweets.length;
      var i;
      for (i = 0; i < length; i++) {
        tweetsIds.push(tweets[i].id_str);
      }
      //console.log(tweetsIds);
    }
}]);