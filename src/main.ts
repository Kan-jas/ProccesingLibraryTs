import * as p5 from 'p5';


// Global variables

const sketch = (p: p5) => {



    p.preload = () => {
    };

    p.setup = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        p.background(50, 200, 155);
        p.ellipse(50, 50, 80, 80);
        p.ellipse(100, 100, 100, 100);
    }
};

const sketchP = new p5(sketch);
