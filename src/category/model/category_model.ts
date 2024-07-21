import { DataTypes } from "sequelize";
import {
    Column,
    Model,
    PrimaryKey,
    Table,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";

import User from "../../users/user-model";
// import UploadInfo from "./user_quiz_model";



@Table({ tableName: "user_quizzes" })
class UserQuiz extends Model {
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    defaultValue: DataTypes.INTEGER
  })
  userId!: number;

  @Column({
    defaultValue: DataTypes.STRING,
  })
  categoryName!: string;

  @Column({
    defaultValue: DataTypes.UUIDV4 
  })
  categoryId!: string;

 
  @Column({
    defaultValue: DataTypes.UUIDV4 
  })
  quizId!: string;

  @BelongsTo(() => User,"userId")
  user!: User;

  // @HasMany(() => UploadInfo , "categoryId")
  // userQuizzes!: UploadInfo[];

}

export default UserQuiz;
