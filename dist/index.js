"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
class MyClass {
    constructor(data) {
        this.active = true;
        Object.assign(this, data);
    }
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MyClass.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Boolean)
], MyClass.prototype, "active", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Date),
    __metadata("design:type", Date)
], MyClass.prototype, "createdAt", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Date),
    __metadata("design:type", Date)
], MyClass.prototype, "updatedAt", void 0);
const payload = {
    name: 'John Doe',
    createdAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString(),
    unknownKey: "foo"
};
// Will not set default value of active
console.log(class_transformer_1.plainToClass(MyClass, payload, { excludeExtraneousValues: true }));
// sets default value
console.log(class_transformer_1.classToClass(new MyClass(payload), { excludeExtraneousValues: true }));
