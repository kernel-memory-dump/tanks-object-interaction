import { MAIN_BATTLE_TANK_HEALTH, MAIN_BATTLE_TANK_DAMAGE, MAIN_BATTLE_TANK_RECEIVED_DAMAGE_REDUCTION } from '../config/constants';
import { Tank } from './tank';

export class MainBattleTank extends Tank {

    private health: number = MAIN_BATTLE_TANK_HEALTH;
    
    getDamage(): number {
        return MAIN_BATTLE_TANK_DAMAGE;
    }
    isDestroyed(): boolean {
        return this.health >= 0;
    }
    receiveDamage(amountOfDamage: number) {
        this.health -= amountOfDamage * MAIN_BATTLE_TANK_RECEIVED_DAMAGE_REDUCTION;
    }

}