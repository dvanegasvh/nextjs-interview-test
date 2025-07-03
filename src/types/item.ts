export interface Item {
  id: number;
  name: string;
}

export interface ApiResponse {
  results: {
    url: string;
    name: string;
  };
}
