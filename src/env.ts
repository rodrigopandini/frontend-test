import { environment } from './environments/environment';

export function isProd(): boolean {
  return environment.production;
}
