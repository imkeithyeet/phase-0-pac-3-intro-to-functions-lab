function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  
  function shout(string) {
    return string.toUpperCase();
  }


  function whisper(string) {
    return string;
  }
  "Hello!".toLowerCase(); // 'HELLO!'
  
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(shout(string));
  }
  function logWhisper(string) {
    console.log(whisper(string));
  } 

  function sayHiToHeadphonedRoommate(string) {
      if (string.toLowerCase() === string){
          return "I can't hear you!";
      }  else if (string.toUpperCase() === string) {
        return "YES INDEED!";
  }  else if ("Let's have dinner together!" === string) {
      return "I would love to!"
  }
  }

  
 
  