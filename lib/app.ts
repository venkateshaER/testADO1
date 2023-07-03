#!/usr/bin/env node
import { DeploymentPipeline, Platform } from '@amzn/pipelines';
import { App } from 'aws-cdk-lib';


// Set up your CDK App
const app = new App();

const applicationAccount = '965275304560';

const pipeline = new DeploymentPipeline(app, 'Pipeline', {
  account: applicationAccount,
  pipelineName: 'TestJavaApp',
  versionSet: 'JavaApp/develop', // The version set you created
  versionSetPlatform: Platform.AL2_X86_64,
  trackingVersionSet: 'live', // Or any other version set you prefer
  bindleGuid: 'amzn1.bindle.resource.35vyrz2spmawz3kj6halwnghq',
  description: 'Simple CDK Pipeline',
  pipelineId: '5721896',
  selfMutate: true,
});
