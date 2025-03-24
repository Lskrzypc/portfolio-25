<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

function openExternalLink(url: string) {
  window.open(url, '_blank');
}
</script>

<template>
  <InspiraWavyBackground
    :blur="17"
    speed="fast"
    background-fill="#0E0F19"
    container-class="bg-[#0E0F19]"
    class="h-svh w-full"
  >
    <div class="flex flex-col items-center w-full h-full pt-24">
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
      <div class="flex w-full flex-1 items-end px-4 md:px-8 lg:px-12">
        <div class="flex flex-col items-center">
          <button
            aria-label="Visiter mon profil LinkedIn"
            @click="openExternalLink('https://fr.linkedin.com/in/lskrzypc')"
          >
            <IconLinkedin class="w-8 h-8 my-2 antialiased text-gray-300" />
          </button>
          <button
            aria-label="Visiter mon profil GitHub"
            @click="openExternalLink('https://github.com/Lskrzypc')"
          >
            <IconGithub class="h-8 mb-2 antialiased text-gray-300" />
          </button>

          <div class="h-20 w-1 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  </InspiraWavyBackground>
</template>
