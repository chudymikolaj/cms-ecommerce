import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.link': LinkLink;
    }
  }
}
