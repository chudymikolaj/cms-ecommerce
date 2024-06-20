import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkLinkWithIcon extends Schema.Component {
  collectionName: 'components_link_link_with_icons';
  info: {
    displayName: 'LinkWithIcon';
    icon: 'link';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    Icon: Attribute.Media<'images'>;
  };
}

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
      'link.link-with-icon': LinkLinkWithIcon;
      'link.link': LinkLink;
    }
  }
}
