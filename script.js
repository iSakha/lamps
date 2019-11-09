
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

function createTable() {
  let table = document.createElement('table');

  table.id = 'tblLamps';

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

function remove_Table() {
  table = document.getElementsByTagName('table')[0];
  table.remove();
}

function changeTab(_i) {
  let tab = [];
  tab = document.querySelectorAll('.tab');
  for (let i = 0; i < 4; i++) {
    tab[i].style.display = 'none';
  }
  tab[_i].style.display = 'block';
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

function gotData(data) {

  remove_Table();
  createTable();

  table = document.getElementById('tblLamps');

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

}

let button = [];
button = document.querySelectorAll('.sideButton');
console.log(button);

for (let i = 0; i < 4; i++) {
  button[i].onclick = function (event) {
    let target = event.target;
    changeTab(i)
  }
}

let testMode = document.getElementsByName('test/real');
let currentBase = 'lamps/test/store';
var ref = database.ref(currentBase);

function selectMode() {
  let table = document.getElementById('tblLamps')
  if (this.value == 1) {
    table.classList.add('borderColorRed');
    currentBase = 'lamps/real/store';
  } else {
    currentBase = 'lamps/test/store';
    table.classList.add('borderColorGrey');
  }
  console.log(table);
  // Got data
  ref = database.ref(currentBase);

  ref.on('value', gotData, errData);

}

testMode[0].addEventListener('change', selectMode);
testMode[1].addEventListener('change', selectMode);

createTable();
ref = database.ref(currentBase);
ref.on('value', gotData, errData);















