import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHomepageSection2 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_section_2s';
  info: {
    description: '';
    displayName: 'Homepage - Section 1 - Informasi Desa';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHomepageSection3 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_section_3s';
  info: {
    description: '';
    displayName: 'Homepage - Section 2 - Event List';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    event_list: Schema.Attribute.Component<'shared.event-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHomepageSection4 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_section_4s';
  info: {
    description: '';
    displayName: 'Homepage - Section 3 - Paket Wisata';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    tour_list: Schema.Attribute.Component<'shared.tour-list', true>;
  };
}

export interface HomepageHomepageSection5 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_section_5s';
  info: {
    description: '';
    displayName: 'Homepage - Section 4 - Testimoni';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.navigation', false>;
    description: Schema.Attribute.RichText;
    testimoni_list: Schema.Attribute.Component<'shared.testimoni-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageSection1 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_section_1s';
  info: {
    description: '';
    displayName: 'Homepage - Banner';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.navigation', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedEventList extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_lists';
  info: {
    displayName: 'EventList';
  };
  attributes: {
    event: Schema.Attribute.Relation<'oneToOne', 'api::event.event'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimoniList extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimoni_lists';
  info: {
    displayName: 'TestimoniList';
  };
  attributes: {
    testimoni: Schema.Attribute.Relation<
      'oneToOne',
      'api::testimoni.testimoni'
    >;
  };
}

export interface SharedTourList extends Struct.ComponentSchema {
  collectionName: 'components_shared_tour_lists';
  info: {
    displayName: 'TourList';
  };
  attributes: {
    tour: Schema.Attribute.Relation<'oneToOne', 'api::tour.tour'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.homepage-section-2': HomepageHomepageSection2;
      'homepage.homepage-section-3': HomepageHomepageSection3;
      'homepage.homepage-section-4': HomepageHomepageSection4;
      'homepage.homepage-section-5': HomepageHomepageSection5;
      'homepage.section-1': HomepageSection1;
      'shared.event-list': SharedEventList;
      'shared.media': SharedMedia;
      'shared.navigation': SharedNavigation;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimoni-list': SharedTestimoniList;
      'shared.tour-list': SharedTourList;
    }
  }
}
