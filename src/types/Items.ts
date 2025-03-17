export interface ItemType {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, number>;
  effect?: Record<string, string>;
}
