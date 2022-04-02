import { Tank } from '../core/tank';
import { logEvent } from '../logger';
import { IAttacker } from '../core/attacker';
import { ITarget } from '../core/target';
import { IDefendStrategy } from './attack-strategy';

export class NoCounterAttackStrategy implements IDefendStrategy {
    constructor() {}
    
    execute(defender: IAttacker, attacker: ITarget) {
        logEvent(`tank ${(defender as Tank).id} counterAttacking ${ (attacker as Tank).id} by doing nothing`);
    }
}
