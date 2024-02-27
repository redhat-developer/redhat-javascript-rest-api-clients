/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExcessResource } from './ExcessResource';
import type { ObjectReference } from './ObjectReference';
export type ClusterAuthorizationResponse = {
  allowed: boolean;
  excess_resources: Array<ExcessResource>;
  organization_id?: string;
  subscription?: ObjectReference;
};

