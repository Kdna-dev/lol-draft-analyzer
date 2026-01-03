import type { ChampionDTO } from './champion.dto.ts';

export interface ChampionListDTO {
  type: string;
  format: string;
  version: string;
  data: Record<string, ChampionDTO>;
}
