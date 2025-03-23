<template>
  <div>
    <NavigationHeader />
    <SectionHeroSection />
    <!-- <div class="w-full h-96 bg-primary"></div> -->
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', '#0E0F19');
});
</script>
