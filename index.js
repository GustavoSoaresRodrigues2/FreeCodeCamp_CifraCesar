const rot13 = function(str) { // LBH QVQ VG!
  let strArr = str.split('');
  let start = 'A'.charCodeAt(0);
  let middle = start + 13;
  let end = 'Z'.charCodeAt(0);
  
  strArr = strArr.map(function(currLetter){
    let code = currLetter.charCodeAt(0);
    let shift = 13;
    
    if (code >= start){
      if (code < middle){ // A-M
    }
      else if (code <= end){ // N-Z
      shift = code - middle;
      code = start;
    }
      return String.fromCharCode(code + shift);
    } 
    else { // non letters
      return currLetter;
    }
  });
  
  str = strArr.join('');
  return str;
}

// Change the inputs below to test
rot13("SERR CVMMN!");