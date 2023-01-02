import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class SignResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accesToken: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  refreshToken: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => User)
  user: User;
}
