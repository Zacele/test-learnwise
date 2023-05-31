export const delay = (ms: number): Promise<void> =>
  new Promise((res: any) => setTimeout(res, ms));
