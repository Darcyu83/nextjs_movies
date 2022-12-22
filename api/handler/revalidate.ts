import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.query.secret !== process.env.REVALIDATION_KEY) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('http://localhost:3000/movies/isr/revalidated');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
