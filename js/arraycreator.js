var set = [];
var n = 0;

set.display = function() {
    for (i = 0; i < 12, i++) {
        if (this.length === 12) {
            console.log(this);
        } else {
            if (n === 0) {
                this.push(n);
                n = n + 7;
            } else {
                this.push(n % 12);
            }
        }
    };
};