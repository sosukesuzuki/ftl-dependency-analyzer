declare module "node:test" {
  type TestContext = {
    diagnostic(message: string): void;
    runOnly(shouldRunOnlyTests: boolean): void;
    skip(...message: string[]): void;
    todo(...message: string[]): void;
    test: Test;
  };
  type TestCb =
    | ((testContext: TestContext, done: () => void) => void)
    | ((testContext: TestContext, done: () => void) => Promise<void>);
  type Test = (name: string, cb: TestCb) => void;
  const test: Test;
  export default test;
}
