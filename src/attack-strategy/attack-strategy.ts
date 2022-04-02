import { ITarget } from "../core/target";
import { IAttacker } from "../core/attacker";

export interface IAttackStrategy {
     execute(attacker: IAttacker, target: ITarget): void;
}