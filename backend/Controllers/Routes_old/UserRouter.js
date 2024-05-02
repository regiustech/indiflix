import express from "express";
import {
  forgotPassword,
  changeUserPassword,
  getLikedMovies,
  addLikedMovie,
  getUsers,
  loginUser,
  registerUser,
  verifyToken,
  resetPassword,
} from "../Controllers/UserControllers.js";
import { admin } from "../midddleware/Auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verifytoken", verifyToken);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.put("/password", changeUserPassword);
router.get("/favorites", getLikedMovies);
router.post("/favorites", addLikedMovie);
router.get("/", admin, getUsers);

export default router;
