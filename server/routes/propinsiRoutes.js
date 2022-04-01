import { Router } from "express";
import indexController from "../controller/indexPropCtrl";
import UpDownloadHelper from "../middleware/UpDownloadHelper";

const router = Router();
// get all
router.get("/", indexController.propinsiCtrl.findAll);
// by id
router.get("/:id", indexController.propinsiCtrl.findRowById);
export default router;
//create
router.post(
    "/",
    UpDownloadHelper.uploadSingleFile,
    indexController.propinsiCtrl.createPropinsi
);
//update
router.put(
    "/:id",
    UpDownloadHelper.uploadSingleFile,
    indexController.propinsiCtrl.updatePropinsi
);
//delete
router.delete("/:id", indexController.propinsiCtrl.deleteRow);
//show images
router.get("/images/:filename", UpDownloadHelper.showPropinsiImg);
