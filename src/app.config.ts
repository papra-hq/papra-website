const isLaunched = true;

export const requestEarlyAccessLink = 'https://tally.so/r/npz6BE';
const getStartedLink = 'https://dashboard.papra.app';

export const config = {
  site: {
    name: 'Papra',
  },
  isLaunched,
  discordInvite: 'https://discord.gg/8UPjzsrBNF',
  sponsorLink: 'https://github.com/sponsors/CorentinTh',
  getStartedLink: isLaunched ? getStartedLink : requestEarlyAccessLink,
  launchDiscount: {
    enabled: isLaunched,
    percentage: 50,
    // 31 december 2025 Paris time
    endsAt: new Date('2025-12-31T23:59:59+01:00'),
  },
} as const;
