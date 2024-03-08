import { User } from "./user";

export class Prescr {
  id: number;
  name: string;
  user?: User;

  constructor(prescr: any) {
    this.id = prescr.id || 0;
    this.name = prescr.name || "";
    this.user = prescr.user || null;
  }
}
