(function test1() {

    function reverse(str) {
        var result = '';
        for (var i = str.length; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result.toLowerCase();
    }

    console.log(reverse('Hello World') === 'dlrow olleh');

})();

(function test2() {

    function sumNum(arr) {
        return arr
            .filter(item => typeof item === 'number')
            .reduce((prev, next) => prev + next, 0);
    }

    console.log(sumNum([true, 2, 3, '5', 9]) === 14);

})();

(function test4() {

    function sumNum(num) {
        let result = 0;
        new Array(num + 1).fill(1).map((item, i) => {
            result += i
        });
        
        return result;
    }
    console.log(sumNum(5));
    console.log(sumNum(5) === 15);

})();
