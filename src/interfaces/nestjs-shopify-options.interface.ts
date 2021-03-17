import * as Shopify from 'shopify-api-node';

export interface NestjsShopifyOptions extends Shopify.IPrivateShopifyConfig{
  shopName: string;
  apiKey: string;
  password: string;
}
