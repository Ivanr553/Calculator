var d = [];
var t = [];
var e = [0];
var fun = "";

function join(b) {
  return b.join('')*1;
}

function zero(a, s) {
  function join(b) {
    return b.join('')
  }
 if(s[0] == ".") {
  a.push(".");
  a.push(0);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(0);
    return document.getElementById("screen").value = join(a);
    }
}

function one(a, s) {
function join(b) {
  return b.join('')*1;
}
if(s[0] == ".") {
  a.push(".");
  a.push(1);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(1);
    return document.getElementById("screen").value = join(a);
    }
}

function two(a, s) {
function join(b) {
  return b.join('')*1
}
if(s[0] == ".") {
  a.push(".");
  a.push(2);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(2);
    return document.getElementById("screen").value = join(a);
    }
}

function three(a, s) {
function join(b) {
  return b.join('')*1
}
if(s[0] == ".") {
  a.push(".");
  a.push(3);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(3);
    return document.getElementById("screen").value = join(a);
    }
}

function four(a, s) {
function join(b) {
  return b.join('')*1
}
if(s[0] == ".") {
  a.push(".");
  a.push(4);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(4);
    return document.getElementById("screen").value = join(a);
    }
}

function five(a, s) {
  function join(b) {
    return b.join('')*1
  }
if(s[0] == ".") {
  a.push(".");
  a.push(5);
  s[0] = "";
  return document.getElementById("screen").value = join(a);
    }
  else {
    a.push(5);
    return document.getElementById("screen").value = join(a);
    }
}

function six(a, s) {
  function join(b) {
    return b.join('')*1
  }
  if(s[0] == ".") {
    a.push(".");
    a.push(6);
    s[0] = "";
    return document.getElementById("screen").value = join(a);
  }
  else {
    a.push(6);
    return document.getElementById("screen").value = join(a);
  }
}

function seven(a, s) {
function join(b) {
  return b.join('')*1
}
if(s[0] == ".") {
    a.push(".");
    a.push(7);
    s[0] = "";
    return document.getElementById("screen").value = join(a);
  }
  else {
    a.push(7);
    return document.getElementById("screen").value = join(a);
  }
}

function eight(a, s) {
  function join(b) {
    return b.join('')*1;
  }
if(s[0] == ".") {
    a.push(".");
    a.push(8);
    s[0] = "";
    return document.getElementById("screen").value = join(a);
  }
  else {
    a.push(8);
    return document.getElementById("screen").value = join(a);
  }
}

function nine(a, s) {
  function join(b) {
    return b.join('')*1
  }
if(s[0] == ".") {
    a.push(".");
    a.push(9);
    s[0] = "";
    return document.getElementById("screen").value = join(a);
  }
  else {
    a.push(9);
    return document.getElementById("screen").value = join(a);
  }
}

function period(a, s) {
  if(s != "."){
  s.push(".");
  return "entered";
  }
  else {
    return "null";
  }
}

function add(a, m) {
  if(m[0] != 0) {
    var answer = (m.join('')*1) + (a.join('')*1);
    fun = "add";
    d = [];
    e = [answer];
    return document.getElementById("screen").value = answer;
  }
  else {
    m[0] = a.join('')*1;
    d = [];
    fun = "add";
    return "stored";
  }
}
function subtract(a, m) {
   if(m[0] != 0) {
     var answer = (m.join('')*1) - (a.join('')*1);
     fun = "sub";
     s = [];
     e = [answer];
     return document.getElementById("screen").value = answer;
  }
  else {
    m[0] = a.join('')*1;
    fun = "sub";
    d = [];
    return "stored";
  }
}

function multiply(a, m) {
   if(m[0] != 0) {
     var answer = (m.join('')*1)*(a.join('')*1);
     fun = "mult";
     d = [];
     e = [answer];
     return document.getElementById("screen").value = answer;
  }
  else {
    m[0] = a.join('')*1;
    fun = "mult";
    d = [];
    return "stored";
  }
}

function divide(a, m) {
   if(m[0] != 0) {
    var answer = (m.join('')*1)/(a.join('')*1);
    fun = "div";
    d = [];
    e = [answer];
    return document.getElementById("screen").value = answer;
  }
  else {
    m[0] = a.join('')*1;
    d = [];
    fun = "div";
    return "stored";
  }
}

function sqrt(a) {
  if(a.join("") != "") {
    var answer = Math.pow(a.join("")*1, 0.5);
    d = [answer];
    return document.getElementById("screen").value = answer;
  }
  else {
    return "null";
  }
}

function percent(a, m) {
  console.log(fun);
  if(m.join("") != "") {
   var answer = (m.join("")*1)*(a.join("")*1/100);
    if(fun === "add") {
      e= [0];
      return document.getElementById("screen").value = answer + m.join("")*1;
    }
    if(fun === "sub") {
      e= [0];
       return document.getElementById("screen").value = m.join("")*1 - answer;
    }
    if(fun === "mult") {
      e= [0];
       return document.getElementById("screen").value = m.join("")*1*answer;
    }
    if(fun === "div") {
      e= [0];
       return document.getElementById("screen").value = m.join("")*1/answer;
    }
  }
}

function equal(a, m) {
  if(m[0] === 0) {
    if(a.join('') == "") {
      return 0;
    }
    else {
      var answer = a.join('')*1;
      return document.getElementById("screen").value = answer;
    }
   }
  else {
    if(fun == "add") {
      fun = "";
      var answer = a.join("")*1 + m.join("")*1;
      e = [0];
      d = [answer];
      return document.getElementById("screen").value = answer;
    }
    if(fun == "sub") {
      fun = "";
      var answer = (m.join('')*1)-(a.join('')*1);
      e = [0];
      d = [answer];
      return document.getElementById("screen").value = answer;
    }
    if(fun == "mult") {
      fun = "";
      var answer = (m.join('')*1)*(a.join('')*1);
      e = [0];
      d = [answer];
      return document.getElementById("screen").value = answer;
    }
    if(fun == "div") {
      fun = "";
      var answer = (m.join('')*1)/(a.join('')*1);
      e = [0];
      d = [answer];
      return document.getElementById("screen").value = answer;
    }
  }
}

function cleard() {
  d = [];
  e = [0];
  f = "";
  t = [];
  return document.getElementById("screen").value = "";
}

function negative() {
  if(d.join("") != ""){
    var answer = d.join("")*(-1);
    d = [answer];
    return document.getElementById("screen").value = answer;
  }
}
