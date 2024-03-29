import { awscdk, github, javascript, release } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Open Construct Foundation',
  authorAddress: 'thorsten.hoeger@taimos.de',
  cdkVersion: '2.120.0',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: '@open-constructs/aws-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/open-constructs/aws-cdk-library.git',
  licensed: true,
  license: 'Apache-2.0',
  // autoApproveUpgrades: true,
  // autoApproveOptions: { allowedUsernames: ['hoegertn'] },
  depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
  },
  releaseTrigger: release.ReleaseTrigger.manual(),
  gitpod: true,

  deps: [
    '@aws-sdk/client-s3@3.6.1',
    '@aws-sdk/client-sfn@3.501.0',
    '@aws-sdk/client-ec2@3.501.0',
    'esbuild@0.18.16',
  ],

  bundledDeps: [
    '@aws-sdk/client-s3@3.6.1',
    '@aws-sdk/client-sfn@3.501.0',
    '@aws-sdk/client-ec2@3.501.0',
    'esbuild@0.18.16',
  ],
  // devDeps: [

  // ],

});


project.synth();