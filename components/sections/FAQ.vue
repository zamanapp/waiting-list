<template>
  <div>
    <GlowyDivider class="absolute pt-0 bottom-[4.1rem]" />
    <div class="px-8 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-32">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-semibold tracking-tight sm:text-6xl">
          Frequently Asked questions
        </h2>
        <dl class="mt-16 divide-y dark:divide-slate-300 divide-slate-700">
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="faq in faqs"
              :key="faq.question"
              :value="faq.question"
              class="py-2 first:pt-0 last:pb-0 border-white/10"
            >
              <AccordionTrigger>
                <span class="font-semibold text-xl/7 text-start">{{
                  faq.question
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
                class="dark:text-slate-700 text-state-300 text-lg/7"
              >
                {{ faq.answer }}
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

const faqs = [
  {
    question: "What is Zaman?",
    answer: "Zaman is a productivity platform",
  },
  {
    question: "Is Zaman just another prayer reminder app?",
    answer:
      "Although the core of Zaman is built around our prayer times library, Zaman is a productivity platform built from the perspective of a Muslim. It will eventually be a drop in replacement for your current productivity tools while keeping your faith at the center.",
  },
  {
    question: "When will Zaman be available?",
    answer:
      "We don't have a specific date yet, however,  our private beta program will be available soon. You can always register your interest by joining the Sabirin list. In the meantime know that we're working hard to bring you the best experience possible.",
  },
  {
    question: "What is the Sabirin list?",
    answer:
      "The Sabirin list is what is also known as a whaitlist or a waitinglist by registering your interest you will be up to date with our launch programs and progress.",
  },
  {
    question: "How much will Zaman cost?",
    answer:
      "Zaman will be a freemium product. We will offer a free tier with limited features and a paid tier with more features.",
  },
  {
    question: "What platforms/devices will Zaman be available on?",
    answer:
      "Zaman will be initially available on all platforms/devices that support the web. We will also be available on iOS and Android in the future.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us by email at salam@zaman.com we are always eager to hear from people who are interested in Zaman.",
  },
  // More questions...
];
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
