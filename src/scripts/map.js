export class Map {
    static localPositions = {
        positionsX: [],
        positionsY: []
    }

    static createCeil(context, positionX = 0, positionY = 0, width = 1, height = 1, strokeColor = "#000") {
        context.fillStroke = strokeColor;
        context.rect(positionX, positionY, width, height)
        context.stroke();
    }

    static createRow(context, length = 1, basePositionX = 0, basePositionY = 0, baseWidth = 10, baseHeight = 10, baseStrokeColor = "#000", positionY = 0) {
        let positionX = basePositionX;
        
        let baseLocaclPositionX = 0;

        for (let i = 0; i < length; i++) {
            this.createCeil(context, positionX, positionY, baseWidth, baseHeight, baseStrokeColor);
            baseLocaclPositionX++;
            positionX += baseWidth;
        }
    }

    static create(context, rows = 1, length = 1, basePositionX = 0, basePositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = "#000") {
        let positionY = basePositionY;

        let baseLocaclPositionY = 0;

        for (let i = 0; i < rows; i++) {
            this.createRow(context, length, basePositionX, positionY, generalWidth, generalHeight, generalStrokeColor, positionY);
            baseLocaclPositionY++;
            positionY += generalHeight;
        }
    }
}