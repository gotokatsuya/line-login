import { WebPlugin } from '@capacitor/core';

import type { LineLoginPlugin, LineLoginResponse } from './definitions';

export class LineLoginWeb extends WebPlugin implements LineLoginPlugin {
  async login(options: { permissions: string[] }): Promise<LineLoginResponse> {
    return new Promise((resolve, reject) => {
      try {
        console.log(options);
        resolve({} as LineLoginResponse);
      } catch (err) {
        reject(err);
      }
    });
  }
}
