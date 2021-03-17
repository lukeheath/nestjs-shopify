import { NestjsShopifyOptions } from './interfaces';

import { NESTJS_SHOPIFY_OPTIONS } from './constants';

export function createNestjsShopifyProviders(
  options: NestjsShopifyOptions,
) {
  return [
    {
      provide: NESTJS_SHOPIFY_OPTIONS,
      useValue: options,
    },
  ];
}
