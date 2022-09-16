import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { logger } from '@havenengineering/module-haven-logging';

export const middleware = (request: NextRequest) => {
  logger.info('asdf');
  return NextResponse.next();
};
