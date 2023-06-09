"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraServiceRoute = void 0;
const express_1 = require("express");
const extraServices_validators_1 = require("../../validators/admin/extraServices.validators");
const extraServiceController = __importStar(require("../../controller/admin/extraService.controller"));
exports.ExtraServiceRoute = (0, express_1.Router)();
exports.ExtraServiceRoute.get('/', extraServiceController.Index);
exports.ExtraServiceRoute.post('/', extraServices_validators_1.extraServiceValidators, extraServiceController.Store);
exports.ExtraServiceRoute.get('/:id', extraServiceController.Show);
exports.ExtraServiceRoute.put('/:id', extraServices_validators_1.extraServiceValidators, extraServiceController.Update);
exports.ExtraServiceRoute.delete('/:id', extraServiceController.Destroy);
