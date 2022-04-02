export interface ITarget {
    isDestroyed(): boolean;
    receiveDamage(amountOfDamage: number): void;
    counterAttack(attacker: ITarget): void;
}