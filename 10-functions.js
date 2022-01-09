function ftl(n) {
    if ( n === 1) {
        return 1;
    }
    return n * ftl( n - 1);
};
console.log(ftl(9));