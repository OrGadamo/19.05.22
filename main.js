function upperString(text) {
  return text.toUpperCase();
}
// console.log(upperString("hello"));
function stringToArray(numbersString) {
  var arr = [];
  var catchnum = "";
  for (var i = 0; i < numbersString.length; i++) {
    if (numbersString[i] != ",") {
      catchnum += numbersString[i];
    } else {
      arr.push(parseInt(catchnum));
      catchnum = "";
    }
  }
  return arr;
}
// console.log(stringToArray("14,2,3,7894,5,6,7,8,9,0"));
function getMaxValue(str) {
  var valueIndex = "";
  var maxvalue = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ":") {
      valueIndex = i + 1;
    }
    if (str[i] == ",") {
      if (maxvalue.length < str.substring(valueIndex, i).length) {
        maxvalue = str.substring(valueIndex, i);
      }
    }
    if (str.length == i + 1) {
      if (maxvalue.length < str.substring(valueIndex, i + 1).length) {
        maxvalue = str.substring(valueIndex, i + 1);
      }
    }
  }
  return maxvalue;
}
// console.log(getMaxValue("name:nathan,family:krashey,city:haifa"));
function getValueForKey(str, key) {
  var myvalue = "";
  if (str.indexOf(key) != -1) {
    var i = str.indexOf(key) + key.length + 1;
    while (str[i] != "," && str.length != i) {
      myvalue += str[i++];
    }
    return myvalue;
  }
  return "key not found";
}
// console.log(getValueForKey("name:nathan,family:krashey,city:haifa", "city"));
function getKeyLength(str) {
  var keylength = 0;
  var getchar = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ":") {
      getchar = false;
    }
    if (getchar) {
      keylength++;
    }
    if (str[i] == ",") {
      getchar = true;
    }
  }
  return keylength;
}
// console.log(getKeyLength("name:or,family:gadamo,city:Rehovot"));
function getValueLength(str) {
  {
    var valuelength = 0;
    var getchar = false;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == ",") {
        getchar = false;
      }
      if (getchar) {
        valuelength++;
      }
      if (str[i] == ":") {
        getchar = true;
      }
    }
    return valuelength;
  }
}
// console.log(getValueLength("name:or,family:gadamo,city:Rehovot"));
function checkShortnLong(str) {
  if (str.length > 5) {
    return "long";
  }
  return "short";
}
// console.log(checkShortnLong(prompt("word pls")));
function getIndexCharInString(str, chr) {
  if (str.indexOf(chr) != -1) {
    return str.indexOf(chr);
  }
  return "not found";
}
// console.log(getIndexCharInString("hello", "o"));
function getIndexaInstring(str) {
  if (str.indexOf("a") == -1) {
    return "not found";
  }
  return str.indexOf("a");
}
// console.log(getIndexaInstring("helloa"));
function getrInString(str) {
  if (str.indexOf("r") != -1) {
    return true;
  }
  return false;
}
// console.log(getrInString("hellor"));
function getCharInString(str, chr) {
  if (str.indexOf(chr) != -1) {
    return true;
  }
  return false;
}
// console.log(getCharInString("hello", "r"));
function getIndexInstringNew(str, chr) {
  if (str.lastIndexOf(chr) == -1) {
    return "not found";
  } else {
    console.log(str + str.lastIndexOf(chr));
  }
}
// getIndexInstringNew("hello", "e");
function firstInString(str, num) {
  return str.substring(0, num);
}
// console.log(firstInString("hello", 2));
function getNewStringFromChar(str, chr) {
  return str.substring(str.indexOf(chr), str.indexOf(chr) + 4);
}
// console.log(getNewStringFromChar("sayonara", "y"));
function copyCharInString(str, chr) {
  return str.substring(str.indexOf(chr));
}
// console.log(copyCharInString("hello", "l"));
function cutFromString(str, index) {
  if (index >= str.length) {
    return "index is too big";
  }
  return str.substring(index);
}
// console.log(cutFromString("hello", 5));
function cut3FromString(str, index) {
  if (index >= str.length) {
    return "the index is too big";
  }
  var newstr = "";
  for (var i = index; i < str.length; i++) {
    if (newstr.length < 3) {
      newstr += str[i];
    }
  }
  return newstr;
}
// console.log(cut3FromString("hello", 5));
function cutStringByNumbers(str, num1, num2) {
  if (num1 < str.length && num2 < str.length) {
    return str.substring(Math.min(num1, num2), Math.max(num1, num2) + 1);
  }
  return "invalid numbers ";
}
// console.log(cutStringByNumbers("check my function", 16, 0));
function getFirst3ofString(str) {
  if (str.length < 3) {
    return "invalid string for function";
  }
  return str.substring(0, 3);
}
// console.log(getFirst3ofString("hello"));
function cutFromStringByCharNum(str, num, chr) {
  if (str.indexOf(chr) != -1) {
    if (num * 0 == 0) {
      return str.substring(str.indexOf(chr), str.indexOf(chr) + num);
    }
    return str.substring(str.indexOf(chr));
  }
  return "invalid char";
}
// console.log(cutFromStringByCharNum("hello", "none", "l"));
function analyseName(myname) {
  if (myname.indexOf(" ") != -1) {
    console.log("there is space");
    console.log(
      myname.substring(0, myname.indexOf(" ")) +
        " " +
        myname.substring(myname.indexOf(" ") + 1, myname.length)
    );
    console.log("there is " + (myname.length - 1) + " chars in name");
  } else {
    console.log("there is no space");
    console.log(myname);
    console.log("there is " + myname.length + " chars in name");
  }
}
// console.log(analyseName(prompt("enter name")));
function checkStringEqual(str1, str2) {
  if (str1.toLowerCase() == str2.toLowerCase()) {
    return true;
  }
  return false;
}
// console.log(checkStringEqual("hello", "hllo"));
function checkStringEqual2(str1, str2) {
  if (str1.toUpperCase() == str2.toUpperCase()) {
    return true;
  }
  return false;
}
// console.log(checkStringEqual2("hello", "hllo"));
function getBiggerName() {
  var firstname = prompt("enter first name:");
  var lastname = prompt("enter last name:");
  if (firstname.length > lastname.length) {
    return firstname;
  } else if (firstname.length < lastname.length) {
    return lastname;
  }
  return "they both equal";
}
// console.log(getBiggerName());
function checkSomthingInNames() {
  var firstname = prompt("enter first name:");
  var lastname = prompt("enter last name:");
  if (firstname.indexOf("a") == -1) {
    console.log("no a in first name");
  } else {
    console.log("there is a in first name");
  }
  if (lastname.indexOf("api" == -1)) {
    console.log("there isn't api in last name");
  } else {
    console.log("there is api in last name");
  }
}
// checkSomthingInNames();
function checkLong(str) {
  if (str.length > 5) {
    return "long";
  }
  return "short";
}
//console.log(checkLong("hello"));
function checkCountry(country) {
  if (country.length < 3) {
    return "yes";
  }
  return "no";
}
// console.log(checkCountry("israel"));
function nothingToDo(str, chr) {
  if (str.length > 6) {
    return str;
  } else str.indexOf(chr);
}
// console.log(nothingToDo("hello","h"));
function checkCharInString(str, chr) {
  if (str.indexOf(chr) == -1) {
    return str;
  }
  return str.indexOf(chr);
}
// console.log(checkCharInString("hello","h"));
function innitialsName(firstname, lastname) {
  return firstname[0] + ". " + lastname.toUpperCase();
}
// console.log(innitialsName("or", "gadamo"));
function checkLastNames(lname1, lname2) {
  if (lname1.length > lname2.length) {
    console.log(lname2.toLowerCase());
    return lname1;
  } else if (lname1.length < lname2.length) {
    console.log(lname1.toLowerCase());
    return lname2;
  }
  return "equal length";
}
// console.log(checkLastNames("Levi", "Gadamo"));
function checkCharInName(myname, chr) {
  if (myname.indexOf(chr) != -1) {
    return myname;
  }
  alert("no name found");
}
// console.log(checkCharInName("Or Gadamo", prompt("enter a chr to search name")));
function firstUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function getIndexOfSpace(text) {
  var spaceindex = [];
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      spaceindex.push(i);
    }
  }
  return spaceindex;
}
function getWordsArray(text, arr) {
  var wordsarray = [];
  wordsarray.push(text.substring(0, arr[0]));
  wordsarray.push(text.substring(arr[0] + 1));
  return wordsarray;
}
function dividetext(text) {
  var spaceindex = getIndexOfSpace(text);
  if (spaceindex.length == 0) {
    return firstUpperCase(text);
  } else if (spaceindex.length == 1) {
    return getWordsArray(text, spaceindex);
  } else if (spaceindex.length > 2) {
    return "invalid name";
  }
  return (
    "name: " +
    text.substring(0, spaceindex[0]) +
    " middle name: " +
    text.substring(spaceindex[0] + 1, spaceindex[1]) +
    " last name: " +
    text.substring(spaceindex[1] + 1)
  );
}
// console.log(dividetext(prompt("please enter name")));
