<template>
  <div
    style="width: 165%"
    class="flex flex-col flex-none max-w-full bg-white sm:max-w-none md:max-w-full"
  >
    <div class="flex flex-auto">
      <div
        class="sticky left-0 z-10 flex-none bg-white w-14 ring-1 ring-gray-100"
      />
      <div class="grid flex-auto grid-cols-1 grid-rows-1">
        <!-- Horizontal lines -->
        <div
          class="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100"
          style="grid-template-rows: repeat(10, minmax(3.5rem, 1fr))"
        >
          <div ref="containerOffset" class="row-end-1 h-7" />
          <template v-for="(hour, index) in hours" :key="hour">
            <div>
              <div
                class="sticky left-0 z-20 -mt-2.5 -ms-14 w-14 pe-2 text-right text-xs/5 text-gray-400"
              >
                {{ hour }}
              </div>
            </div>
            <div />
          </template>
        </div>

        <!-- Vertical lines -->
        <div
          class="hidden grid-cols-4 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 sm:grid sm:grid-cols-4"
        >
          <div class="col-start-1 row-span-full" />
          <div class="col-start-2 row-span-full" />
          <div class="col-start-3 row-span-full" />
          <div class="col-start-4 row-span-full" />
          <div class="w-8 col-start-5 row-span-full" />
        </div>

        <!-- Events -->
        <ol
          class="grid grid-cols-1 col-start-1 col-end-2 row-start-1 sm:grid-cols-4 sm:pr-8"
          style="grid-template-rows: 1.75rem repeat(60, minmax(0, 1fr)) auto"
        >
          <li
            class="relative flex mt-px sm:col-start-1"
            style="grid-row: 26 / span 12"
          >
            <div
              class="absolute flex flex-col items-start p-2 overflow-y-auto rounded-lg group inset-1 bg-blue-50 text-xs/5 hover:bg-blue-100"
            >
              <p class="order-1 font-semibold text-blue-700">
                {{ eventTitle }}
              </p>
              <p class="text-blue-500 group-hover:text-blue-700">
                <time datetime="2022-01-12T09:00">9:00 AM</time>
              </p>
            </div>
          </li>
          <!-- <Popover :defaultOpen="true" :open="true">
            <PopoverTrigger
              class="relative flex mt-px sm:col-start-1"
              style="grid-row: 26 / span 12"
            >
              <li>
                <div
                  class="absolute flex flex-col items-start p-2 overflow-y-auto rounded-lg group inset-1 bg-blue-50 text-xs/5 hover:bg-blue-100"
                >
                  <p class="order-1 font-semibold text-blue-700">
                    {{ eventTitle }}
                  </p>
                  <p class="text-blue-500 group-hover:text-blue-700">
                    <time datetime="2022-01-12T09:00">9:00 AM</time>
                  </p>
                </div>
              </li>
            </PopoverTrigger>
            <PopoverContent class="p-0 min-w-max" side="right" align="start">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription
                  >Deploy your new project in one-click.</CardDescription
                >
              </CardHeader>
              <CardContent>
                <form>
                  <div class="grid items-center w-full gap-4">
                    <div class="flex flex-col space-y-1.5">
                      <Label for="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                      <Label for="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="nuxt"> Nuxt </SelectItem>
                          <SelectItem value="next"> Next.js </SelectItem>
                          <SelectItem value="sveltekit"> SvelteKit </SelectItem>
                          <SelectItem value="astro"> Astro </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter class="flex justify-between px-6 pb-6">
                <Button variant="outline"> Cancel </Button>
                <Button>Deploy</Button>
              </CardFooter>
            </PopoverContent>
          </Popover> -->
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
const container = ref(null);
const containerOffset = ref(null);
const eventTitle = ref("New Event");
const isOpen = ref(true);

// Generate hours array in the correct order: 12AM, 1AM-11AM, 12PM, 1PM-11PM
const hours = computed(() => {
  const hoursArray = [];

  // 12AM
  //   hoursArray.push("12AM");

  // 1AM through 11AM
  for (let i = 7; i <= 11; i++) {
    hoursArray.push(`${i}AM`);
  }

  //   // 12PM
  //   hoursArray.push("12PM");

  //   // 1PM through 11PM
  //   for (let i = 1; i <= 11; i++) {
  //     hoursArray.push(`${i}PM`);
  //   }

  return hoursArray;
});
</script>
