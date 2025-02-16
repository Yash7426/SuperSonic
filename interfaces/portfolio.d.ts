interface Token {
    name: string;
    logo: string;
    amount: number;
    value: number;
  }
  
  interface Transaction {
    type: "Bought" | "Sold";
    token: Token;
    date?: string;
  }
  
  interface Swap {
    fromToken: Token;
    toToken: Token;
    date?: string;
  }
  
  interface PortfolioProps {
    walletId: string;
    joinedDate?: string;
    tokens: Token[];
    transactions: Transaction[];
    swaps: Swap[];
  }
  