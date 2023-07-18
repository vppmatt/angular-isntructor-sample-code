
export interface Person {
    id: number,
    name: string,
    phone? : string
    setStatus(status: string):void;
  }