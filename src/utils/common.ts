import { Request } from '../types/common';

export const classNames = <T extends {}>(...classes: Array<T>): string => classes.filter(Boolean).join(' ');

export const asyncRequest = async <T>({ url, method, headers, body, handler, errorHandler }: Request<T>): Promise<T | void> => {
  try {
    const options = {
      method: method ?? 'POST',
      headers: headers ?? {'Content-Type': 'application/json'},
      body: body,
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return handler(result);
  } catch (error) {
    errorHandler(error);
  }
}