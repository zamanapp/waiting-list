<template>
  <GlareLineFrame
    :title="$t('features.prayerAnchor.title')"
    :description="$t('features.prayerAnchor.description')"
    class="flex p-px"
    hideOverflow
  >
    <div
      class="py-6 [mask-image:linear-gradient(to_left,transparent,black_2rem)] rtl:[mask-image:linear-gradient(to_right,transparent,black_2rem)]"
    >
      <ClientOnly>
        <PrayerMeter />
      </ClientOnly>
    </div>
  </GlareLineFrame>
</template>
