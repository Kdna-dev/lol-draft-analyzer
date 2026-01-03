import type { ChampionImageDTO } from './champion-image.dto';
import type { ChampionSpellLevelTipDTO } from './champion-spell-leveltip.dto';

export interface ChampionSpellDTO {
  id: string;
  name: string;
  description: string;
  tooltip: string;

  leveltip: ChampionSpellLevelTipDTO;

  maxrank: number;

  cooldown: number[];
  cooldownBurn: string;

  cost: number[];
  costBurn: string;

  datavalues: Record<string, unknown>;

  effect: Array<number[] | null>;
  effectBurn: Array<string | null>;

  vars: unknown[];

  costType: string;
  maxammo: string;

  range: number[];
  rangeBurn: string;

  image: ChampionImageDTO;
  resource: string;
}
