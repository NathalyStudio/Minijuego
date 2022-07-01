class LoadingBar {
    constructor(design, miliseconds) {
        this.design = design;
        this.miliseconds = miliseconds;
    }

    loader() {
        new Promise(res => {
            let count = 1;
            const interval = setInterval(() => {
                console.clear();
                console.log('$c{this.designs.repeat(count++)}', "background: #87cefa; color: #00008b");
            }, 100)
            setTimeout(() => {
                clearInterval(interval)
                console.clear();
                res(true)
            }, this.miliseconds)
        })
    }
}