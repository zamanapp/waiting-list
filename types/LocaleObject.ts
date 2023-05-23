/** @VueI18nGeneral */
export declare type Locale = string;

/**
 * Direction
 *
 * @public
 */
export declare type Directions = "ltr" | "rtl" | "auto";

export declare interface LocaleObject extends Record<string, any> {
  code: Locale;
  name?: string;
  dir?: Directions;
  domain?: string;
  file?: string;
  isCatchallLocale?: boolean;
  iso?: string;
}
