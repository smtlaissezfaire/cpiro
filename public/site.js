var Site = (function() {
  var obj = {};

  var parts = [
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 0,
        seconds: 0
      },
      finish: {
        minutes: 0,
        seconds: 8.7
      }
    },
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 5,
        seconds: 45.3
      },
      finish: {
        minutes: 5,
        seconds: 47
      }
    },
    {
      start: {
        minutes: 11,
        seconds: 12.5
      },
      finish: {
        minutes: 11,
        seconds: 20
      }
    }
  ];

  var timeToSeconds = function(time) {
    return (time.minutes * 60) + time.seconds;
  };

  obj.init = function() {
    var params = { allowScriptAccess: "always", fullscreen: true };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/xrIjfIjssLE?enablejsapi=1&playerapiid=ytplayer&version=3&controls=0",
                       "ytapiplayer", "100%", "100%", "8", null, null, params, atts);
  };

  obj.onYouTubePlayerReady = function(playerId) {
    var player = document.getElementById("myytplayer");

    var seekTo = function(time) {
      player.seekTo(timeToSeconds(time));
    };

    var index = 0;
    var run = function() {
      var partStart = parts[index].start;
      var partEnd = parts[index].finish;

      seekTo(partStart);

      var interval = setInterval(function() {
        if (player.getCurrentTime() >= timeToSeconds(partEnd)) {
          clearInterval(interval);
          index++;

          if (index > parts.length - 1) {
            index = 0;
          }
          run();
        }
      }, 1000);
    };
    run();
  };

  return obj;
}());
