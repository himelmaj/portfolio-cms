import type { Schema, Struct } from '@strapi/strapi';

export interface ContactSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.social-links': ContactSocialLinks;
    }
  }
}
