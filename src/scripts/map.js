class PositionCeil {
    constructor(localPositionX = 0, localPositionY = 0, positionX = 0, positionY = 0) {
        this.localPositionX = localPositionX;
        this.localPositionY = localPositionY;
        this.globalPositionX = positionX;
        this.globalPositionY = positionY;
    }
}

export class Map {
    static positions = [];

    static createCeil(context, positionX = 0, positionY = 0, width = 1, height = 1, strokeColor = "#000") {
        context.strokeStyle = strokeColor;
        context.rect(positionX, positionY, width, height);
        context.stroke();
    }

    static createRow(context, length = 1, basePositionX = 0, basePositionY = 0, baseWidth = 10, baseHeight = 10, baseStrokeColor = "#000", positionY = 0, localPositionX = 0, localPositionY = 0) {
        let positionX = basePositionX;
        localPositionX = 0;

        for (let i = 0; i < length; i++) {
            this.createCeil(context, positionX, positionY, baseWidth, baseHeight, baseStrokeColor);
            this.positions.push(new PositionCeil());
            this.positions.at(-1).globalPositionX = positionX;
            this.positions.at(-1).globalPositionY = positionY;
            this.positions.at(-1).localPositionX = localPositionX;
            this.positions.at(-1).localPositionY = localPositionY;
            localPositionX++;
            positionX += baseWidth;
        }
    }

    static createRegion(context, rows = 1, length = 1, basePositionX = 0, basePositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = "#000") {
        let positionY = basePositionY;
        let locaclPositionY = 0;

        for (let i = 0; i < rows; i++) {
            let localPositionX = 0;
            this.createRow(context, length, basePositionX, positionY, generalWidth, generalHeight, generalStrokeColor, positionY, localPositionX, locaclPositionY);
            locaclPositionY++;
            positionY += generalHeight;
        }
    }

    static conclusion() {
        console.log(this.positions);
    }
}