import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
