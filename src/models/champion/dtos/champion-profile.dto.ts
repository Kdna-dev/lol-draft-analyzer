export class ChampionProfileDTO{
    public constructor(id:string, name:string, imageUrl:string){
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
    }

    id: string;
    imageUrl: string;
    name: string;
}