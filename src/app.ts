import { AttackTwoTimesStrategy } from './attack-strategy/attack-two-times.strategy';
import { AttackUntilDoneStrategy } from './attack-strategy/attack-until-done.strategy';
import { AssaultTank } from './core/assault-tank';
import { CounterAttackOnceStrategy } from './defense-strategy/counter-attack-once.strategy';
import { NoCounterAttackStrategy } from './defense-strategy/no-counter-attack.strategy';
import { MainBattleTank } from './core/main-battletank';
import { clearAndPrintBanner } from './logger';


clearAndPrintBanner();

const attackTwoTimesStrategy = new AttackTwoTimesStrategy();
const attackUntilDoneStrategy = new AttackUntilDoneStrategy();

const defenseStrategyWithCounterAttack = new CounterAttackOnceStrategy();
const defenseStrategyNoCounterAttack = new NoCounterAttackStrategy();

const tank1 = new MainBattleTank(attackTwoTimesStrategy, defenseStrategyNoCounterAttack);
const tank2 = new MainBattleTank(attackUntilDoneStrategy, defenseStrategyWithCounterAttack);

tank1.attack(tank2);

const tank3 = new AssaultTank(attackUntilDoneStrategy, defenseStrategyWithCounterAttack);
const tank4 = new MainBattleTank(attackTwoTimesStrategy, defenseStrategyWithCounterAttack);

tank3.attack(tank4);