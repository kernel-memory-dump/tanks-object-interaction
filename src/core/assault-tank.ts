import { Tank } from './tank';
import { ASSAULT_TANK_DAMAGE, ASSAULT_TANK_HEALTH } from '../config/constants';

export class AssaultTank extends Tank {

    private health: number = ASSAULT_TANK_HEALTH;
    
    getDamage(): number {
        return ASSAULT_TANK_DAMAGE;
    }
    isDestroyed(): boolean {
        return this.health <= 0;
    }
    receiveDamage(amountOfDamage: number) {
        this.health -= amountOfDamage;
    }

}