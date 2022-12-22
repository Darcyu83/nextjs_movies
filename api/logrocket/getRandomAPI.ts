export interface IEntries {
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

  const { entries }: { entries: IEntries[] } = await res.json();

  return entries[0];
}
