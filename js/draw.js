class Draw {
    constructor(cobj, options) {
        this.cobj = cobj;
        this.options = options;
    };

    rect(sx, sy, ox, oy) {
        this.cobj.strokeRect(sx, sy, ox - sx, oy - sy);
    }

    line(sx, sy, ox, oy) {
        this.cobj.beginPath();
        this.cobj.moveTo(sx, sy);
        this.cobj.lineTo(ox, oy);
        this.cobj.stroke();
    }

    circle(sx) {
        alert(sx);
    }

    poly(sx) {
        alert(sx)
    }
}