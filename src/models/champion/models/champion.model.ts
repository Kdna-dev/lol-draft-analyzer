import type { ChampionDTO } from '../dtos/champion.dto.ts';
import { ChampionRole } from '../enums/champion-role.enum.ts';

export class Champion {
  constructor(private readonly dto: ChampionDTO) {}

  get id(): string {
    return this.dto.id;
  }

  get name(): string {
    return this.dto.name;
  }

  get title(): string {
    return this.dto.title;
  }

  get roles(): ChampionRole[] {
    return this.dto.tags;
  }

  get difficulty(): number {
    return this.dto.info.difficulty;
  }

  is(role: ChampionRole): boolean {
    return this.roles.includes(role);
  }

  get splashUrl(): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_0.jpg`;
  }
}
