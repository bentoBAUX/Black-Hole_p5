class BlackHole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.rs = (2 * G * this.mass) / (c * c);
        console.log(this.rs);
    }

    pull(photon) {
        const force = p5.Vector.sub(this.pos, photon.pos);
        const r = force.mag();
        const fg = (G * this.mass) / (r * r);
        force.setMag(fg);
        photon.vel.add(force);
        photon.vel.setMag(c);

        if (r <= this.rs - 1) {
            photon.stop();
        }
    }

    show() {
        //noFill();
        fill(0);
        //stroke(255,255,255);
        circle(this.pos.x, this.pos.y, this.rs);

    }

}