import type { ChampionInfoDTO } from './champion-info.dto';
import type { ChampionImageDTO } from './champion-image.dto';
import type { ChampionStatsDTO } from './champion-stats.dto';
import { ChampionRole } from '../enums/champion-role.enum.ts';
import { ResourceType } from '../enums/resource-type.enum.ts';

export interface ChampionDTO {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfoDTO;
  image: ChampionImageDTO;
  tags: ChampionRole[];
  partype: ResourceType;
  stats: ChampionStatsDTO;
}
