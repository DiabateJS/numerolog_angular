import { NbreInterData } from "./NbreInterData";

export interface RequestResult {
  error: boolean;
  data: NbreInterData;
  message: string;
}