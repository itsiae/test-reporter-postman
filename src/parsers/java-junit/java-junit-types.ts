export interface JunitReport {
  testsuites: TestSuites
}

export interface SingleSuiteReport {
  testsuite: TestSuite
}

export interface TestSuites {
  $: {
    time: string
  }
  testsuite?: TestSuite[]
}

export interface TestSuite {
  $: {
    name: string
    tests: string
    executed: string
    failed: string
    skipped: string
    time: string
    timestamp?: Date
  }
  testcase: TestCase[]
}

export interface TestCase {
  $: {
    classname: string
    file?: string
    name: string
    time: string
  }
  failed?: string | Failure[]
  executed?: string | Failure[]
  skipped?: string[]
}

export interface Failure {
  _: string
  type: string
  message: string
}
