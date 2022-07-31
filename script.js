const app = new PIXI.Application();
document.querySelector("div.canvas").appendChild(app.view);

class Game {
    constructor () {
        this.delta = 0
        this.enemies = []
        this.state = "menu"
        app.renderer.view.addEventListener("mousemove", (e) => {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
        });
    }
    button (x, y, width, height, text, callback) {
        let button = new PIXI.Graphics();
        button.beginFill(0xffffff);
        button.drawRect(x, y, width, height);
        button.lineStyle(2, 0x000000);
        button.drawRect(x, y, width, height);
        button.endFill();
        button.interactive = true;
        button.buttonMode = true;
        button.on("pointerdown", callback);
        let textObject = new PIXI.Text(text, {
            fontFamily: "Lotion",
            fontSize: 30,
            fill: 0x000000,
        });
        //center text in the button
        textObject.x = x + width / 2 - textObject.width / 2;
        textObject.y = y + height / 2 - textObject.height / 2;
        app.stage.addChild(button);
        app.stage.addChild(textObject);
    }
    question (q) {
        return prompt(q, "null")
    }
    tick () {
        this.delta += 0.1;
        if (this.state == "menu") return
    }
    start () {

    }
}

new Game().start()