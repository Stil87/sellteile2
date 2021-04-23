import { PartPicture, ActionType } from './types';
import { v4 as uuidv4 } from 'uuid';

import imageCompression from 'browser-image-compression';

const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v: any, f: any) => f(v), x);
const pipeAwait = (...fns: Function[]) => (param: any) => fns.reduce(async (result, next) => next(await result), param)

const turnImageToUrl = (file: File): string => URL.createObjectURL(file)

const turnURLIntoPartPicture = (url: string): PartPicture => ({
  url, uId: uuidv4()
})
const resizeFile = async (file: File) => imageCompression(file, {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
})

export const turnFileToPartPicture = async (file: File): Promise<PartPicture> => pipeAwait(
  await resizeFile,
  turnImageToUrl,
  turnURLIntoPartPicture
)(file)