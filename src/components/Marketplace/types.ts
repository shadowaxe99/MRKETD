export interface Agent {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isTopPick: boolean;
  level: number;
}

export interface CartItem {
  agentId: string;
  quantity: number;
}
