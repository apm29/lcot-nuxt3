<template>
  <main flex="~ nowrap">
    <Style
      type="text/css"
      children="body { padding: 0; margin: 0} html { padding: 0; margin: 0}"
    />
    <aside sticky top-0 h-screen flex="shrink-0">
      <nav v-for="routeItem of routes">
        <a :href="routeDefaultPath(routeItem)">{{ routeItem.label }}</a>
      </nav>
    </aside>
    <main flex="grow">
      <header
        sticky
        top-0
        flex
        gap-2
        v-if="activeRoute && activeRoute.sub && activeRoute.sub.length"
      >
        <nav inline v-for="subRoute of activeRoute.sub">
          <a :href="subRoute.path">{{ subRoute.label }}</a>
        </nav>
      </header>
      <NuxtPage />
    </main>
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
}
const routes = reactive(<Array<RouteItem>>[
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
        path: "/about-chinese/daily-sentence",
        icon: "i-mdi-chat",
      },
      {
        label: "Tongue twist",
        path: "/about-chinese/tongue-twist",
        icon: "i-mdi-thumb-up",
      },
      {
        label: "Traditional culture",
        path: "/about-chinese/traditional-culture",
        icon: "i-mdi-silverware-variant",
      },
      {
        label: "Spoken Chinese",
        path: "/about-chinese/spoken-chinese",
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
const isActive = function (routeItem: RouteItem): boolean {
  return (
    route.path === routeItem.path ||
    (routeItem.sub && routeItem.sub.some((r) => isActive(r))) ||
    false
  );
};
const activeRoute = computed(() => {
  return routes.find((route) => isActive(route));
});
function routeDefaultPath(routeItem: RouteItem) {
  if (routeItem.sub && routeItem.sub.length) {
    return routeItem.sub[0].path;
  } else {
    return routeItem.path;
  }
}
const router = useRouter();
const route = useRoute();
</script>
