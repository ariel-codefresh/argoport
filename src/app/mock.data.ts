/* tslint:disable */
export const mockData = [
  {
    repo: "https://github.com/saffi-codefresh/argo-crane",
    author: "saffi-boss",
    description: "just wait for x time",
    path: "example.yaml",
    weeklyDownloads: 3,
    stars: 5,
    successRate: {
      runs: 121,
      success: 80
    },
    readme: "https://raw.githubusercontent.com/saffi-codefresh/argo-crane/main/README.md",
    createdAt: "2020-03-12T17:24:31",
    name: "wait",
    versions: [ ],
    defaultBranch: "main",
    template: "# example ",
    parameters: [
      { name: "milliseconds", default: "1000"}
    ],
    changelog: ""
  },
  {
    repo: "https://github.com/arckey/iot-controller",
    author: "roi-kramer",
    description: "controll IoT devices using the samsung smartthings API",
    path: "workflows/workflow-template.yaml",
    weeklyDownloads: 19,
    stars: 15,
    successRate: {
      runs: 512,
      success: 401
    },
    readme: "https://raw.githubusercontent.com/arckey/iot-controller/main/README.md",
    changelog: "https://raw.githubusercontent.com/arckey/iot-controller/main/README.md",
    template: "https://raw.githubusercontent.com/arckey/iot-controller/main/workflows/new-workflow.yaml",
    createdAt: "2020-12-17T03:24:00",
    name: "iot-controller",
    versions: [
      "v0.0.3",
      "v0.0.2",
      "v0.0.1"
    ],
    defaultBranch: "main",
    parameters: [
      {
        name: "capability"
      },
      {
        name: "command"
      },
      {
        name: "arguments",
        default: "bla"
      },
      {
        name: "token"
      },
      {
        name: "label"
      }
    ],
  }
]
