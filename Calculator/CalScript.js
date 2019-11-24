var CurNum = 1;
var Entry = [0, 0];
var op = "add";


function one() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 1
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 1
    }
}

function two() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 2
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 2
    }
}

function three() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 3
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 3
    }
}

function four() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 4
    }
    if (Entry[1] == 0) {
        Entry[1] = 4
    }
}

function five() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 5
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 5
    }
}

function six() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 6
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 6
    }
}

function seven() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[1] * 10 + 7
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 7
    }
}

function eight() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 8
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 8
    }
}

function nine() {
    if (Entry[CurNum - 1] !== 0); {
        Entry[CurNum - 1] = Entry[CurNum - 1] * 10 + 9
        alert(Entry)
    }
    if (Entry[CurNum - 1] == 0) {
        Entry[CurNum - 1] = 9
        alert(Entry)
    }
}

function num1() {
    CurNum = 1;
    alert(Entry)
}

function num2() {
    CurNum = 2;
    alert(Entry)
}
function clear() {
    Entry[0] = 0;
    Entry[1] = 0;
}
