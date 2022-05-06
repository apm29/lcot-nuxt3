<template>
  <main>
    <side>
      <nav v-for="routeItem of routes">
        {{ routeItem.label }}
      </nav>
    </side>
    <head></head>
    <NuxtPage />
  </main>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: "Nuxt.js - %s", // or, title => `My App - ${title}`
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "app",
  },
});
interface RouteItem {
  label: string;
  path?: string;
  icon: string;
  sub?: RouteItem[];
  active?: boolean;
}
const routes = reactive([
  {
    label: "Home",
    path: "/",
    icon: "i-mdi-home",
  },
  {
    label: "About us",
    path: "/about",
    icon: "i-mdi-airplane-takeoff",
    sub: [
      {
        label: "Our service",
        path: "/about/our-service",
        icon: "i-mdi-face-agent",
      },
      {
        label: "Our team",
        path: "/about/our-team",
        icon: "i-mdi-account-group",
      },
    ],
    active: false,
  },
  {
    label: "Course on tours",
    icon: "i-mdi-wallet-travel",
    path: "/classes",
    sub: [
      {
        label: "Online class",
        path: "/classes/online-class",
        icon: "i-mdi-television-classic",
      },
      {
        label: "Offline class",
        path: "/classes/offline-class",
        icon: "i-mdi-human-male-board",
      },
    ],
    active: false,
  },
  {
    label: "Living in Hangzhou",
    path: "/living-in-hangzhou",
    icon: "i-mdi-city-variant",
    sub: [
      {
        label: "School in Hangzhou",
        path: "/living-in-hangzhou/school-in-hangzhou",
        icon: "i-mdi-school",
      },
      {
        label: "Tours in Hangzhou",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-train-car",
      },
    ],
    active: false,
  },
  {
    label: "About chinese",
    path: "/about-chinese",
    icon: "i-mdi-post-outline",
    sub: [
      {
        label: "One sentence a day",
        path: "/living-in-hangzhou/school-in-hangzhou",
        icon: "i-mdi-chat",
      },
      {
        label: "Tongue twist",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-thumb-up",
      },
      {
        label: "Traditional culture",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-silverware-variant",
      },
      {
        label: "Spoken Chinese",
        path: "/living-in-hangzhou/tours-in-hangzhou",
        icon: "i-mdi-emoticon-excited-outline",
      },
    ],
    active: false,
  },
  {
    label: "Contact us",
    path: "/contact-us",
    icon: "i-mdi-email-outline",
  },
]);
const isActive = function (route: RouteItem): boolean {
  return (
    route.path === route.path ||
    (route.sub && route.sub.some((r) => isActive(r))) ||
    false
  );
};
const router = useRouter();
const route = useRoute();
</script>
