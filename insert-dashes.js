// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let result = [];
   
    num = num.toString();
   
    result.push(num[0]);
   
    for(let i = 1; i <= num.length - 1; i++) {
        if(Number(num[i - 1] % 2 !== 0) && Number(num[i] % 2 !== 0)) {
            result.push('-' + num[i]);
        } else {
            result.push(num[i]);
        };
    };
    return result.join('');
};