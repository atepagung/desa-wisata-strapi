import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHomepageSection2 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_section_2s';
  info: {
    description: '';
    displayName: 'Homepage - Section 1 - Informasi Desa';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface InformasiDesaInfoBanner extends Struct.ComponentSchema {
  collectionName: 'components_informasi_desa_info_banners';
  info: {
    displayName: 'Info - Banner';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images', true>;
  };
}

export interface InformasiDesaInfoDemografiPenduduk
  extends Struct.ComponentSchema {
  collectionName: 'components_informasi_desa_info_demografi_penduduks';
  info: {
    displayName: 'Info - Demografi Penduduk';
  };
  attributes: {
    jumlah_penduduk: Schema.Attribute.BigInteger &
      Schema.Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      >;
    luas: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    partisipasi: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface InformasiDesaInfoInformasiDasarDesa
  extends Struct.ComponentSchema {
  collectionName: 'components_informasi_desa_info_informasi_dasar_desas';
  info: {
    description: '';
    displayName: 'Info - Informasi Dasar Desa';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface InformasiDesaInfoLokasiDesa extends Struct.ComponentSchema {
  collectionName: 'components_informasi_desa_info_lokasi_desas';
  info: {
    description: '';
    displayName: 'Info - Lokasi Desa';
  };
  attributes: {
    accomodation: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    latitude: Schema.Attribute.String;
    longitude: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCommonSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_common_sections';
  info: {
    description: '';
    displayName: 'CommonSection';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzYwMzgzOTksImp0aSI6ImNkOGRmODU0LWEyYTEtNDc3Ny04MmQxLWM2MzM0MDExMjVmYSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTQwMGU3OGUifQ.iRuzRWe6srjFnhjZEkAPSTCJDf2JuNJ41YyP8LXiH_YdcW-t6dOdovTUKh5bi2eYYsKNcavKoCe7-IFa1g_JDw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
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
      'informasi-desa.info-banner': InformasiDesaInfoBanner;
      'informasi-desa.info-demografi-penduduk': InformasiDesaInfoDemografiPenduduk;
      'informasi-desa.info-informasi-dasar-desa': InformasiDesaInfoInformasiDasarDesa;
      'informasi-desa.info-lokasi-desa': InformasiDesaInfoLokasiDesa;
      'shared.common-section': SharedCommonSection;
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
