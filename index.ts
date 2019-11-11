import 'reflect-metadata';
import { Expose, Type, plainToClass, classToClass } from 'class-transformer';

class MyClass {
  @Expose()
  public name: string;

  @Expose()
  // has a default value
  public active: boolean = true;

  @Expose()
  @Type(() => Date)
  public createdAt: Date;

  @Expose()
  @Type(() => Date)
  public updatedAt: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

const payload = {
  name: 'John Doe',
  createdAt: (new Date()).toISOString(),
  updatedAt: (new Date()).toISOString(),
  unknownKey: "foo"
};

// Will not set default value of active
console.log(plainToClass(MyClass, payload, { excludeExtraneousValues: true }));

// sets default value
console.log(classToClass(new MyClass(payload), { excludeExtraneousValues: true }));