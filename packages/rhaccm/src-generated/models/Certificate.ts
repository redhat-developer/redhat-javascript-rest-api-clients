/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificateSerial } from './CertificateSerial';
export type Certificate = {
  cert: string;
  id: string;
  key: string;
  metadata: Record<string, string>;
  organization_id: string;
  serial: CertificateSerial;
};

