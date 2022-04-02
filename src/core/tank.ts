import { IAttackStrategy } from "../attack-strategy/attack-strategy";
import { IDefendStrategy } from "../defense-strategy/attack-strategy";
import { IAttacker } from "./attacker";
import { ITarget } from "./target";
import { logEvent } from '../logger';

export abstract class Tank implements IAttacker, ITarget {
  
  public readonly id: number;
  static idCounter: number = 1;

  public constructor(
    private attackStrategy: IAttackStrategy,
    private defenseStrategy: IDefendStrategy
  ) {
      this.id = Tank.idCounter;
      Tank.idCounter++;
  }

  abstract getDamage(): number;
  abstract isDestroyed(): boolean;
  abstract receiveDamage(amountOfDamage: number): void;

  attack(target: ITarget): void {
    this.attackStrategy.execute(this, target);
  }

  counterAttack(from: ITarget): void {
    this.defenseStrategy.execute(this, from);
  }
}
