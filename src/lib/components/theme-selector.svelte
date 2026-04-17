<script lang="ts">
  import { THEMES } from '$lib/themes'
  import { selectedThemeId } from '$lib/stores'
  import ThemeSelect from './theme-select.svelte'

  const themes = Object.values(THEMES)
  const BRAND_LABELS: Record<string, string> = {
    vercel: 'Vercel',
    peerlist: 'Peerlist',
    x: 'X',
    linkedin: 'LinkedIn',
    threads: 'Threads',
    pinterest: 'Pinterest',
    snapchat: 'Snapchat',
    whatsapp: 'WhatsApp',
    discord: 'Discord',
    sharechat: 'ShareChat',
    substack: 'Substack',
    telegram: 'Telegram',
    tiktok: 'TikTok',
    instagram: 'Instagram',
    facebook: 'Facebook'
  }
  const BRAND_DEFAULT_THEME: Record<string, string> = {
    vercel: 'vercel-dark',
    peerlist: 'peerlist-dark',
    x: 'x-dark',
    linkedin: 'linkedin-dark',
    threads: 'threads-dark',
    pinterest: 'pinterest-dark',
    snapchat: 'snapchat-dark',
    whatsapp: 'whatsapp-dark',
    discord: 'discord-dark',
    sharechat: 'sharechat-dark',
    substack: 'substack-dark',
    telegram: 'telegram-dark',
    tiktok: 'tiktok-dark',
    instagram: 'instagram-dark',
    facebook: 'facebook-dark'
  }

  function getThemePreviewBg(theme: (typeof THEMES)[string]): string {
    if (theme?.backgroundImage) {
      return theme.backgroundImage
    }
    return theme?.background || '#fdfcf9'
  }

  //Group the brand themes
  const groupedOptions: any[] = []
  const brandSeen = new Set()

  themes.forEach((theme) => {
    if (theme.brand) {
      if (!brandSeen.has(theme.brand)) {
        brandSeen.add(theme.brand)
        groupedOptions.push({
          value: theme.brand,
          label: BRAND_LABELS[theme.brand] || theme.brand.charAt(0).toUpperCase() + theme.brand.slice(1),
          preview: getThemePreviewBg(theme),
          brand: theme.brand
        })
      }
    } else {
      groupedOptions.push({
        value: theme.id,
        label: theme.name,
        preview: getThemePreviewBg(theme)
      })
    }
  })

  $: currentValue = THEMES[$selectedThemeId]?.brand || $selectedThemeId

  function handleChange(value: string) {
    selectedThemeId.set(BRAND_DEFAULT_THEME[value] || value)
  }
</script>

<ThemeSelect
  value={currentValue}
  options={groupedOptions}
  label="Theme"
  handleValueChange={handleChange}
/>
