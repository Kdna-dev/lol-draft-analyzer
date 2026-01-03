import type { ChampionImageDTO } from './champion-image.dto';

export interface ChampionPassiveDTO {
  name: string;
  description: string;
  image: ChampionImageDTO;
}
