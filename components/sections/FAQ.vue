<template>
  <div>
    <GlowyDivider class="absolute pt-0 bottom-[4.1rem]" />
    <div class="px-8 pt-24 mx-auto max-w-7xl sm:pt-32 lg:px-8 lg:pt-32">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-semibold tracking-tight sm:text-6xl">
          {{ $t("faq.title") }}
        </h2>
        <dl class="mt-16 divide-y dark:divide-slate-300 divide-slate-700">
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="(faq, index) in faqs"
              :key="index"
              :value="index"
              class="py-2 first:pt-0 last:pb-0 border-white/10"
            >
              <AccordionTrigger>
                <span class="font-semibold text-xl/7 text-start">{{
                  $rt(faq.question)
                }}</span>
                <template #icon>
                  <div class="relative size-8">
                    <Icon
                      icon="hugeicons:plus-sign"
                      class="absolute inset-0 size-8 accordion-plus-icon"
                    />
                    <Icon
                      icon="hugeicons:minus-sign"
                      class="absolute inset-0 size-8 accordion-minus-icon"
                    />
                  </div>
                </template>
              </AccordionTrigger>
              <AccordionContent
                class="dark:text-slate-300 text-state-700 text-lg/7"
              >
                {{ $rt(faq.answer) }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const { tm } = useI18n();

const faqs = tm("faq.questions");
</script>

<style scoped>
.accordion-plus-icon {
  @apply transition-opacity duration-200;
}

.accordion-minus-icon {
  @apply transition-opacity duration-200 opacity-0;
}

[data-state="open"] .accordion-plus-icon {
  @apply opacity-0;
}

[data-state="open"] .accordion-minus-icon {
  @apply opacity-100;
}
</style>
