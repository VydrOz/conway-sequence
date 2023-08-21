export class Conway {
    constructor(){
        this.previous = null;
        this.current = "3";
        this.history = [];
    }

    calcNext() {
        let result = "";
        let split = this.current.match(/(.)\1*/g);
        split.forEach(e => {
            result += e.length + e[0];
        });
        
        if (result) {
            this.previous = this.current;
            this.history.push(this.current);
            this.current = result;
            return true;
        }

        return false;
    }
}
