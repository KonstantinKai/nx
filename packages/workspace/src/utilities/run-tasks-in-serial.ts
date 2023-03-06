import type { GeneratorCallback } from '@nrwl/devkit';

/**
 * Run tasks in serial
 *
 * @deprecated This function will be removed from `@nrwl/workspace` in a future version. Prefer importing it from `@nrwl/devkit`.
 * @param tasks The tasks to run in serial.
 */
export function runTasksInSerial(
  ...tasks: GeneratorCallback[]
): GeneratorCallback {
  return async () => {
    for (const task of tasks) {
      await task();
    }
  };
}
