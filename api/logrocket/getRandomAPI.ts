export interface IEntry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export async function getRandomAPI() {
  const res = await fetch('https://api.publicapis.org/random');

  const { entries }: { entries: IEntry[] } = await res.json();

  return entries[0];
}
