import { IAttackStrategy } from "./attack-strategy";
import { IAttacker } from '../core/attacker';
import { ITarget } from '../core/target';
import { Tank } from "../core/tank";
import { logEvent } from "../logger";

export class AttackUntilDoneStrategy implements IAttackStrategy {
    constructor() {}
    
    execute(attacker: IAttacker, target: ITarget) {
        
        while(!target.isDestroyed()) {
            logEvent(`tank ${(attacker as Tank).id} attacking ${ (target as Tank).id}`);
            target.receiveDamage(attacker.getDamage());
            target.counterAttack(attacker as Tank);
        }
    }

    
}