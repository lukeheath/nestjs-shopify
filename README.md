<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS + Shopify = &#60;3</h3>

This is a NestJS module wrapper around the official [shopify-api-node](https://www.npmjs.com/package/shopify-api-node) library.

### Installation

To install this project:

```bash
npm install --save nestjs-shopify
```

### Setup

In your Nest Module, import `NestjsShopifyModule`: 

```javascript
import { NestjsShopifyModule } from 'nestjs-shopify';
```

In your service, import the Shopify library as `ShopifyClient` for type references. It does not provide a named export, so default import is required. Also import the `NestjsShopifyService`, which will provide a modularized reference to the underlying Shopify class:

```javascript
import * as ShopifyClient from 'shopify-api-node';
import { NestjsShopifyService } from 'nestjs-shopify';
```

In your Nest Provider, instantiate the client and service: 

```javascript
@Injectable()
export class ShopifyService {
  private shopifyClient: ShopifyClient;

  constructor(
    private shopifyService: NestjsShopifyService
  ) {
    this.shopifyClient = this.shopifyService.getShopify();
  }
```

You can now reference all methods and events on the `shopfyClient` Shopify instance as defined in the [docs]((https://www.npmjs.com/package/shopify-api-node). Reference typings on the ShopifyClient module directly: 

```javascript
async getShopifyProducts(): Promise<ShopifyClient.IProduct[]> {
  return await this.shopifyClient.product.list({ limit: 20 });
}
```

### Big Ups

- [Nest Dynamic Package Generator Schematics](https://github.com/nestjsplus/dyn-schematics) generates a starter template for building NestJS dynamic packages.  It uses the `@nestjs/cli` core package, and provides customized schematics for generating modular NestJS applications.  See [here](https://github.com/nestjsplus/dyn-schematics) for the full set of available schematics, and documentation.