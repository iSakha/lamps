function changeTab(_i) {
    let tab = [];
    tab = document.querySelectorAll('.tab');
    for (let i = 0; i < tab.length; i++) {
      tab[i].style.display = 'none';
    }
    tab[_i].style.display = 'block';
}

let button = [];      //  array of side buttons
button = document.querySelectorAll('.sideButton');

let switchMode = document.getElementsByName('test/real');

    for (let i = 0; i < button.length; i++) {

        button[i].onclick = function (event) {
          let target = event.target;
            if (switchMode[0].checked) {changeTab(i);}
          else{changeTab(i + 4);}
        }
      }

//===============   Store test table 1  ==================================

function createTable_1() {
    let table = document.createElement('table');

    table.id = 'lampStoreT';
  
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
    table = document.getElementById('lampStoreT');
    table.remove();
  }

//===============   IN test table 2  ==================================

function createTable_2() {
    let table = document.createElement('table');

    table.id = 'lampIN_T';
  
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
    table = document.getElementById('lampIN_T');
    table.remove();
  }

//===============   OUT test table 3  ==================================

function createTable_3() {
    let table = document.createElement('table');

    table.id = 'lampOUT_T';
  
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
  table = document.getElementById('lampOUT_T');
  table.remove();
}

//===============   INPUT test table 4  ==================================

function createTable_4() {

}

//===============   Store real table 5  ==================================

function createTable_5() {
    let table = document.createElement('table');

    table.id = 'lampStoreR';
  
    let parentTable = document.getElementById('tbl5');
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

function remove_Table_5() {
    table = document.getElementById('lampStoreR');
    table.remove();
  }

//===============   IN real table 6  ==================================

function createTable_6() {
    let table = document.createElement('table');

    table.id = 'lampIN_R';
  
    let parentTable = document.getElementById('tbl6');
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

function remove_Table_6() {
    table = document.getElementById('lampIN_R');
    table.remove();
  }

//===============   OUT real table 7  ==================================

function createTable_7() {
    let table = document.createElement('table');

    table.id = 'lampOUT_R';
  
    let parentTable = document.getElementById('tbl7');
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

function remove_Table_7() {
  table = document.getElementById('lampOUT_R');
  table.remove();
}

//===============   INPUT real table 8  ==================================

function createTable_8() {

}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

//===============   Got data 1  ==================================

function gotData_1(data) {

  remove_Table_1();
  createTable_1();

  table = document.getElementById('lampStoreT');

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
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
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

  table = document.getElementById('lampIN_T');

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
    table.rows[i].cells[4].id = 'colFxt';
    table.rows[i].cells[7].id = 'colQty';
  }
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
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

  table = document.getElementById('lampOUT_T');

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
    table.rows[i].cells[4].id = 'colFxt';
    table.rows[i].cells[7].id = 'colQty';
  }
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------

//===============   Got data 4  ==================================

// function gotData_1(data) {

//   remove_Table_1();
//   createTable_1();

//   table = document.getElementById('lampStoreT');

//   let array = new Array();

//   var lamps = data.val();
//   var keys = Object.keys(lamps);

//   for (var i = 0; i < keys.length; i++) {
//     var k = keys[i];

//     array[0] = k;
//     array[1] = lamps[k].lampID;
//     array[2] = lamps[k].lampName;
//     array[3] = lamps[k].partNumber;
//     array[4] = lamps[k].fixture;
//     array[5] = lamps[k].lifeTime;
//     array[6] = lamps[k].power;
//     array[7] = lamps[k].qty;
//     array[8] = lamps[k].location;

//     // create a new row
//     var newRow = table.insertRow(i + 1);

//     for (var j = 0; j < 9; j++) {

//       // create a new cell
//       var cell = newRow.insertCell(j);

//       // add value to the cell
//       cell.innerHTML = array[j];
//     }
//   }
//   // Hide first column of the table (with database keys)
//   for (var i = 0; i <= keys.length; i++) {
//     table.rows[i].cells[0].style.display = 'none';
//   }
//   for (var i = 1; i <= keys.length; i++) {
//     table.rows[i].cells[2].id = 'colName';
//     table.rows[i].cells[4].id = 'colFxt';
//     table.rows[i].cells[7].id = 'colQty';
//   }
//   let testMode = document.getElementsByName('test/real');
//   if (testMode[0].checked) {
//     table.classList.add('borderColorGrey');
//   } else {
//     table.classList.add('borderColorRed');
//   }
// }

//------------------------------------------------------------------

//===============   Got data 5  ==================================

function gotData_5(data) {

  remove_Table_5();
  createTable_5();

  table = document.getElementById('lampStoreR');

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
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------

//===============   Got data 6  ==================================

function gotData_6(data) {

  remove_Table_6();
  createTable_6();

  table = document.getElementById('lampIN_R');

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
    table.rows[i].cells[4].id = 'colFxt';
    table.rows[i].cells[7].id = 'colQty';
  }
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------

//===============   Got data 7  ==================================

function gotData_7(data) {

  remove_Table_7();
  createTable_7();

  table = document.getElementById('lampOUT_R');

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
    table.rows[i].cells[4].id = 'colFxt';
    table.rows[i].cells[7].id = 'colQty';
  }
  // let testMode = document.getElementsByName('test/real');
  if (switchMode[0].checked) {
    table.classList.add('borderColorGrey');
  } else {
    table.classList.add('borderColorRed');
  }
}

//------------------------------------------------------------------


createTable_1();
createTable_2();
createTable_3();
createTable_5();
createTable_6();
createTable_7();


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

ref = database.ref('lamps/test/store');
ref.on('value', gotData_1, errData);

ref = database.ref('lamps/test/in');
ref.on('value', gotData_2, errData);

ref = database.ref('lamps/test/out');
ref.on('value', gotData_3, errData);

ref = database.ref('lamps/real/store');
ref.on('value', gotData_5, errData);

ref = database.ref('lamps/real/in');
ref.on('value', gotData_6, errData);

ref = database.ref('lamps/real/out');
ref.on('value', gotData_7, errData);