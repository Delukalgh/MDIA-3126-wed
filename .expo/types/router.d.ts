/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/cheese` | `/(tabs)/explore` | `/(tabs)/sandwich` | `/_sitemap` | `/cheese` | `/explore` | `/sandwich`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
