function asString<T extends string | undefined>(value: string | undefined, defaultValue?: T): T extends undefined ? string | undefined : string {
  return (value ?? defaultValue) as T extends undefined ? string | undefined : string;
}

export const config = {
  posthog: {
    apiKey: asString(import.meta.env.POSTHOG_API_KEY),
    apiHost: asString(import.meta.env.POSTHOG_API_HOST, 'https://eu.i.posthog.com'),
    isEnabled: Boolean(import.meta.env.POSTHOG_API_KEY),
  },
};
