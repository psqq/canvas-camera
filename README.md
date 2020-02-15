# canvas-camera

# Example of usage


```js
const can = document.querySelector('canvas');
const ctx = can.getContext('2d');

can.width = can.height = 400;

const camera = new Camera()
    .setCanvasAndContext(can, ctx)
    .setWidth(3);

camera.begin();
ctx.fillRect(1, 1, 1, 1);
camera.end();
```
