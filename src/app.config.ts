export const config = {
  site: {
    name: 'Papra',
  },
  discordInvite: 'https://discord.gg/8UPjzsrBNF',
  sponsorLink: 'https://github.com/sponsors/CorentinTh',
  getStartedLink: 'https://dashboard.papra.app',
  launchDiscount: {
    enabled: true,
    percentage: 50,
    // 31 december 2025 Paris time
    endsAt: new Date('2025-12-31T23:59:59+01:00'),
  },
} as const;
