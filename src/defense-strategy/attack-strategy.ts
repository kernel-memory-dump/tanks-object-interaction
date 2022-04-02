import { IAttacker } from "../core/attacker";
import { ITarget } from "../core/target";

export interface IDefendStrategy {
     execute: (defender: IAttacker, attacker: ITarget) => void;
}