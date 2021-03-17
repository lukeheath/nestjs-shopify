/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import {
  NestjsShopifyOptions,
} from './nestjs-shopify-options.interface';
import {
  NestjsShopifyOptionsFactory,
} from './nestjs-shopify-options-factory.interface';

export interface NestjsShopifyAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<NestjsShopifyOptionsFactory>;
  useClass?: Type<NestjsShopifyOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestjsShopifyOptions> | NestjsShopifyOptions;
}