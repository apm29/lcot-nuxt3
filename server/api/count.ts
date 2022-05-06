let previewCount = 0
export default defineEventHandler((event) => {
  return {
    api: 'works',
    pv: previewCount++,
  }
})
