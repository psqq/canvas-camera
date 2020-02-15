# canvas-camera

# Install commands

```
yarn add canvas-camera
npm install canvas-camera
yarn add -D canvas-camera
npm install -D canvas-camera
```

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
