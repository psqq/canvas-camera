
export default class Camera {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.size = { w: 0, h: 0 };
        this.scale = { x: 0, y: 0 };
        /** @type {HTMLCanvasElement} */
        this.can = null;
        /** @type {CanvasRenderingContext2D} */
        this.ctx = null;
        this.keepRatio = true;
    }
    /**
     * @param {HTMLCanvasElement} can 
     * @param {CanvasRenderingContext2D} ctx 
     */
    setCanvasAndContext(can, ctx) {
        this.can = can;
        this.ctx = ctx;
        this.updateSize();
        return this;
    }
    /**
     * @param {{x: number, y: number}} canvasPos
     */
    getGlobalPosition(canvasPos) {
        const x = this.size.w * canvasPos.x / this.can.width;
        const y = this.size.w * canvasPos.x / this.can.width;
        return { x, y };
    }
    setWidth(w) {
        this.size.w = w;
        this.scale.x = this.can.width / this.size.w;
        if (this.keepRatio) {
            this.size.h = this.size.w * this.can.height / this.can.width;
            this.scale.y = this.can.height / this.size.h;
        }
        return this;
    }
    setHeight(h) {
        this.size.h = h;
        this.scale.y = this.can.height / this.size.h;
        if (this.keepRatio) {
            this.size.w = this.size.h * this.can.width / this.can.height;
            this.scale.x = this.can.width / this.size.w;
        }
        return this;
    }
    setSize(w, h) {
        this.size.w = w;
        this.scale.x = this.can.width / this.size.w;
        this.size.h = h;
        this.scale.y = this.can.height / this.size.h;
        return this;
    }
    /**
     * @param {number} dScale
     */
    changeScale(dScale) {
        this.scale.x += dScale;
        this.scale.y += dScale;
        this.updateSize();
        return this;
    }
    updateSize() {
        this.size.w = this.can.width / this.scale.x;
        this.size.h = this.can.height / this.scale.y;
        return this;
    }
    /**
     * @param {{x: number, y: number}} pos
     */
    setLeftTopPosition(pos) {
        this.position.x = pos.x;
        this.position.y = pos.y;
        return this;
    }
    /**
     * @param {{x: number, y: number}} pos
     */
    centerAt(pos) {
        this.position.x = pos.x - this.size.w / 2;
        this.position.y = pos.y - this.size.h / 2;
        return this;
    }
    getCenter() {
        return {
            x: this.position.x + this.size.w / 2,
            y: this.position.y + this.size.h / 2,
        };
    }
    begin() {
        this.ctx.save();
        this.ctx.translate(-this.position.x * this.scale.x, -this.position.y * this.scale.y);
        this.ctx.scale(this.scale.x, this.scale.y);
    }
    end() {
        this.ctx.restore();
    }
}
