export interface ShortUrl {
  id: number;
  code:string;
  orginalURL: string;
  shortURL: string;
  isPrivate: boolean;
  totalClicks: number;
}
