import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutCta extends Schema.Component {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    images: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<'layout.cta'>;
  };
}

export interface SeoSeoMeta extends Schema.Component {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'SEO Meta';
    icon: 'crown';
    description: '';
  };
  attributes: {
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.cta': LayoutCta;
      'layout.hero-section': LayoutHeroSection;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
