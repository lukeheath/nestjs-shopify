import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestjsShopifyService } from './nestjs-shopify.service';
import {
  NESTJS_SHOPIFY_OPTIONS,
} from './constants';
import {
  NestjsShopifyOptions,
  NestjsShopifyAsyncOptions,
  NestjsShopifyOptionsFactory,
} from './interfaces';
import { createNestjsShopifyProviders } from './nestjs-shopify.providers';

@Global()
@Module({
  providers: [NestjsShopifyService],
  exports: [NestjsShopifyService],
})
export class NestjsShopifyModule {
  /**
   * Registers a configured NestjsShopify Module for import into the current module
   */
  public static register(
    options: NestjsShopifyOptions,
  ): DynamicModule {
    return {
      module: NestjsShopifyModule,
      providers: createNestjsShopifyProviders(options),
    };
  }

  /**
   * Registers a configured NestjsShopify Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: NestjsShopifyAsyncOptions,
  ): DynamicModule {
    return {
      module: NestjsShopifyModule,
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: NestjsShopifyAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestjsShopifyAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NESTJS_SHOPIFY_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: NESTJS_SHOPIFY_OPTIONS,
      useFactory: async (optionsFactory: NestjsShopifyOptionsFactory) =>
        await optionsFactory.createNestjsShopifyOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
