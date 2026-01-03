import type { ChampionImageDTO } from './champion-image.dto';
import type { ChampionSkinDTO } from './champion-skin.dto';
import type { ChampionInfoDTO } from './champion-info.dto';
import type { ChampionStatsDTO } from './champion-stats.dto';
import type { ChampionSpellDTO } from './champion-spell.dto';
import type { ChampionPassiveDTO } from './champion-passive.dto';
import { ChampionRole } from '../enums/champion-role.enum';
import { ResourceType } from '../enums/resource-type.enum';

export interface ChampionDetailDTO {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImageDTO;

  skins: ChampionSkinDTO[];

  lore: string;
  blurb: string;

  allytips: string[];
  enemytips: string[];

  tags: ChampionRole[];
  partype: ResourceType;

  info: ChampionInfoDTO;
  stats: ChampionStatsDTO;

  spells: ChampionSpellDTO[];
  passive: ChampionPassiveDTO;

  recommended: unknown[];
}
