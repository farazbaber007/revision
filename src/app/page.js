"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fun_1 = require("../../Component/fun");
const fun1_1 = __importDefault(require("../../Component/fun1"));
function Home() {
    return (<div>   
        <h3>Hello how are you?  </h3> 
        <fun_1.Comp />
        <fun_1.Comp2 />
        <fun_1.Comp3function />
        <fun_1.Comp4 />
        <fun1_1.default />
         </div>);
}
exports.default = Home;
