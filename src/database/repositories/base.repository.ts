import Model from "sequelize/types/lib/model";
import User from "../models/user";


export interface Repo {
    delete<T>(model: Model): Promise<any>;
    getById(id: string | number): Promise<any>;
  }

export default abstract class BaseRepository<M extends Model> implements Repo {
    /**
     * constructor of Base Repository
     * @param model
     */
    constructor(public model: { new (): M } & typeof Model){}

    /**
     * abstract method save
     * @param {object} data 
     */
    abstract save(data: object): Promise<M>;

    /**
     * get model by id
     * @param {string | number} id 
     */
    getById(id: string | number):Promise<M> {
        return this.model.findByPk(id);
    }

    /**
     * deleting the model
     * @param {M} model 
     */
    delete(model: M): Promise<any> {
       return model.destroy();
    }
}
