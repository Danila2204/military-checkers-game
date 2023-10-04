export function Unit(type, HP, protection, review, imageSRC, positions, context) {
    const unit = {type, HP, protection, review, imageSRC};

    return {
        ...unit,
        create(localPositionX = 0, localPositionY = 0, rotate = 0) {
            let deg = Math.PI / 180;
            let positionX = 0;
            let positionY = 0;
            let image = new Image();
            image.src = imageSRC;
            
            for (let position of positions) {
                if (position.localPositionX === localPositionX && position.localPositionY === localPositionY) {
                    positionX = position.globalPositionX;
                    positionY = position.globalPositionY;
                }
            }
            context.rotate(deg * rotate)

            if (imageSRC == true) {
                image.onload = () => {
                    context.drawImage(image, positionX, positionY);
                }
            } else {
                context.fillStyle = "#f00";
                context.fillRect(positionX, positionY, 50, 50);
            }
        },
        rotate(deg) {
            this.create(localPositionX, localPositionY, deg);
        }
    }
}