// scripts.js

function drawTree(i) {
    var k = 0;
    while (k < i) {
        var star = '';
        k++;
        for (var j = 0; j < k; j++) {
            star = star + '*';
        }
        console.log(star);
    }
}
drawTree(5);