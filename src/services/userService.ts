import sequelizeConnection from '../db/config/connection'
import User from '../db/models/user';
import { QueryTypes } from 'sequelize';

export const update = async(id: number, delta: number) => {
    const t = await sequelizeConnection.transaction();
    const result = await sequelizeConnection.query(`
    begin;
    with user_balance as
    (
    select b.id from "Users" b where b.id = :user_id and b.balance + :delta > 0  for update
    ) 
    update "Users" as users set balance = balance + :delta
    from user_balance where users.id = user_balance.id;
    commit;
    `,
    {
        replacements: {user_id: id, delta: delta},
        transaction: t,
        type: QueryTypes.UPDATE
    });
    if(result[1] == 0){
        throw new Error('Недостаточно средств')
    } else{
        return true;
    }
}