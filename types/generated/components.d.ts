import type { Schema, Attribute } from '@strapi/strapi';

export interface CartProducts extends Schema.Component {
  collectionName: 'components_cart_products';
  info: {
    displayName: 'Products';
    icon: 'grid';
    description: '';
  };
  attributes: {
    IdProduct: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Slug: Attribute.String & Attribute.Required;
    Price: Attribute.Decimal & Attribute.Required;
    Quantity: Attribute.Integer & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LinkLinkWithIcon extends Schema.Component {
  collectionName: 'components_link_link_with_icons';
  info: {
    displayName: 'LinkWithIcon';
    icon: 'link';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Url: Attribute.String;
    Icon: Attribute.Media<'images'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Url: Attribute.String & Attribute.Required;
  };
}

export interface SectionsBentoSection extends Schema.Component {
  collectionName: 'components_sections_bento_sections';
  info: {
    displayName: 'BentoSection';
    icon: 'grid';
  };
  attributes: {
    FirstBentoItem: Attribute.Media<'images'>;
    FirstBentoItemName: Attribute.String;
    FirstBentoItemButton: Attribute.Component<'link.link'>;
    SecondBentoItemImage: Attribute.Media<'images'>;
    SecondBentoItemName: Attribute.String;
    SecondBentoItemButton: Attribute.Component<'link.link'>;
    BentoSectionDescription: Attribute.String;
  };
}

export interface SectionsDescriptionWithImages extends Schema.Component {
  collectionName: 'components_sections_description_with_images';
  info: {
    displayName: 'Description with images';
  };
  attributes: {
    Header: Attribute.String;
    Text: Attribute.Text;
    ButtonName: Attribute.String;
    ButtonUrl: Attribute.String;
  };
}

export interface SectionsSectionProducts extends Schema.Component {
  collectionName: 'components_sections_section_products';
  info: {
    displayName: 'Section - Products';
    icon: 'apps';
  };
  attributes: {
    CountOfProducts: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 24;
        },
        number
      >;
    HeaderTitle: Attribute.String;
    CategoryProducts: Attribute.String;
  };
}

export interface SectionsShowcaseMainpage extends Schema.Component {
  collectionName: 'components_sections_showcase_mainpages';
  info: {
    displayName: 'Showcase - Mainpage';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    HeaderImage: Attribute.Media<'images'>;
    DescriptionWithImage: Attribute.Component<'sections.description-with-images'>;
  };
}

export interface UserUserLinks extends Schema.Component {
  collectionName: 'components_user_user_links';
  info: {
    displayName: 'UserLinks';
    icon: 'link';
    description: '';
  };
  attributes: {
    UserLink: Attribute.Component<'link.link-with-icon'>;
    UserLinks: Attribute.Component<'link.link-with-icon', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cart.products': CartProducts;
      'link.link-with-icon': LinkLinkWithIcon;
      'link.link': LinkLink;
      'sections.bento-section': SectionsBentoSection;
      'sections.description-with-images': SectionsDescriptionWithImages;
      'sections.section-products': SectionsSectionProducts;
      'sections.showcase-mainpage': SectionsShowcaseMainpage;
      'user.user-links': UserUserLinks;
    }
  }
}
