import type { ChampionDetailDTO } from '../dtos/champion-detail.dto';
import type { ChampionInfoDTO } from '../dtos/champion-info.dto';
import type { ChampionPassiveDTO } from '../dtos/champion-passive.dto';
import type { ChampionSpellDTO } from '../dtos/champion-spell.dto';

export class ChampionDetail {
  constructor(private readonly dto: ChampionDetailDTO) {}

  get id(): string {
    return this.dto.id;
  }

  get name(): string {
    return this.dto.name;
  }

  get title(): string {
    return this.dto.title;
  }

  get lore(): string {
    return this.dto.lore;
  }

  get skinsCount(): number {
    return this.dto.skins.length;
  }

  get spells(): ChampionSpellDTO[] {
    return this.dto.spells;
  }

  get ultimate(): ChampionSpellDTO {
    return this.dto.spells[3]!;
  }

  get passive(): ChampionPassiveDTO {
    return this.dto.passive;
  }

  get info(): ChampionInfoDTO {
    return this.dto.info;
  }

  get splashUrl(): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.id}_0.jpg`;
  }

  getSkinSplash(num: number): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_${num}.jpg`;
  }
}
