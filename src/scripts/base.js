export class GameObject {
    context;
    positions;
    turnAngle;
    localPositionX;
    localPositionY;
    globalPositionX;
    globalPositionY;
    width;
    height;
    deg;
    image;

    constructor(context, positions, imageSRC, width, height) {
        this.context = context;
        this.positions = positions;
        this.imageSRC = imageSRC;
        this.width = width;
        this.height = height;
    }
}

export function GameObjectMethods() {
    return {
        clear() {
            this.context.rotate(this.turnAngle * this.deg);
            this.context.clearRect(this.globalPositionX, this.globalPositionY, this.width, this.height);
        },
        update() {
            this.clear();
            this.create(this.localPositionX, this.localPositionY, this.turnAngle);
        },
        create(localPositionX = 0, localPositionY = 0, corner = 0) {
            this.turnAngle = corner;
            this.localPositionX = localPositionX;
            this.localPositionY = localPositionY;
            this.deg = Math.PI / 180;
    
            let positionX = 0;
            let positionY = 0;
    
            this.image = new Image();
            this.image.src = this.imageSRC;
    
            for (let position of this.positions) {
                if (position.localPositionX === localPositionX && position.localPositionY === localPositionY) {
                    this.globalPositionX = position.globalPositionX;
                    this.globalPositionY = position.globalPositionY;
                }
            }
    
            this.context.rotate(this.deg * corner);
    
            if (this.imageSRC == true) {
                this.image.onload = () => {
                    this.context.drawImage(image, positionX, positionY);
                }
            } else {
                this.context.fillStyle = "#f00";
                this.context.fillRect(positionX, positionY, 50, 50);
            }
        },
        rotate(corner) {
            this.turnAngle = corner;
            this.update();
        }
    }
}