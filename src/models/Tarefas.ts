import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/my';

export interface tarefasInterface extends Model{
    id:number,
    title:string,
    done:number,
    content:string
}

export const Tarefas = sequelize.define<tarefasInterface>('Tarefas',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.NUMBER
    },
    title:{
        type:DataTypes.NUMBER
    },
    done:{
        type:DataTypes.NUMBER,
        defaultValue: 0
    },
    content:{
        type:DataTypes.STRING
    }
},{
    tableName:'tarefas',
    timestamps:false
})