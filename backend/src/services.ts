/**
 * The backing services this application is configured to reach.
 *
 * Each entry maps a service to the environment variable that addresses it. The value
 * comes from docker-compose.yml through .env.example, so the health check reports
 * what the running deployment can actually reach.
 */
export const SERVICES: Record<string, string> = {
  redis: "REDIS_URL",
};

/** Each service mapped to whether its connection variable is set. */
export function configuredServices(): Record<string, boolean> {
  return Object.fromEntries(
    Object.entries(SERVICES).map(([name, variable]) => [name, Boolean(process.env[variable])]),
  );
}
