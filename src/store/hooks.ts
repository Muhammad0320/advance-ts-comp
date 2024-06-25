import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFunctionType = () => AppDispatch;

export const CartDispatch: DispatchFunctionType = useDispatch;
