class Photon {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(-c, 0);
        this.history = [];
        this.stopped = false;
    }

    stop() {
        this.stopped = true;
    }

    update() {
        if (!this.stopped) {
            this.history.push(this.pos.copy());
            const deltaV = this.vel.copy();
            deltaV.mult(dt);
            this.pos.add(deltaV);
        }

        if (this.history.length > 1000) {
            this.history.splice(0, 1);
        }
    }

    show() {
        strokeWeight(1);
        stroke(0);
        point(this.pos.x, this.pos.y);

        strokeWeight(1);
        stroke(200);
        noFill();
        beginShape();
        for (let v of this.history) {
            vertex(v.x, v.y);
        }
        endShape();
    }
}