let previewCount = 0
const startAt = new Date()
export default defineEventHandler((event) => {
  return {
    api: 'works',
    startAt: startAt.toDateString(),
    pv: previewCount++,
  }
})
