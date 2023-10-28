import { Weapon } from "./weapons.js";
import { GameObject, GameObjectMethods } from "./base.js";

class Review {
    constructor(reviewX, reviewY) {
        this.reviewX = reviewX;
        this.reviewY = reviewY;
    }
}

export function Unit(context, name, HP, review, positions, imageSRC, width, height) {
    let reviewPositions = [];
    const unit = {name, HP, review, reviewPositions};

    return {
        ...new GameObject(context, positions, imageSRC, width, height),
        ...GameObjectMethods(),
        ...unit,
        setReview(width, height) {
            for (let i = 0; i < review[width]; i++) {
                for (let j = 0; j < review[height]; j++) {
                    this.reviewPositions.push(new Review(review[i] + this.globalPositionX, review[j] + this.globalPositionY));
                }
            }

            console.log(this.reviewPositions);
        }
    }
}