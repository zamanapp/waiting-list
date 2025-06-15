<context>
# Overview
This is a PRD for a website revamp that currently acts as a waitinglist for a product called Zaman. Zaman is a productivity suite for Muslims and Muslim businesses. The website should be monotone, sleek, modern and uses bentogrids for the layout and is user friendly where the users can always interact with the CTA button.

You will be working off an existing codebase that uses Nuxtjs, TailwindCSS, and Vue.js. The codebase is very well organized and should be easy to navigate. It also follows best practices for the framework and the language so you can use it as a standard for quality and consistency. also we don't tolerate any code that is not following the best practices and the codebase should be a good example of how to write code.

Zaman is a productivity suite for Muslims and Muslim businesses. It is a collection of what we call weidgets where each widget acts as a portal to a different "product". The widgets for the MUP are:

- Time widget
- Deeds widget
- Habit tracker widget
- Wird widget
- Calendar widget

The goal of Zaman is to help Muslims balance between their dunya and their akhirah. while placing their faith at the center of their lives. This enables them to not compromise their faith for the dunya and to not loose track of their akhirah.

The website should be a single page application that is responsive and works on all devices supporting evergreen browsers.

# Zaman Features

As mentioned above, Zaman is a productivity suite for Muslims and Muslim businesses. It is a collection of what we call weidgets where each widget acts as a portal to a different "product". The following is a description of each widget and it's features:

## Time widget:

In it's collapsed state the time widget shows the current moon-phase alongside the time and date both in Hijri and gregorian calendar. It also shows the next prayer time or notifications of what's coming up next.

When expanded the widget shows all the prayer times for the current day. at the top the user can navigate between different days between the current week and the previous one.

When selecting a particular prayer time, the chart gets populated showing the prayer time fluctuations throughout the year helping the user to plan their life and visualize the fluctuations. It also give information of the max and min prayer times for the year.

When the user scrolls down, the get to see a hadeeth of the prophet (sallallahu alayhi wa sallam) related to the lifespan of the Muslim. Followed by a visualization of how much years the user have exhausted and how many year left to live based on the hadeeth. This gives the user a sense of urgency to live their live properly and without a waste of time.

## Deeds widget:

In it's collapsed state the deeds widget shows a list of deeds that the user can do through the day. the widget has tabs where the user can switch between different time scales, like week, month and year. Each tab also allow the user to move forward or backward in time as well as resetting to today.

This allows the user to know what deeds they can do at any given time. Each deed is a card that has a title, time of when it starts and ends, as well as checkbox to track the deed. The card also has few action buttons. to add to calendar, disable notifications, share the deed, or add the deed to the timeline (PrayerMeter) to visualize it's start and end.

When expanded the widgets lands on the horizons view where the user can see the deeds for the current day, week, month and year in a single view each in different columns. The expanded view also has tabs on the left to select specific timescales, days, weeks, months and years where the user can see 4 columns where the first one represent the current and the 3 other columns represent the future. so for example if this year is 2025 and the user select the years tab they will see 4 columns 2025, 2026, 2027 and 2028. each column shows the deeds for that year in a single view.

Deeds have specificity related to their frequency, like daily, weekly, monthly, yearly, etc. Each timescale will only show it's own granularity or above. so the day will show all of them whereas the year will only show yearly deeds.

When the user clicks on a deed card they get to see all the information related to that deed. think of it like a wiki page. The page includes the title and some properties related to the deed. a chart resembling the famous github contribution graph indicating the deed tracking progress. and informational content about the deed itself.

Zaman's Deeds system is trying to solve the following challenges:

- At a given moment or scale of time, what can I do as a Muslim to please Allah?
- As a Muslim, what does my religion expect me to do in general for a specific time scale? (Learn about available deeds)
- As a Muslim, how can I learn more about a specific deed or if i have questions about a deed?

for a reference this is how a deed is represented internally:

```md
---
summary: Eid al-Fitr Prayer
description: The first Eid of the year

# uid: string
#    dtstart
start: "{{YEAR}}1001T{{SUNRISE_TIME}}"
#    optional no more then once
priority: 0
rrule: FREQ=YEARLY;INTERVAL=1;BYMONTH=10;BYMONTHDAY=01
#    these two have an either or relationship they are both optional
duration: PT1H
#    optional can occur more than once
categories:
  - Celebration
  - Eid
  - Prayer

# TODO: replace this by ids
relatedTo:
  - eid-al-fitr
  - zakat-al-fitr
  - eid-al-fitr-prayer-preparation

# this property can have two values: GREGORIAN | HIJRI defaults to gregorian

calendar: HIJRI

# indicates until what view the deed is relevant eg: if we set specificity is Year then the deed should be visible from the year view down until the day view

specificity: year

delayStart: PT15M
trackable: false
---

# Description

# Background

# Instructions

# Rewards

# Warning

# References
```

## Habit tracker widget:

In it's collapsed state the habit tracker widget shows my week progress and the current streak. the user can switch between week or month view.

the widget also have few tabs to switch between different sets of habits. by default we have the daily prayers, rawatib, and daily athkar.

When expanded the widget shows the following:

- A filter to filter the habits and to pick a specific time range.
- A chart to visualize the habits progress like Github contribution graph.
- A chart to see the habits momentum over time.
- Some basic stats about the person, like activities per hours of day, activities per day of week, most tracked habits.
- Streaks categorized by timescale
  - Daily
  - Weekly
  - Monthly
  - Yearly
- When the user filters the habits they can create a dedicated view for that filter.
- A list of Views the user can pick from. by default they have the following:
  - Daily prayers
  - Rawatib
  - Daily Athkar
- A button to add a new habit.
- A button to add a new view.

The goal of habit tracker is help the user with the following:

- Track native goals (Deeds, Athkar, Quran Memorizations, Quran Revisions, Quran Recitations)
- Tracks custom goals (Habits)
- Remind the user about their goals
- A one place for the user to get insights on their progress

## Wird widget:

### Wird is used for 3 purposes:

1. Help you recite the Quran
2. Help you memorize
3. Help you revise

### Recitation

1. Wird helps you track one or more recitations
2. Helps you create a schedule in your calendar
3. The habit tracker tracks your recitation habits and gamifies it

### Memorization

1. Wird helps you track your whole Mushaf memorisation
2. Wird also allow you to create memorising sessions to memorise any portion of the Mushaf
3. The portions contribute back to the whole Mushaf memorisation
4. You can visualise it in different ways
   Eg: Progress per Ayah, chapters, Hizb, Juz, & Page
5. Wird helps you create a schedule in your calendar
6. The habit tracker tracks your memorisation habits and gamifies it

### Revise

1. Wird allows you to start one or many revision sessions
2. Wird allows you to track your revision score per ayah, chapters, hizb, juz & page
3. Wird allow you to toggle if the revision score effects your memorisation or not
   1. This could gamified with scores

### General Features

1. Users can add to quick access Surah or an Ayah
   1. By default Zaman offer quick access for Surah Al Kahf, Surah Al Mulk, Ayatul Kursi, Muawidhatayn, last two ayah’s of Surah Baqarah
   2. Quick access can have a description associated to it
2. Users can write notes on a Surah or an Ayah
3. Notes should display in Kenz

### Expanded State

- Whole Mushaf memorization Visualization
- Quick Access to Suwar (relevant to time)
- Your Quick Access
- Create sessions
- Next scheduled sessions (Recitations, Memorization, Revisions)
  - All in one section with filter or separate sections?
- Free recitation
  - For now we don’t support Mushaf layouts yet
- Notes
- Favorits

## Kenz

Kenz is a private personal space that works very similar to mymind. Where users can dump their thoughts, ideas, and plans. and everything else they come across on the internet such us links, tweets, pdfs, etc.

Kenz can easily resurface the information the user has stored in it using AI when the user search for it. It also help the user organize information without explecitly tagging it.

Kenz will also integrate with the other widget as well as other third party service like Telegram or Whatsapp.

## Calendar widget:

### The goal of the calendar

While the deeds system is focused on the Akhirah, Zaman wants it’s calendar to be the piece that ties the Akhira to the Dunia together.

It's where you get the visibility over the Dunia but without loosing sight of the Akhirah.

The goal is to always give the user context of how the Dunia planing might impact the Akhirah.

### Functionality

The following are few problems that Zaman calendar solves

- Seamlessly switching between Hijri and Gregorian (the switch doesn't abstract away the other calendar)
- Native Hijri support for recurrence rules
- Manually adjust the Hijri date to moon sighting or local religious authorities (advanced Hijri date adjustments)
- Having prayers time dynamic on the calendar and being able to block time for it
- Able to add deeds to the calendar or plan around them
  - We need to add proposed duration of deeds to each deed (that can be used here)
  - The actual deed duration becomes a time bucket for the deed
- Allocate buckets of time to specific type of activities (time slots)
- Integrate Google calendar (might loose Hijri capabilities)
- Support multiple time scale views. (day, week, month, year, custom)
- Agenda, Day and week views all support showing prayer times
- Support for multiple timezones
- Map Todos/Tasks to the calendars
  - Integrate with emails (emails as tasks)
  - Should some deeds be turned to tasks instaid?
  - check timestripe calendar v2 https://timestripe.com/calendar/

Other features that are not widgets but are part of the product:

## Spaces:

Users can create spaces to segregate different aspects of their life. for example a user can have a personal and work space. A user can select more then one space at a time, This is useful for the user to see the different aspects of their life in a single view for example their calendar or habit tracking.

Each space can have some widgets disabled or enabled.

## PrayerMeter:

This is a day timeline at the top of the screen that shows the prayer times for the current day. It works like the north star where it's alwayse visible to the user and a simple glance gives them an idea an d context about their day relative to the prayer times.

# Website sections and user journey

The website will have a hero section with a CTA button to join the waiting list.

The hero section has a tagline of "Manage your time around what matters" followed by a subtitle of "Manage your deen, schedule, habits, and life — in one place built for the everyday Muslim."

The CTA is a button with a text of "Join the sabirin list".

As the user scrolls down they start to learn more about the product. the following are the feature and even copy to some extent for these features:

The list is in no particular order and is not exhaustive however when you design the website keep in mind how the features can be logically grouped togather and what is the most exciting and interesting way to present them so the user keeps scrolling while learning more about the product.

As you build the website you will have to improvise on how to write catchy copy for each feature or group of features.

- Privacy first
- Local first
- Offline first (coming soon)
- Multilingual (No idea when we can claim this)
- Dark mode
- Native Hijri Support
- Switch between Hijri and Gregorian
- Multiple Spaces
  - Collaboration (Coming soon)
- PrayerMeter (Day progress anchored in the daily prayers at a glance)
- Weather and Weather related reminders
- Moon cycle
- Prayer times and Prayer times insights
- Check prayers for different locations
- Life Progress

## Deeds

- Time-aware deeds
  - Browse daily, weekly, monthly and yearly deeds from Quran and Sunnah
  - Discover the right acts of worship, at the right time — daily, weekly, monthly, or yearly.
  - Every deed on Zaman isn’t just a checklist — it comes with the why, how, rewards, and authentic sources, so you don’t just do it, you understand it and live it with intention.
- Track your performed deeds
- Get notified for deeds you want as a habit
- Add to deeds to your calendar
- Drag and Drop deeds between widgets (Interactivity between widgets)

## Habit Tracker

- Level up your Dunia and Akhir habits (tracking)
- Gain insights that help you grow one habit at a time. (Insights)
- Organize your habits into focused views for more meaningful insights. (Views)

## Quran

- Make Quran part of your daily routine
  - Memorization
  - Recitation
  - Revision
- Time-aware recitation of Suwar and Ayat

## Kenz (Qalam, Black Hole, Treasure, )

A place where your thoughts and what you like is turned into treasure

- Save anything you come across
- Jot down your thoughts and ideas
- Surface your all of it effortlessly
- Use collections to group things

## Calendar

- Worlds first Hijri Native (coming soon)
  - Recurrence rules in Hijri
  - Up to a minutes precision
  - Manually adjust the Hijri date to moon sighting or local religious authorities (advanced Hijri date adjustments)
- Connect your google calendar with 2-way sync
- View multiple Timezones at once
- Allocate buckets of time to specific type of activities (time slots)
- Prayers, Deeds and Quran directly integrated in your calendar
- Schedule Todos on your calendar

## Coherence and harmoney between widgets

In Zaman the widgets are not isolated from each other. they are connected to each other making them very powerful and convenient whne used togather.

- Deeds can be shown on the PrayerMeter timeline.
- Deeds can be added to the calendar even by drag and dropping them.
- A deeds can redirect you to the wird widget (example reading surat al kahf every Friday)
- Tracked deeds can be found in the habit tracker widget
- The habit tracker trakcs deeds, wird (quran recitications, memorizations and revisions)
- The calendar displays deeds and wird if you add to your schedule
- Wird helps you create a Quran schedule in your calendar
- Kenz can be connected to the calendar (example saving a link to a pdf)

## AI (MCP)

- Dump Via telegram
- Control your calendar from Telegram

# Design guidelines

- Use bento grids for the layout when possible
- Use a monotone design (Black/and White)
- Use a modern and sleek design
- Use the already defined and loaded fonts (Satoshi)
- Keep the spacing, margines and padding consistent.
- The only element we know needs to be present in the navigation is the logo and Manifesto anything else is optional.
- The footer at the end of the page must have "{{current_year === 2025 ? 2025 : current_year }} © All rights reserved."
- for inspiration, check the following websites:

  - Linear.app
  - Notion.so
  - Obsidian.md
  - raycast.com
  - reflect.app
  - mymind.com
  - dimention.dev
  - bentogrids.com

- You can also find many inspiration images and product references in the `inspirations` folder. they are as follows:

  - `inspirations/current.png` for the current state of the website
  - `inspirations/draft.png` for the draft state of the future website. Please don't copy this as the design doesn't look good it's just for you to get the jist of it.
  - `inspirations/overview.png` this is the overview (dashboard) page of Zaman product.
  - `inspirations/{first|second|third}-time-widget.png` are screenshots of the expanded state of the time widget
  - `inspirations/{horizons|days|weeks}-deeds-widget.png` are screenshots of parts of the expanded state of the deeds widget
  - `inspirations/time-widget.png` is a screenshot of the collapsed state of the time widget
  - `inspirations/deeds-widget.png` is a screenshot of the collapsed state of the deeds widget
  - `inspirations/deed-card.png` is a screenshot of of a deed card.

- When you design the website you will eventually need to show use some images to illustrate the features. when you do. for now just use a placeholder flat color as an image.
- Keep in mind that currently all we have is the prayerMeter, TimeWidget and DeedsWidget. The rest are still under development so images can't be used yet however if you still think it's necessary just use a placeholder as mentioned above. the reason this is mentioned is for us to see if we can avoid using images all over the place especially for the missing widgets.
- I have included a `TynDall.vue` component in the folder `components/cta` for you to use either at the end of the page or in the middle of the page.
- The `JoinModal.vue` component has all the neccecary code for the form submission and tracking using Posthog. It is extreamly important to use that logic as is and not change it at all.
- Use Posthog for analytics and tracking.
- Currently the website has a full screen moon animation as you can see in the code and `inspirations/current.png`. See if we can keep it most likely as section just before the footer.

  </context>
  <PRD>

# Technical Architecture

The website should be a single page application that is responsive and works on all devices supporting evergreen browsers.
It uses Nuxtjs, TailwindCSS, and Vue.js. The codebase is very well organized and should be easy to navigate. It also follows best practices for the framework and the language so you can use it as a standard for quality and consistency. also we don't tolerate any code that is not following the best practices and the codebase should be a good example of how to write code.

We also use shadcn-nuxt for the UI components. and the following packages:

- Vueuse
- @nuxtjs/i18n (for i18n)
- gsap (for animations)
- lucide-vue-next (for icons)
- mitt (for event bus)
- posthog-js (for analytics)

# Logical Dependency Chain

- Start working as progressively managable as possible.
- Yealding a single high quality section of the website at a time is better then outputting all of it at low quality. (don't chew more then you can handle)
- We can start by getting the look and feel first before adding things like form submissions, analytics and SEO.

# Risks and Mitigations

- The biggest challenge right now is that we only have two widgets ready. It will be very hard to talk about the rest of the widgets, However we should try to be smart about it and use illustrations that pass the message through without needing the full design.
- To avoid overcomplicating the task we won't use images only placeholders which can have an `alt` directive to describe the content.

  </PRD>
