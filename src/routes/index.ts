import { Router } from "express";
import { adminPermission } from "../middleware/admin.middleware";
import { AdminRouter } from "./admin/admin.auth.routes";
import { AmenitiesRoute } from "./admin/amenities.routes";

export const AppRouter: Router = Router();

AppRouter.use("/admin/auth", AdminRouter);  
AppRouter.use("/amenities",adminPermission, AmenitiesRoute) 