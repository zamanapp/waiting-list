<template>
  <div class="relative flex items-center justify-center">
    <ToolTipInfo
      v-for="(space, index) in spaces"
      :key="space.id"
      :delay="300"
      side="top"
      :content="space.name!"
    >
      <div :class="['relative hover:z-10 group', index > 0 ? '-ms-4' : '']">
        <Avatar
          class="transition-all duration-300 border-4 cursor-pointer size-20 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
          :style="{ borderColor: space.color }"
        >
          <AvatarFallback class="text-2xl font-semibold">{{
            space.name!.slice(0, 2).toUpperCase()
          }}</AvatarFallback>
        </Avatar>
        <ToolTipInfo content="Default space">
          <div
            v-if="space.default"
            class="absolute bottom-0 right-0 z-10 flex items-center justify-center p-1 transition-all duration-300 bg-blue-400 rounded-full hover:scale-105 hover:-translate-y-1"
          >
            <CustomIcon
              name="hugeicons:seal"
              mode="svg"
              :stroke-width="2.7"
              class="text-white stroke-2 size-5"
            />
          </div>
        </ToolTipInfo>
      </div>
    </ToolTipInfo>

    <ToolTipInfo :delay="300" side="top" content="Create new space">
      <div :class="['relative hover:z-10 -ms-4']">
        <Avatar
          class="transition-all duration-300 border-2 cursor-pointer size-20 hover:scale-105 hover:-translate-y-1 hover:shadow-lg border-slate-400"
        >
          <Icon icon="hugeicons:plus-sign" class="text-slate-400 size-8" />
        </Avatar>
      </div>
    </ToolTipInfo>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { vElementHover } from "@vueuse/components";

const isDark = useDark();

const isHovered = shallowRef(false);
function onHover(state: boolean) {
  isHovered.value = state;
}

const spaces = computed(() => {
  return [
    {
      id: 1,
      name: "Personal Space",
      color: isDark.value ? "#e2e8f0" : "#020617",
      default: true,
    },
    {
      id: 3,
      name: "Family Space",
      color: isDark.value ? "#86efac" : "#22c55e",
      default: false,
    },
    {
      id: 2,
      name: "Work Space",
      color: isDark.value ? "#a5b4fc" : "#6366f1",
      default: false,
    },
  ];
});
</script>
