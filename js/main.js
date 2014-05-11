var arcsAll = new Datamap({
  element: document.getElementById("map-all"),
  scope: 'usa',
  fills: {
  defaultFill: 'rgba(249,225,206,0.9)' //any hex, color name or rgb/rgba value
  },
  geographyConfig: {
    highlightOnHover: false,
    popupOnHover: false
  },
  data: {
    'TX': { fillKey: 'win' },
    'FL': { fillKey: 'win' },
    'NC': { fillKey: 'win' },
    'CA': { fillKey: 'win' },
    'NY': { fillKey: 'win' },
    'CO': { fillKey: 'win' }
  },
  arcConfig : {
  }
});

arcsAll.arc([
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    //Houston, TX
    destination: {
      latitude: 29.76,
      longitude: -95.36
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //St. Louis, MO
      latitude:38.62,
      longitude: -90.19
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //San Antonio, TX
      latitude:29.42,
      longitude: -98.49
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //West Palm Beach, FL
      latitude:26.71,
      longitude: -80.05
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //College Station, TX
      latitude:30.62,
      longitude: -96.33
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Baltimore, MD
      latitude:39.29,
      longitude: -76.61
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Belton, SC
      latitude:34.52,
      longitude: -82.49
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Little Rock, AK
      latitude:67.62,
      longitude: -146.16
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Cleveland, OH
      latitude:41.49,
      longitude: -81.69
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Christiansburg, VA
      latitude:37.14,
      longitude: -80.41
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Breckenridge, TX
      latitude:32.75,
      longitude: -98.9
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Belton, SC
      latitude:34.52,
      longitude: -82.49
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Medford, OR
      latitude:42.32,
      longitude: -122.87
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Richmond, VA
      latitude:37.54,
      longitude: -77.43
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Lubbock, TX,
      latitude:33.57,
      longitude: -101.85
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Peru, Indiana
      latitude: 40.75,
      longitude: -86.06
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Baton Rouge, LA
      latitude:30.45,
      longitude: -91.14
    }
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Conroe, TX
      latitude:30.31,
      longitude: -95.45
    },
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Odessa, TX
      latitude:31.84,
      longitude: -102.36
    },
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
    //Greensboro, NC
      latitude:36.07,
      longitude: -79.79
    },
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Indianapolis, IN
      latitude:39.76,
      longitude: -86.15
    },
  },
  {
    origin: {
      latitude: 32.78,
      longitude: -96.8
    },
    destination: {
      //Jackson, MS
      latitude:32.29,
      longitude: -90.18
    }
  },
],  {strokeWidth: 1, arcSharpness: 1.4, strokeColor: 'rgba(243,163,114,1)', animationSpeed: 50000


});

var One = $("#one audio")[0];

$(document).ready(function(){
  var one = $("#one audio")[0];
  $("#one").mouseenter(function() {
    one.play();
  });
  $("#one").mouseleave(function() {
    one.pause();
  });

  var two = $("#two audio")[0];
  $("#two").mouseenter(function() {
    two.play();
  });
  $("#two").mouseleave(function() {
    two.pause();
    two.currentTime = 0;
  });

  var three = $("#three audio")[0];
  $("#three").mouseenter(function() {
    three.play();
  });
  $("#three").mouseleave(function() {
    three.pause();
    three.currentTime = 0;
  });

  var four = $("#four audio")[0];
  $("#four").mouseenter(function() {
    four.play();
  });
  $("#four").mouseleave(function() {
    four.pause()
    four.currentTime = 0;
  });
  var five = $("#five audio")[0];
  $("#five").mouseenter(function() {
    five.play();
  });
  $("#five").mouseleave(function() {
    five.pause()
    five.currentTime = 0;
  });

  $(function() {
  });
});
