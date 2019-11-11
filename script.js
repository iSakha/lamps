
// ============ Firebase Config ===============

var firebaseConfig = {
  apiKey: "AIzaSyDtY9LIQJoFuYy_dIpLFH3B5jnx5Ta-gjs",
  authDomain: "third-ac40d.firebaseapp.com",
  databaseURL: "https://third-ac40d.firebaseio.com",
  projectId: "third-ac40d",
  storageBucket: "",
  messagingSenderId: "225707986765",
  appId: "1:225707986765:web:3d6dc784e9cd983e63b104"
};

// ============ Initialize Firebase ===============

firebase.initializeApp(firebaseConfig);
var database = firebase.database();



//=============== Functions ========================================
//==================================================================

//============  Create and remove tables  ==========================

//===============   Store table   ==================================

function createTable_1() {
  let table = document.createElement('table');

  table.id = 'lampStore';

  let parentTable = document.getElementById('tbl1');
  let myRow = document.createElement('tr');
  //console.log(myRow);
  let myCell = document.createElement('th');
  myCell.innerHTML = 'key';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'id <br>Лампы';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Наименование';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'PartNumber';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Прибор';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Время <br>службы';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Мощность';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Количество<br>на складе ';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Где лежит ';
  myRow.appendChild(myCell);

  table.appendChild(myRow);
  parentTable.appendChild(table);

}

function remove_Table_1() {
  table = document.getElementById('lampStore');
  table.remove();
}

//===============   IN table   ==================================

function createTable_2() {
  let table = document.createElement('table');

  table.id = 'lampIN';

  let parentTable = document.getElementById('tbl2');
  let myRow = document.createElement('tr');
  //console.log(myRow);
  let myCell = document.createElement('th');
  myCell.innerHTML = 'Дата';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'id <br>Лампы';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Наименование';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Прибор';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Кол-во';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Персонал';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Где лежит';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Примечания';
  myRow.appendChild(myCell);

  table.appendChild(myRow);
  parentTable.appendChild(table);

}

function remove_Table_2() {
  table = document.getElementById('lampIN');
  table.remove();
}

//===============   OUT table   ==================================

function createTable_3() {
  let table = document.createElement('table');

  table.id = 'lampOUT';

  let parentTable = document.getElementById('tbl3');
  let myRow = document.createElement('tr');
  //console.log(myRow);
  let myCell = document.createElement('th');
  myCell.innerHTML = 'Дата';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'id <br>Лампы';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Наименование';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Прибор';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Кол-во';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Персонал';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Где лежит';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Примечания 1';
  myRow.appendChild(myCell);
  myCell = document.createElement('th');
  myCell.innerHTML = 'Примечания 2';
  myRow.appendChild(myCell);

  table.appendChild(myRow);
  parentTable.appendChild(table);

}

function remove_Table_3() {
  table = document.getElementById('lampOUT');
  table.remove();
}
//------------------------------------------------------------------

//===============   Select tab     ==================================

function changeTab(_i) {
  let tab = [];
  tab = document.querySelectorAll('.tab');
  for (let i = 0; i < 4; i++) {
    tab[i].style.display = 'none';
  }
  tab[_i].style.display = 'block';

    // Got data 
    //ref = database.ref(currentBase);
    // switch(_i) {
    //   case 0: ref.on('value', gotData_1, errData);
    //   console.log('store selected');
    //   break;
    //   case 1: ref.on('value', gotData_2, errData);
    //   console.log('IN selected');
    //   break;
    //   case 2: ref.on('value', gotData_3, errData);
    //   console.log('OUT selected');
    //   break;
    // }
    ref = database.ref(currentBase);

    switch(btnValue) {
      case 0: ref.on('value', gotData_1, errData);
      console.log('store selected');
      break;
      case 1: ref.on('value', gotData_2, errData);
      console.log('IN selected');
      break;
      case 2: ref.on('value', gotData_3, errData);
      console.log('OUT selected');
      break;
    }

}

function myFunc() {  

}
  


function errData(err) {
  console.log('Error!');
  console.log(err);
}

//===============   Got data 1  ==================================

function gotData_1(data) {

  remove_Table_1();
  createTable_1();

  table = document.getElementById('lampStore');

  let array = new Array();

  var lamps = data.val();
  var keys = Object.keys(lamps);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    array[0] = k;
    array[1] = lamps[k].lampID;
    array[2] = lamps[k].lampName;
    array[3] = lamps[k].partNumber;
    array[4] = lamps[k].fixture;
    array[5] = lamps[k].lifeTime;
    array[6] = lamps[k].power;
    array[7] = lamps[k].qty;
    array[8] = lamps[k].location;

    // create a new row
    var newRow = table.insertRow(i + 1);

    for (var j = 0; j < 9; j++) {

      // create a new cell
      var cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = array[j];
    }
  }
  // Hide first column of the table (with database keys)
  for (var i = 0; i <= keys.length; i++) {
    table.rows[i].cells[0].style.display = 'none';
  }
  for (var i = 1; i <= keys.length; i++) {
    table.rows[i].cells[2].id = 'colName';
    table.rows[i].cells[4].id = 'colFxt';
    table.rows[i].cells[7].id = 'colQty';
  }
  let testMode = document.getElementsByName('test/real');
  if (testMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------

//===============   Got data 2  ==================================

function gotData_2(data) {

  remove_Table_2();
  createTable_2();

  table = document.getElementById('lampIN');

  let array = new Array();

  var lamps = data.val();
  var keys = Object.keys(lamps);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

      array[0] = lamps[k].date;
      array[1] = lamps[k].lampID;
      array[2] = lamps[k].lampName;
      array[3] = lamps[k].fixture;
      array[4] = lamps[k].qty;
      array[5] = lamps[k].pers;
      array[6] = lamps[k].location;
      array[7] = lamps[k].notes;

    // create a new row
    var newRow = table.insertRow(i + 1);

    for (var j = 0; j < 8; j++) {

      // create a new cell
      var cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = array[j];
    }
  }
  // Hide first column of the table (with database keys)
  // for (var i = 0; i <= keys.length; i++) {
  //   table.rows[i].cells[0].style.display = 'none';
  // }
  for (var i = 1; i <= keys.length; i++) {
    table.rows[i].cells[2].id = 'colName';
    table.rows[i].cells[3].id = 'colFxt';
    table.rows[i].cells[4].id = 'colQty';
  }
  let testMode = document.getElementsByName('test/real');
  if (testMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------


//===============   Got data 3  ==================================

function gotData_3(data) {

  remove_Table_3();
  createTable_3();

  table = document.getElementById('lampOUT');

  let array = new Array();

  var lamps = data.val();
  var keys = Object.keys(lamps);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

      array[0] = lamps[k].date;
      array[1] = lamps[k].lampID;
      array[2] = lamps[k].lampName;
      array[3] = lamps[k].fixture;
      array[4] = lamps[k].qty;
      array[5] = lamps[k].pers;
      array[6] = lamps[k].location;
      array[7] = lamps[k].notes1;
      array[8] = lamps[k].notes2;

    // create a new row
    var newRow = table.insertRow(i + 1);

    for (var j = 0; j < 9; j++) {

      // create a new cell
      var cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = array[j];
    }
  }
  // Hide first column of the table (with database keys)
  // for (var i = 0; i <= keys.length; i++) {
  //   table.rows[i].cells[0].style.display = 'none';
  // }
  for (var i = 1; i <= keys.length; i++) {
    table.rows[i].cells[2].id = 'colName';
    table.rows[i].cells[3].id = 'colFxt';
    table.rows[i].cells[4].id = 'colQty';
  }
  let testMode = document.getElementsByName('test/real');
  if (testMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------


let matrixBase = [
  ['lamps/test/store', 'lamps/test/in', 'lamps/test/out'],
  ['lamps/real/store', 'lamps/real/in', 'lamps/real/out']
];
let selMode = 0;      //  initial mode is TestMode
let button = [];      //  array of side buttons
button = document.querySelectorAll('.sideButton');

let btnValue = 0;         //  btnValue define which tab selected, initial value - 0

for (let i = 0; i < 4; i++) {

  button[i].onclick = function (event) {
    let target = event.target;
    btnValue = this.value;
    currentBase = matrixBase[selMode][btnValue];
    console.log(matrixBase[selMode][btnValue]);
    changeTab(i);
  }
}

let testMode = document.getElementsByName('test/real');
let currentBase = matrixBase[selMode][btnValue];
var ref = database.ref(currentBase);

function selectMode() {

  if (this.value == 1) {
    currentBase = matrixBase[1][btnValue];
  } else {
    currentBase = matrixBase[0][btnValue];
  }

  selMode = this.value;
}

testMode[0].addEventListener('change', selectMode);
testMode[1].addEventListener('change', selectMode);

createTable_1();
createTable_2();
createTable_3();

// ref = database.ref("lamps/test/store");
// ref.on('value', gotData_1, errData);
















