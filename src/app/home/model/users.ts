export class UserModel{
    id: number;
    gender: string;
    name: string;
    status: string;
    species: string;
    image: string;

    copiar(obj){
        this.id = obj.id;
        this.gender = obj.gender
        this.name = obj.name
        this.status = obj.status
        this.species = obj.species
        this.image = obj.image
    }
}