// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2) = 3
//     [[1, 2],
//     [4, 3]]
//   matrix(3) = 4
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4) = 7 time
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//  matrix(5) = 9 time
//     [[1,   2,   3,  4, 5],
//     [16,  17,  18, 19, 6],
//     [15,  24,  25, 20, 7],
//     [14,  23,  22, 21, 8]]
//     [13,  12,  11, 10, 9]]


function right(number, array, sc, ec, r) {
    // console.log('right');
    for (let i = sc; i < ec; i++) {
        array[r][i] = number++;
    }
    return number;
}

function down(number, array, sr, er, c) {
    // console.log('down');
    for (let i = sr; i < er; i++) {
        array[i][c] = number++;
    }
    return number;
}

function up(number, array, sr, er, c) {
    // console.log('up');
    for (let i = sr-1; i >= er; i--) {
        array[i][c] = number++;
    }
    return number;
}

function left(number, array, sc, ec, r) {
    // console.log('left');
    for (let i = sc-1; i >= ec; i--) {
        array[r][i] = number++;
    }
    return number;
}

function matrix(n) {
    // right
    let rsr = 0;
    let rer = n;
    let rrow = 0;
    // down
    let dsc = 0;
    let dec = n;
    let dcol = n-1;
    // left
    let lsr = n;
    let ler = 0;
    let lrow = n-1;
    // up
    let usr = n;
    let uer = 0;
    let ucol = 0;

    let number = 1;

    var array = []
    for (i=0; i < n; i++) {
        arrayC = [];
        for (j=0; j < n; j++) {
            arrayC.push(0)
        }
        array.push(arrayC)
    }

    while(number-1 < n*n) {
        number = right(number, array, rsr, rer, rrow)
        rsr += 1; rer -=1; rrow +=1;

        dsc += 1;
        number = down(number, array, dsc, dec, dcol)
        dec -= 1; dcol-=1;

        lsr -= 1;
        number = left(number, array, lsr, ler, lrow)
        ler += 1; lrow-=1;

        usr -= 1;
        uer += 1;
        number = up(number, array, usr, uer, ucol)
        ucol +=1;

    }
    return array;
}

console.time('h')
matrix(6);
console.timeEnd('h')

module.exports = matrix;
