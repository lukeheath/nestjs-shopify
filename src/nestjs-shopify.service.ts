// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import Shopify = require('shopify-api-node');
import { NESTJS_SHOPIFY_OPTIONS} from './constants';
import { NestjsShopifyOptions } from './interfaces';

/**
 * Sample interface for NestjsShopifyService
 *
 * Customize this as needed to describe the NestjsShopifyService
 *
 */
interface INestjsShopifyService {
  getShopify(): Promise<any>;
}

@Injectable()
/**
 *
 *  That injected dependency gives you access to the options passed in to
 *  NestjsShopifyService.
 *
 */
export class NestjsShopifyService implements INestjsShopifyService {
  private readonly logger: Logger;
  private _shopifyConnection: any;
  constructor(
    @Inject(NESTJS_SHOPIFY_OPTIONS) private _NestjsShopifyOptions: NestjsShopifyOptions,
  ) {
    this.logger = new Logger('NestjsShopifyService');
    this.logger.log(`Options: ${JSON.stringify(this._NestjsShopifyOptions)}`);
  }

  getShopify() {
    if (!this._shopifyConnection) {
      this._shopifyConnection = new Shopify(this._NestjsShopifyOptions);
    }
    return this._shopifyConnection;
  }
}