<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <InspiraWavyBackground
    :blur="17"
    speed="fast"
    background-fill="#0E0F19"
    container-class="bg-[#0E0F19]"
    class="mx-auto h-svh"
  >
    <div class="flex flex-col items-center h-full pt-24">
      <InspiraTextGenerateBackground
        :words="t('heroSection.greetings')"
        class="text-gray-300 text-xl md:text-2xl font-medium antialiased"
        :duration="1.5"
      />
      <InspiraTextGenerateBackground
        :words="t('heroSection.name')"
        class="text-gray-100 text-4xl md:text-5xl font-bold pt-1 antialiased"
        :duration="1.5"
        :delay="1500"
      />
      <InspiraTextGenerateBackground
        :words="t('heroSection.profession')"
        class="text-gray-300 text-sm md:text-base font-bold pt-1 antialiased"
        :duration="1.5"
        :delay="3000"
      />
    </div>
  </InspiraWavyBackground>
</template>
