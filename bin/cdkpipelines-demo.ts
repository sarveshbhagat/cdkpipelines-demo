#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkpipelinesDemoStack } from '../lib/cdkpipelines-demo-stack';

const app = new cdk.App();
new CdkpipelinesDemoStack(app, 'CdkpipelinesDemoStack');
