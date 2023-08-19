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
            result += e[0] + e.length;
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