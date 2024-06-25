import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { AppDispatch, RootSate } from "./store";

type DispatchFunctionType = () => AppDispatch;

export const useCartDispatch: DispatchFunctionType = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootSate> = useSelector;
