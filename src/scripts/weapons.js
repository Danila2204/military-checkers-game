export function Weapon(name, type, attack, accuracy, review, range, rateFire, volume, oboims, ammunition, additionalAmmunition) {
    const weapon = {name, type, attack, accuracy, review, range, rateFire, volume, oboims, ammunition, additionalAmmunition};

    return {
        ...weapon,
        updateAmmunition() {
            this.oboims = Math.floor(this.ammunition / this.volume);
            this.realAmmunition = this.ammunition % this.volume;
        }
    }
}