<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const { t, availableLocales, locale } = useI18n();

console.log(locale.value);

const toggleLocale = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
};

const btnText = computed(() => locale.value !== 'en' ? 'en' : '中文');

const user = useUserStore();
</script>

<template>
  <div text-s>
    <h1 mt-2>{{ t('about.intro') }}</h1>
    <p>{{ t('about.nameIntro') }}: {{ t('about.name', { 'name': `${user.fullName}`}) }}</p>
    <p>{{ t('about.ageIntro') }}: {{ user.age }}</p>
    <button @click="toggleLocale" btn>{{ btnText }}</button>
    <HelloWorld msg="from about page"></HelloWorld>
  </div>
</template>
