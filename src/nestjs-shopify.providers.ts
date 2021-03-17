import { NestjsShopifyOptions } from './interfaces';

import { NESTJS_SHOPIFY_OPTIONS } from './constants';

export function createNestjsShopifyProviders(
  options: NestjsShopifyOptions,
) {
  console.log('options: ', options);
  return [
    {
      provide: NESTJS_SHOPIFY_OPTIONS,
      useValue: options,
    },
  ];
}
