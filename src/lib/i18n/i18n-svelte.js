// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/adapters/adapter-svelte').SvelteStoreInit<Locales, Translation, TranslationFunctions> } SvelteStoreInit,
 * @typedef { import('./i18n-types.js').Locales } Locales,
 * @typedef { import('./i18n-types.js').Translation } Translation,
 * @typedef { import('./i18n-types.js').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./i18n-types.js').Formatters } Formatters
 */

import { getI18nSvelteStore } from 'typesafe-i18n/adapters/adapter-svelte';

import { getTranslationForLocale } from './i18n-util.js'
import { initFormatters } from './formatters.js'

/** @type { SvelteStoreInit } */
const { initI18n: init, setLocale, isLoadingLocale, locale, LL } = getI18nSvelteStore()

/**
 * @param { Locales } locale
 * @return { Promise<void> }
 */
const initI18n = (locale = 'en') => init(locale, getTranslationForLocale, initFormatters)

export { initI18n, setLocale, isLoadingLocale, locale, LL }

export default LL
