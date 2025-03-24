<template>
  <header class="sticky top-0 z-50">
    <div
      class="flex w-full h-16 bg-transparent text-white backdrop-blur-sm items-center px-4 md:px-8 lg:px-12"
    >
      <span
        class="text-gray-200 text-base md:text-xl font-semibold antialiased"
        >{{ t('headerSection.name') }}</span
      >
      <div class="flex gap-x-4 ml-auto">
        <button aria-label="Traduire la page" @click="switchCurrentLocale">
          <IconTranslate class="h-6 w-6 text-gray-200" />
        </button>
        <button aria-label="Ouvrir le menu de navigation">
          <IconHamburger class="h-6 w-6 text-gray-300" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineComponent({
  name: 'NavigationHeader',
});

const { t } = useI18n();
const { switchCurrentLocale } = useTranslation();
</script>
