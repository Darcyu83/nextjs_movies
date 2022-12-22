import { NextApiRequest, NextApiResponse } from 'next';
import { PREFIX_HOME } from '../../api/config/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('revalidation call ===', req.query);
  if (req.query.secret !== process.env.REVALIDATION_KEY) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate(`/logrocket/ssg`);
    // await res.revalidate('/');
    return res.json({ revalidated: true });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
