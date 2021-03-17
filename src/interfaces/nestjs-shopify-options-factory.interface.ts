import {
  NestjsShopifyOptions,
} from './nestjs-shopify-options.interface';

export interface NestjsShopifyOptionsFactory {
  createNestjsShopifyOptions():
    | Promise<NestjsShopifyOptions>
    | NestjsShopifyOptions;
}
