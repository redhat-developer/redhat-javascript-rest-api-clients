/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessReview } from '../models/AccessReview';
import type { AccessReviewResponse } from '../models/AccessReviewResponse';
import type { AccessTokenCfg } from '../models/AccessTokenCfg';
import type { Account } from '../models/Account';
import type { AccountGroup } from '../models/AccountGroup';
import type { AccountGroupAssignment } from '../models/AccountGroupAssignment';
import type { AccountGroupAssignmentList } from '../models/AccountGroupAssignmentList';
import type { AccountGroupList } from '../models/AccountGroupList';
import type { AccountGroupRequest } from '../models/AccountGroupRequest';
import type { AccountList } from '../models/AccountList';
import type { AccountPatchRequest } from '../models/AccountPatchRequest';
import type { BillingModel } from '../models/BillingModel';
import type { BillingModelList } from '../models/BillingModelList';
import type { CapabilityList } from '../models/CapabilityList';
import type { CapabilityReview } from '../models/CapabilityReview';
import type { CapabilityReviewRequest } from '../models/CapabilityReviewRequest';
import type { Certificate } from '../models/Certificate';
import type { CertificatesRequest } from '../models/CertificatesRequest';
import type { CloudResource } from '../models/CloudResource';
import type { CloudResourceList } from '../models/CloudResourceList';
import type { ClusterAuthorizationRequest } from '../models/ClusterAuthorizationRequest';
import type { ClusterAuthorizationResponse } from '../models/ClusterAuthorizationResponse';
import type { ClusterRegistrationRequest } from '../models/ClusterRegistrationRequest';
import type { ClusterRegistrationResponse } from '../models/ClusterRegistrationResponse';
import type { ClusterTransfer } from '../models/ClusterTransfer';
import type { ClusterTransferList } from '../models/ClusterTransferList';
import type { ClusterTransferPatchRequest } from '../models/ClusterTransferPatchRequest';
import type { ClusterTransferRequest } from '../models/ClusterTransferRequest';
import type { ConsumedQuotaList } from '../models/ConsumedQuotaList';
import type { DefaultCapability } from '../models/DefaultCapability';
import type { DefaultCapabilityList } from '../models/DefaultCapabilityList';
import type { DeletedSubscription } from '../models/DeletedSubscription';
import type { DeletedSubscriptionList } from '../models/DeletedSubscriptionList';
import type { Error } from '../models/Error';
import type { ErrorList } from '../models/ErrorList';
import type { ExportControlReview } from '../models/ExportControlReview';
import type { ExportControlReviewRequest } from '../models/ExportControlReviewRequest';
import type { FeatureReview } from '../models/FeatureReview';
import type { FeatureReviewResponse } from '../models/FeatureReviewResponse';
import type { FeatureToggle } from '../models/FeatureToggle';
import type { FeatureToggleQueryRequest } from '../models/FeatureToggleQueryRequest';
import type { Label } from '../models/Label';
import type { LabelList } from '../models/LabelList';
import type { MetricsList } from '../models/MetricsList';
import type { NotificationContactCreateRequest } from '../models/NotificationContactCreateRequest';
import type { NotifyDetailsRequest } from '../models/NotifyDetailsRequest';
import type { NotifyDetailsResponseList } from '../models/NotifyDetailsResponseList';
import type { Organization } from '../models/Organization';
import type { OrganizationList } from '../models/OrganizationList';
import type { OrganizationPatchRequest } from '../models/OrganizationPatchRequest';
import type { Plan } from '../models/Plan';
import type { PlanList } from '../models/PlanList';
import type { PullSecretRequest } from '../models/PullSecretRequest';
import type { PullSecretRotation } from '../models/PullSecretRotation';
import type { PullSecretRotationList } from '../models/PullSecretRotationList';
import type { PullSecretRotationRequest } from '../models/PullSecretRotationRequest';
import type { Quota } from '../models/Quota';
import type { QuotaAuthorizationRequest } from '../models/QuotaAuthorizationRequest';
import type { QuotaAuthorizationResponse } from '../models/QuotaAuthorizationResponse';
import type { QuotaCostList } from '../models/QuotaCostList';
import type { QuotaList } from '../models/QuotaList';
import type { QuotaRulesList } from '../models/QuotaRulesList';
import type { Registry } from '../models/Registry';
import type { RegistryCredential } from '../models/RegistryCredential';
import type { RegistryCredentialList } from '../models/RegistryCredentialList';
import type { RegistryCredentialPatchRequest } from '../models/RegistryCredentialPatchRequest';
import type { RegistryList } from '../models/RegistryList';
import type { ReservedResource } from '../models/ReservedResource';
import type { ReservedResourceList } from '../models/ReservedResourceList';
import type { ReservedResourcePatchRequest } from '../models/ReservedResourcePatchRequest';
import type { ResourceQuota } from '../models/ResourceQuota';
import type { ResourceQuotaList } from '../models/ResourceQuotaList';
import type { ResourceQuotaRequest } from '../models/ResourceQuotaRequest';
import type { ResourceReview } from '../models/ResourceReview';
import type { ResourceReviewRequest } from '../models/ResourceReviewRequest';
import type { Role } from '../models/Role';
import type { RoleBinding } from '../models/RoleBinding';
import type { RoleBindingCreateRequest } from '../models/RoleBindingCreateRequest';
import type { RoleBindingList } from '../models/RoleBindingList';
import type { RoleBindingRequest } from '../models/RoleBindingRequest';
import type { RoleList } from '../models/RoleList';
import type { SelfAccessReview } from '../models/SelfAccessReview';
import type { SelfEntitlementStatus } from '../models/SelfEntitlementStatus';
import type { SelfFeatureReview } from '../models/SelfFeatureReview';
import type { SelfResourceReview } from '../models/SelfResourceReview';
import type { SelfResourceReviewRequest } from '../models/SelfResourceReviewRequest';
import type { SelfServiceLandingPageSchema } from '../models/SelfServiceLandingPageSchema';
import type { SelfTermsReview } from '../models/SelfTermsReview';
import type { SKU } from '../models/SKU';
import type { SkuList } from '../models/SkuList';
import type { SkuRules } from '../models/SkuRules';
import type { SkuRulesList } from '../models/SkuRulesList';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import type { SubscriptionList } from '../models/SubscriptionList';
import type { SubscriptionMetricList } from '../models/SubscriptionMetricList';
import type { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import type { SubscriptionRoleBinding } from '../models/SubscriptionRoleBinding';
import type { SubscriptionRoleBindingCreateRequest } from '../models/SubscriptionRoleBindingCreateRequest';
import type { SubscriptionRoleBindingList } from '../models/SubscriptionRoleBindingList';
import type { Summary } from '../models/Summary';
import type { SupportCasesCreatedResponse } from '../models/SupportCasesCreatedResponse';
import type { SupportCasesRequest } from '../models/SupportCasesRequest';
import type { TermsReview } from '../models/TermsReview';
import type { TermsReviewResponse } from '../models/TermsReviewResponse';
import type { TokenAuthorizationRequest } from '../models/TokenAuthorizationRequest';
import type { TokenAuthorizationResponse } from '../models/TokenAuthorizationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Return access token generated from registries in docker format
   * @returns AccessTokenCfg access token from registries in docker format
   * @throws ApiError
   */
  public postApiAccountsMgmtV1AccessToken(): CancelablePromise<AccessTokenCfg> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/access_token',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `Cannot find registry`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of accounts
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @param fields Supplies a comma-separated list of fields to be returned.
   * Fields of sub-structures and of arrays use <structure>.<field> notation.
   * <stucture>.* means all field of a structure
   * Example: For each Subscription to get id, href, plan(id and kind) and labels (all fields)
   *
   * ```
   * ocm get subscriptions --parameter fields=id,href,plan.id,plan.kind,labels.* --parameter fetchLabels=true
   * ```
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @returns AccountList A JSON array of account objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Accounts(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
    fields?: string,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
  ): CancelablePromise<AccountList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
        'fields': fields,
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new account
   * @param requestBody Account data
   * @param dryRun If true, instructs API to avoid making any changes, but rather run through validations only.
   * @returns Account Account can be created without dryRun parameter
   * @throws ApiError
   */
  public postApiAccountsMgmtV1Accounts(
    requestBody: Account,
    dryRun?: boolean,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/accounts',
      query: {
        'dryRun': dryRun,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Account already exists`,
        500: `An unexpected error occurred creating the account`,
      },
    });
  }
  /**
   * Delete an account by id
   * @param id The id of record
   * @param deleteAssociatedResources If true, deletes the associated resources (e.g. role bindings) for an account along with the account itself
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1Accounts(
    id: string,
    deleteAssociatedResources?: boolean,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/accounts/{id}',
      path: {
        'id': id,
      },
      query: {
        'deleteAssociatedResources': deleteAssociatedResources,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No account with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get an account by id
   * @param id The id of record
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @param fetchRhit If true, includes the RHIT account_id in the output. Could slow request response time.
   * @returns Account Account found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Accounts1(
    id: string,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
    fetchRhit?: boolean,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts/{id}',
      path: {
        'id': id,
      },
      query: {
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
        'fetchRhit': fetchRhit,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No account with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update an account
   * @param id The id of record
   * @param requestBody Updated account data
   * @returns Account Account updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1Accounts(
    id: string,
    requestBody: AccountPatchRequest,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/accounts/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No account with specified id exists`,
        409: `Account already exists`,
        500: `Unexpected error updating account`,
      },
    });
  }
  /**
   * Returns a list of labels
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns LabelList A JSON array of label
   * @throws ApiError
   */
  public getApiAccountsMgmtV1AccountsLabels(
    id: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<LabelList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts/{id}/labels',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1AccountsLabels(
    id: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/accounts/{id}/labels',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `An unexpected error occurred creating the label`,
      },
    });
  }
  /**
   * Delete a label
   * @param id The id of record
   * @param key The key of the label
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1AccountsLabels(
    id: string,
    key: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/accounts/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified account id exists`,
        500: `An unexpected error occurred deleting the label`,
      },
    });
  }
  /**
   * Get account labels by label key
   * @param id The id of record
   * @param key The key of the label
   * @returns Label Labels found by key
   * @throws ApiError
   */
  public getApiAccountsMgmtV1AccountsLabels1(
    id: string,
    key: string,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified account id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param key The key of the label
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1AccountsLabels(
    id: string,
    key: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/accounts/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Label already exists and cannot be updated`,
        500: `Unexpected error updating account label`,
      },
    });
  }
  /**
   * List of pull secrets rotation
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns PullSecretRotationList existing pull secret rotation list
   * @throws ApiError
   */
  public getApiAccountsMgmtV1AccountsPullSecretRotation(
    id: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<PullSecretRotationList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts/{id}/pull_secret_rotation',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Initiate pull secret rotation for this account id
   * @param id The id of record
   * @param requestBody The contents of the pull secret rotation creation request
   * @returns PullSecretRotation the pull secret rotation request has been created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1AccountsPullSecretRotation(
    id: string,
    requestBody?: PullSecretRotationRequest,
  ): CancelablePromise<PullSecretRotation> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/accounts/{id}/pull_secret_rotation',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Delete a single Pull Secret Rotation record
   * @param id The id of record
   * @param rotationId The id of the pull secret rotation
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1AccountsPullSecretRotation(
    id: string,
    rotationId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/accounts/{id}/pull_secret_rotation/{rotationId}',
      path: {
        'id': id,
        'rotationId': rotationId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No Pull Secret Rotation record with specified id on specified account id exists`,
        500: `An unexpected error occurred deleting the pull secret rotation record`,
      },
    });
  }
  /**
   * Get a pull secret rotation by id for a specific account
   * @param id The id of record
   * @param rotationId The id of the pull secret rotation
   * @returns PullSecretRotation Pull secret rotation found by id for this account id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1AccountsPullSecretRotation1(
    id: string,
    rotationId: string,
  ): CancelablePromise<PullSecretRotation> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/accounts/{id}/pull_secret_rotation/{rotationId}',
      path: {
        'id': id,
        'rotationId': rotationId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No pull secret rotation record with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of available billing models
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @returns BillingModelList A JSON array of billing model objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1BillingModels(
    page: number = 1,
    size: number = 100,
  ): CancelablePromise<BillingModelList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/billing_models',
      query: {
        'page': page,
        'size': size,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get a billing model
   * @param id The id of record
   * @returns BillingModel Billing model found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1BillingModels1(
    id: string,
  ): CancelablePromise<BillingModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/billing_models/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No billing model with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of available capabilities
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns CapabilityList A JSON array of capability objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Capabilities(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<CapabilityList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/capabilities',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Fetch certificates of a particular type
   * @param requestBody # The payload depends on the type of the requested certificate
   * The examples for supported types:
   * * {"type": "sca", "arch": "x86_64"}
   *
   * @returns Certificate The certificate associated with the organization
   * @throws ApiError
   */
  public postApiAccountsMgmtV1Certificates(
    requestBody: CertificatesRequest,
  ): CancelablePromise<Certificate> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/certificates',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `The certificate is not avaialbe for the organization`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of cloud resources
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns CloudResourceList A JSON array of cloud resource objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1CloudResources(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<CloudResourceList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/cloud_resources',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new cloud resource
   * @param requestBody Cloud resource data
   * @returns CloudResource Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1CloudResources(
    requestBody: CloudResource,
  ): CancelablePromise<CloudResource> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/cloud_resources',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Resource already exists`,
        500: `An unexpected error occurred creating resource`,
      },
    });
  }
  /**
   * Delete a cloud resource
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1CloudResources(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/cloud_resources/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No resource with specified id exists`,
        500: `An unexpected error occurred deleting the resource`,
      },
    });
  }
  /**
   * Get a cloud resource
   * @param id The id of record
   * @returns CloudResource Cloud resource found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1CloudResources1(
    id: string,
  ): CancelablePromise<CloudResource> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/cloud_resources/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No cloud resource with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a cloud resource
   * @param id The id of record
   * @param requestBody Updated cloud resource data
   * @returns CloudResource Cloud resource updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1CloudResources(
    id: string,
    requestBody: CloudResource,
  ): CancelablePromise<CloudResource> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/cloud_resources/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No resource with specified id exists`,
        500: `Unexpected error updating resource`,
      },
    });
  }
  /**
   * Authorizes new cluster creation against an exsiting RH Subscription.
   * @param requestBody Cluster and authorization data
   * @returns ClusterAuthorizationResponse The authorization is successful, the requested cluster has a valid subscription and is within resource limits.
   * @throws ApiError
   */
  public postApiAccountsMgmtV1ClusterAuthorizations(
    requestBody: ClusterAuthorizationRequest,
  ): CancelablePromise<ClusterAuthorizationResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/cluster_authorizations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `AMS subscription exists but is associated with another account`,
        429: `The limits for this subscription are exceeded.`,
        500: `Other cluster authorization error`,
      },
    });
  }
  /**
   * Finds or creates a cluster registration with a registy credential token and cluster ID
   * @param requestBody Cluster and authorization data
   * @returns ClusterRegistrationResponse A cluster with the specified cluster_id exists and belongs to the user with the specified registry credential token
   * @throws ApiError
   */
  public postApiAccountsMgmtV1ClusterRegistrations(
    requestBody: ClusterRegistrationRequest,
  ): CancelablePromise<ClusterRegistrationResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/cluster_registrations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Registry credential token is invalid`,
        409: `Cluster with specified cluster_id already associated with another user`,
        422: `cluster_id provided is invalid`,
        429: `Too many clusters have been associated with this user recently`,
        500: `Other cluster registration error`,
      },
    });
  }
  /**
   * List cluster transfers - returns either an empty result set or a valid ClusterTransfer instance that is within a valid transfer window.
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns ClusterTransferList cluster transfer detected
   * @throws ApiError
   */
  public getApiAccountsMgmtV1ClusterTransfers(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<ClusterTransferList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/cluster_transfers',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Initiate cluster transfer.
   * @param requestBody The contents of the cluster transfer creation request
   * @returns ClusterTransfer the cluster transfer has been created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1ClusterTransfers(
    requestBody: ClusterTransferRequest,
  ): CancelablePromise<ClusterTransfer> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/cluster_transfers',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update specific cluster transfer
   * @param id The id of record
   * @param requestBody Updated cluster transfer
   * @returns ClusterTransfer Cluster transfer updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1ClusterTransfers(
    id: string,
    requestBody: ClusterTransferPatchRequest,
  ): CancelablePromise<ClusterTransfer> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/cluster_transfers/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Conflict during cluster transfer update`,
        500: `Unexpected error updating cluster transfer`,
      },
    });
  }
  /**
   * Returns a list of skus
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns SkuList A JSON array of sku objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1ConfigSkus(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<SkuList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/config/skus',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new sku
   * @param requestBody Sku data
   * @returns SKU Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1ConfigSkus(
    requestBody: SKU,
  ): CancelablePromise<SKU> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/config/skus',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Sku already exists`,
        500: `An unexpected error occurred creating sku`,
      },
    });
  }
  /**
   * Delete a sku
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1ConfigSkus(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/config/skus/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku with specified id exists`,
        500: `An unexpected error occurred deleting the sku`,
      },
    });
  }
  /**
   * Get a sku
   * @param id The id of record
   * @returns SKU Sku found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1ConfigSkus1(
    id: string,
  ): CancelablePromise<SKU> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/config/skus/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No SKU with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a Sku
   * @param id The id of record
   * @param requestBody Updated sku data
   * @returns SKU Sku updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1ConfigSkus(
    id: string,
    requestBody: SKU,
  ): CancelablePromise<SKU> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/config/skus/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku with specified id exists`,
        500: `Unexpected error updating sku`,
      },
    });
  }
  /**
   * Get the authenticated account
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @returns Account Account found via JWT
   * @throws ApiError
   */
  public getApiAccountsMgmtV1CurrentAccount(
    fetchLabels?: boolean,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/current_account',
      query: {
        'fetchLabels': fetchLabels,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of default capabilities
   * @returns DefaultCapabilityList A JSON array of default capabilities
   * @throws ApiError
   */
  public getApiAccountsMgmtV1DefaultCapabilities(): CancelablePromise<DefaultCapabilityList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/default_capabilities',
      errors: {
        401: `Auth token is invalid`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new default capability or update an existing one
   * @param requestBody Label data
   * @returns DefaultCapability Created or updated default capability successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1DefaultCapabilities(
    requestBody: DefaultCapability,
  ): CancelablePromise<DefaultCapability> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/default_capabilities',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `An unexpected error occurred creating the default capability`,
      },
    });
  }
  /**
   * Delete a default capability
   * @param name The name of the default capability
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1DefaultCapabilities(
    name: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/default_capabilities/{name}',
      path: {
        'name': name,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No default capability with specified name exists`,
        500: `An unexpected error occurred deleting the default capability`,
      },
    });
  }
  /**
   * Get default capability by label name
   * @param name The name of the default capability
   * @returns DefaultCapability Default capability found by name
   * @throws ApiError
   */
  public getApiAccountsMgmtV1DefaultCapabilities1(
    name: string,
  ): CancelablePromise<DefaultCapability> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/default_capabilities/{name}',
      path: {
        'name': name,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No default capability with specified name exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new default capability or update an existing one
   * @param name The name of the default capability
   * @param requestBody Default capability data
   * @returns DefaultCapability Created or updated default capability successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1DefaultCapabilities(
    name: string,
    requestBody: DefaultCapability,
  ): CancelablePromise<DefaultCapability> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/default_capabilities/{name}',
      path: {
        'name': name,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error updating default capability`,
      },
    });
  }
  /**
   * Returns a list of deleted subscriptions
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns DeletedSubscriptionList A JSON array of deleted subscription objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1DeletedSubscriptions(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<DeletedSubscriptionList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/deleted_subscriptions',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Fetches a deleted subscription by id
   * @param id The id of record
   * @returns DeletedSubscription A JSON object of a single deleted subscription
   * @throws ApiError
   */
  public getApiAccountsMgmtV1DeletedSubscriptions1(
    id: string,
  ): CancelablePromise<DeletedSubscription> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/deleted_subscriptions/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `Resource does not exist`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of errors
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns ErrorList A JSON array or errors
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Errors(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<ErrorList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/errors',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get an error by id
   * @param id The id of record
   * @returns Error Error found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Errors1(
    id: string,
  ): CancelablePromise<Error> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/errors/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No error with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * @deprecated
   * Query a feature toggle by id
   * @param id The id of record
   * @param requestBody The context of the query
   * @returns FeatureToggle Feature toggle found by id
   * @throws ApiError
   */
  public postApiAccountsMgmtV1FeatureTogglesQuery(
    id: string,
    requestBody: FeatureToggleQueryRequest,
  ): CancelablePromise<FeatureToggle> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/feature_toggles/{id}/query',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of labels
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns LabelList A JSON array of label objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Labels(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<LabelList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/labels',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get a console.redhat.com landing page content JSON schema
   * @returns SelfServiceLandingPageSchema self service schema created
   * @throws ApiError
   */
  public getApiAccountsMgmtV1LandingPageSelfService(): CancelablePromise<SelfServiceLandingPageSchema> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/landing_page/self_service',
      errors: {
        401: `Auth token is invalid`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of metrics
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns MetricsList A JSON array of metrics objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Metrics(
    search?: string,
  ): CancelablePromise<MetricsList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/metrics',
      query: {
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get and validate notification details
   * @param requestBody The notification parameters such as bcc_address,cluster_id etc
   * @returns NotifyDetailsResponseList A JSON array of Notification details with a key-value pair
   * @throws ApiError
   */
  public postApiAccountsMgmtV1NotifyDetails(
    requestBody: NotifyDetailsRequest,
  ): CancelablePromise<NotifyDetailsResponseList> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/notify_details',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No such notification details can be returned`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of organizations
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @param fields Supplies a comma-separated list of fields to be returned.
   * Fields of sub-structures and of arrays use <structure>.<field> notation.
   * <stucture>.* means all field of a structure
   * Example: For each Subscription to get id, href, plan(id and kind) and labels (all fields)
   *
   * ```
   * ocm get subscriptions --parameter fields=id,href,plan.id,plan.kind,labels.* --parameter fetchLabels=true
   * ```
   * @returns OrganizationList A JSON array of organization objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Organizations(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
    fields?: string,
  ): CancelablePromise<OrganizationList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
        'fields': fields,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new organization
   * @param requestBody Organization data
   * @returns Organization Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1Organizations(
    requestBody: Organization,
  ): CancelablePromise<Organization> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/organizations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Organization already exists`,
        500: `An unexpected error occurred creating the organization`,
      },
    });
  }
  /**
   * Get an organization by id
   * @param id The id of record
   * @param id The id of record
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @returns Organization Organization found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Organizations1(
    id: string,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
  ): CancelablePromise<Organization> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{id}',
      path: {
        'id': id,
      },
      query: {
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update an organization
   * @param id The id of record
   * @param requestBody Updated organization data
   * @returns Organization Organization updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1Organizations(
    id: string,
    requestBody: OrganizationPatchRequest,
  ): CancelablePromise<Organization> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/organizations/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `Unexpected error updating organization`,
      },
    });
  }
  /**
   * Returns a list of labels
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns LabelList A JSON array of label
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsLabels(
    id: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<LabelList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{id}/labels',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1OrganizationsLabels(
    id: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/organizations/{id}/labels',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `An unexpected error occurred creating the label`,
      },
    });
  }
  /**
   * Delete a label
   * @param id The id of record
   * @param key The key of the label
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1OrganizationsLabels(
    id: string,
    key: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/organizations/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified organizations id exists`,
        500: `An unexpected error occurred deleting the label`,
      },
    });
  }
  /**
   * Get organization labels by label key
   * @param id The id of record
   * @param key The key of the label
   * @returns Label Labels found by key
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsLabels1(
    id: string,
    key: string,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified organizations id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param key The key of the label
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1OrganizationsLabels(
    id: string,
    key: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/organizations/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Label already exists and cannot be updated`,
        500: `Unexpected error updating organizations label`,
      },
    });
  }
  /**
   * Returns a summary of organizations clusters based on metrics
   * @param id The id of record
   * @returns Summary A JSON array of metrics objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsSummaryDashboard(
    id: string,
  ): CancelablePromise<Summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{id}/summary_dashboard',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of account group assignments for the given org
   * @param orgId The id of organization
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns AccountGroupAssignmentList A JSON array of account groups
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsAccountGroupAssignments(
    orgId: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<AccountGroupAssignmentList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_group_assignments',
      path: {
        'orgId': orgId,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new AccountGroupAssignment
   * @param orgId The id of organization
   * @param requestBody New AccountGroup data
   * @returns AccountGroupAssignment Created AccountGroupAssignment successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1OrganizationsAccountGroupAssignments(
    orgId: string,
    requestBody: AccountGroupAssignment,
  ): CancelablePromise<AccountGroupAssignment> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_group_assignments',
      path: {
        'orgId': orgId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `An unexpected error occurred creating the label`,
      },
    });
  }
  /**
   * Delete an account group assignment
   * @param orgId The id of organization
   * @param acctGrpAsgnId The id of account group assignment
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1OrganizationsAccountGroupAssignments(
    orgId: string,
    acctGrpAsgnId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_group_assignments/{acctGrpAsgnId}',
      path: {
        'orgId': orgId,
        'acctGrpAsgnId': acctGrpAsgnId,
      },
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization or account group assignment with specified id exists`,
        500: `An unexpected error occurred deleting the account group assignment`,
      },
    });
  }
  /**
   * Get account group assignment by id
   * @param orgId The id of organization
   * @param acctGrpAsgnId The id of account group assignment
   * @returns AccountGroupAssignment Account group assignment found
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsAccountGroupAssignments1(
    orgId: string,
    acctGrpAsgnId: string,
  ): CancelablePromise<AccountGroupAssignment> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_group_assignments/{acctGrpAsgnId}',
      path: {
        'orgId': orgId,
        'acctGrpAsgnId': acctGrpAsgnId,
      },
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of account groups for the given org
   * @param orgId The id of organization
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns AccountGroupList A JSON array of account groups
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsAccountGroups(
    orgId: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<AccountGroupList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_groups',
      path: {
        'orgId': orgId,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new AccountGroup
   * @param orgId The id of organization
   * @param requestBody New AccountGroup data
   * @returns AccountGroup Created AccountGroup successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1OrganizationsAccountGroups(
    orgId: string,
    requestBody: AccountGroupRequest,
  ): CancelablePromise<AccountGroup> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_groups',
      path: {
        'orgId': orgId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `An unexpected error occurred creating the label`,
      },
    });
  }
  /**
   * Delete an account group
   * @param orgId The id of organization
   * @param acctGrpId The id of account group
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1OrganizationsAccountGroups(
    orgId: string,
    acctGrpId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_groups/{acctGrpId}',
      path: {
        'orgId': orgId,
        'acctGrpId': acctGrpId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization or account group with specified id exists`,
        500: `An unexpected error occurred deleting the account group`,
      },
    });
  }
  /**
   * Get account group by id
   * @param orgId The id of organization
   * @param acctGrpId The id of account group
   * @returns AccountGroup Account group found
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsAccountGroups1(
    orgId: string,
    acctGrpId: string,
  ): CancelablePromise<AccountGroup> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_groups/{acctGrpId}',
      path: {
        'orgId': orgId,
        'acctGrpId': acctGrpId,
      },
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization or account group with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update an account group
   * @param orgId The id of organization
   * @param acctGrpId The id of account group
   * @param requestBody Updated account group data
   * @returns AccountGroup Account group updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1OrganizationsAccountGroups(
    orgId: string,
    acctGrpId: string,
    requestBody: AccountGroupRequest,
  ): CancelablePromise<AccountGroup> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/account_groups/{acctGrpId}',
      path: {
        'orgId': orgId,
        'acctGrpId': acctGrpId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No account group with specified id exists`,
        500: `Unexpected error updating account group`,
      },
    });
  }
  /**
   * Returns a list of consumed quota for an organization
   * @param orgId The id of organization
   * @param forceRecalc If true, includes that ConsumedQuota should be recalculated.
   * @returns ConsumedQuotaList A JSON array of ConsumedQuota objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsConsumedQuota(
    orgId: string,
    forceRecalc?: boolean,
  ): CancelablePromise<ConsumedQuotaList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/consumed_quota',
      path: {
        'orgId': orgId,
      },
      query: {
        'forceRecalc': forceRecalc,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Returns a summary of quota cost
   * @param orgId The id of organization
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param fetchRelatedResources If true, includes the related resources in the output. Could slow request response time.
   * @param forceRecalc If true, includes that ConsumedQuota should be recalculated.
   * @param fetchCloudAccounts If true, includes the marketplace cloud accounts in the output. Could slow request response time.
   * @returns QuotaCostList A JSON array of QuotaCost objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsQuotaCost(
    orgId: string,
    search?: string,
    page: number = 1,
    size: number = 100,
    fetchRelatedResources?: boolean,
    forceRecalc?: boolean,
    fetchCloudAccounts?: boolean,
  ): CancelablePromise<QuotaCostList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/quota_cost',
      path: {
        'orgId': orgId,
      },
      query: {
        'search': search,
        'page': page,
        'size': size,
        'fetchRelatedResources': fetchRelatedResources,
        'forceRecalc': forceRecalc,
        'fetchCloudAccounts': fetchCloudAccounts,
      },
      errors: {
        404: `No organization with specified id exists`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Returns a list of resource quota objects
   * @param orgId The id of organization
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns ResourceQuotaList A JSON array of ResourceQuota objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsResourceQuota(
    orgId: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<ResourceQuotaList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/resource_quota',
      path: {
        'orgId': orgId,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No organization with specified id exists`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Create a new resource quota
   * @param orgId The id of organization
   * @param requestBody Resource quota data
   * @returns ResourceQuota Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1OrganizationsResourceQuota(
    orgId: string,
    requestBody: ResourceQuotaRequest,
  ): CancelablePromise<ResourceQuota> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/resource_quota',
      path: {
        'orgId': orgId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `ResourceQuota already exists`,
        500: `An unexpected error occurred creating the resource quota`,
      },
    });
  }
  /**
   * Delete a resource quota
   * @param orgId The id of organization
   * @param quotaId The id of quota
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1OrganizationsResourceQuota(
    orgId: string,
    quotaId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/resource_quota/{quotaId}',
      path: {
        'orgId': orgId,
        'quotaId': quotaId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No Resource Quota with specified id exists`,
        500: `An unexpected error occurred deleting the Resource Quota`,
      },
    });
  }
  /**
   * Get a resource quota by id
   * @param orgId The id of organization
   * @param quotaId The id of quota
   * @returns ResourceQuota Resource quota found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1OrganizationsResourceQuota1(
    orgId: string,
    quotaId: string,
  ): CancelablePromise<ResourceQuota> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/resource_quota/{quotaId}',
      path: {
        'orgId': orgId,
        'quotaId': quotaId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No resource quota with specified id exists`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Update a resource quota
   * @param orgId The id of organization
   * @param quotaId The id of quota
   * @param requestBody Updated resource quota data
   * @returns ResourceQuota Resource Quota updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1OrganizationsResourceQuota(
    orgId: string,
    quotaId: string,
    requestBody: ResourceQuotaRequest,
  ): CancelablePromise<ResourceQuota> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/organizations/{orgId}/resource_quota/{quotaId}',
      path: {
        'orgId': orgId,
        'quotaId': quotaId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No resource quota with specified id exists`,
        500: `Unexpected error updating resource quota`,
      },
    });
  }
  /**
   * Get all plans
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns PlanList Plans list
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Plans(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<PlanList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/plans',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get a plan by id
   * @param id The id of record
   * @returns Plan Plan found
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Plans1(
    id: string,
  ): CancelablePromise<Plan> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/plans/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No plan with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Return access token generated from registries in docker format
   * @param requestBody Identifier of the resource in the external service that this pull secret relates to
   * @returns AccessTokenCfg access token from registries in docker format
   * @throws ApiError
   */
  public postApiAccountsMgmtV1PullSecrets(
    requestBody: PullSecretRequest,
  ): CancelablePromise<AccessTokenCfg> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/pull_secrets',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `Cannot find registry`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Delete a pull secret
   * @param externalResourceId The external resource id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1PullSecrets(
    externalResourceId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/pull_secrets/{externalResourceId}',
      path: {
        'externalResourceId': externalResourceId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to delete pull secret`,
        404: `No Pull secret with specified id exists`,
        500: `An unexpected error occurred deleting the pull secret`,
      },
    });
  }
  /**
   * Authorizes a user to consume or release a single quantity of quota
   * @param requestBody User data and intention
   * @returns QuotaAuthorizationResponse The authorization action was successful
   * @throws ApiError
   */
  public postApiAccountsMgmtV1QuotaAuthorizations(
    requestBody: QuotaAuthorizationRequest,
  ): CancelablePromise<QuotaAuthorizationResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/quota_authorizations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `AMS subscription exists but is associated with another account`,
        429: `The limits for this subscription are exceeded.`,
        500: `Other cluster authorization error`,
      },
    });
  }
  /**
   * Returns a summary of quota cost for the authenticated user
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param fetchRelatedResources If true, includes the related resources in the output. Could slow request response time.
   * @param fetchCloudAccounts If true, includes the marketplace cloud accounts in the output. Could slow request response time.
   * @returns QuotaCostList A JSON array of QuotaCost objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1QuotaCost(
    search?: string,
    page: number = 1,
    size: number = 100,
    fetchRelatedResources?: boolean,
    fetchCloudAccounts?: boolean,
  ): CancelablePromise<QuotaCostList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/quota_cost',
      query: {
        'search': search,
        'page': page,
        'size': size,
        'fetchRelatedResources': fetchRelatedResources,
        'fetchCloudAccounts': fetchCloudAccounts,
      },
      errors: {
        400: `Validation errors occurred`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Returns a list of UHC product Quota Rules
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns QuotaRulesList A JSON array of quota rules objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1QuotaRules(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<QuotaRulesList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/quota_rules',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of quotas
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns QuotaList A JSON array of quota objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Quotas(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<QuotaList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/quotas',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new quota
   * @param requestBody Quota data
   * @returns Quota Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1Quotas(
    requestBody: Quota,
  ): CancelablePromise<Quota> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/quotas',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Quota already exists`,
        500: `An unexpected error occurred creating quota`,
      },
    });
  }
  /**
   * Delete a quota
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1Quotas(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/quotas/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No quota with specified id exists`,
        500: `An unexpected error occurred deleting the quota`,
      },
    });
  }
  /**
   * Get a quota
   * @param id The id of record
   * @returns Quota Quota found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Quotas1(
    id: string,
  ): CancelablePromise<Quota> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/quotas/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No quota with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a quota
   * @param id The id of record
   * @param requestBody Updated quota data
   * @returns Quota Quota updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1Quotas(
    id: string,
    requestBody: Quota,
  ): CancelablePromise<Quota> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/quotas/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No quota with specified id exists`,
        500: `Unexpected error updating quota`,
      },
    });
  }
  /**
   * Returns a list of registries
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns RegistryList A JSON array of registry objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Registries(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<RegistryList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/registries',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get an registry by id
   * @param id The id of record
   * @returns Registry Registry found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Registries1(
    id: string,
  ): CancelablePromise<Registry> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/registries/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No registry with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * List Registry Credentials
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns RegistryCredentialList A JSON array of RegistryCredential objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1RegistryCredentials(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<RegistryCredentialList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/registry_credentials',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Not allowed to list RegistryCredentials`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Request the creation of a registry credential
   * @param requestBody Registry credential data
   * @returns RegistryCredential Registry credential created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1RegistryCredentials(
    requestBody: RegistryCredential,
  ): CancelablePromise<RegistryCredential> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/registry_credentials',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Not allowed to create RegistryCredentials`,
        409: `A RegistryCredential with this type already exists for this user`,
        500: `Unable to create Registry Credential`,
      },
    });
  }
  /**
   * Delete a registry credential by id
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1RegistryCredentials(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/registry_credentials/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No registry credential with specified id exists`,
        500: `An unexpected error occurred deleting the registry credential`,
      },
    });
  }
  /**
   * Get a registry credentials by id
   * @param id The id of record
   * @returns RegistryCredential Registry credential found
   * @throws ApiError
   */
  public getApiAccountsMgmtV1RegistryCredentials1(
    id: string,
  ): CancelablePromise<RegistryCredential> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/registry_credentials/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No registry credential with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a registry credential
   * @param id The id of record
   * @param requestBody Updated registry credential data
   * @returns RegistryCredential Registry credential updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1RegistryCredentials(
    id: string,
    requestBody: RegistryCredentialPatchRequest,
  ): CancelablePromise<RegistryCredential> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/registry_credentials/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Not allowed to update registry credential or the specified field(s)`,
        404: `No registry credential with specified id exists`,
        500: `Unexpected error updating registry credential`,
      },
    });
  }
  /**
   * Returns a list of reserved resources
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns ReservedResourceList A JSON array of reserved resource objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1ReservedResources(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<ReservedResourceList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/reserved_resources',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of resource quota objects
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns ResourceQuotaList A JSON array of ResourceQuota objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1ResourceQuota(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<ResourceQuotaList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/resource_quota',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `An unexpected error occurred when getting this resource`,
      },
    });
  }
  /**
   * Returns a list of role bindings
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns RoleBindingList A JSON array of role binding objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1RoleBindings(
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<RoleBindingList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/role_bindings',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new role binding
   * @param requestBody Role binding data
   * @returns RoleBinding Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1RoleBindings(
    requestBody: RoleBindingCreateRequest,
  ): CancelablePromise<RoleBinding> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/role_bindings',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Role binding already exists`,
        500: `An unexpected error occurred creating role binding`,
      },
    });
  }
  /**
   * Delete a role binding
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1RoleBindings(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/role_bindings/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No role binding with specified id exists`,
        500: `An unexpected error occurred deleting the role binding`,
      },
    });
  }
  /**
   * Get a role binding
   * @param id The id of record
   * @returns RoleBinding Role binding found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1RoleBindings1(
    id: string,
  ): CancelablePromise<RoleBinding> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/role_bindings/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No role binding with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a role binding
   * @param id The id of record
   * @param requestBody Updated role binding data
   * @returns RoleBinding Role Binding updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1RoleBindings(
    id: string,
    requestBody: RoleBindingRequest,
  ): CancelablePromise<RoleBinding> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/role_bindings/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No role binding with specified id exists`,
        500: `Unexpected error updating role binding`,
      },
    });
  }
  /**
   * Returns a list of roles
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns RoleList A JSON array of role objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Roles(
    page: number = 1,
    size: number = 100,
    search?: string,
  ): CancelablePromise<RoleList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/roles',
      query: {
        'page': page,
        'size': size,
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get a role by id
   * @param id The id of record
   * @returns Role Role found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Roles1(
    id: string,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/roles/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No role with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create or renew the entitlement to support a product for the user's organization.
   * @param product The product for self_entitlement. The supported products are [rosa].
   * @returns SelfEntitlementStatus the requested entitlement already exists
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SelfEntitlement(
    product: string,
  ): CancelablePromise<SelfEntitlementStatus> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/self_entitlement/{product}',
      path: {
        'product': product,
      },
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `Cannot find account or organization`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of UHC product SKU Rules
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @returns SkuRulesList A JSON array of sku rules objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SkuRules(
    search?: string,
    page: number = 1,
    size: number = 100,
  ): CancelablePromise<SkuRulesList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/sku_rules',
      query: {
        'search': search,
        'page': page,
        'size': size,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new sku rule
   * @param requestBody Sku rule data
   * @returns SkuRules Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SkuRules(
    requestBody: SkuRules,
  ): CancelablePromise<SkuRules> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/sku_rules',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Sku rule already exists`,
        500: `An unexpected error occurred creating sku rule`,
      },
    });
  }
  /**
   * Delete a sku rule
   * @param id The id of record
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SkuRules(
    id: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/sku_rules/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku rule with specified id exists`,
        500: `An unexpected error occurred deleting the sku rule`,
      },
    });
  }
  /**
   * Get a sku rules by id
   * @param id The id of record
   * @returns SkuRules sku rules found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SkuRules1(
    id: string,
  ): CancelablePromise<SkuRules> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/sku_rules/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku rules with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a sku rule
   * @param id The id of record
   * @param requestBody Updated sku rule data
   * @returns SkuRules Sku rule updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1SkuRules(
    id: string,
    requestBody: SkuRules,
  ): CancelablePromise<SkuRules> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/sku_rules/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku rule with specified id exists`,
        500: `Unexpected error updating sku rule`,
      },
    });
  }
  /**
   * @deprecated
   * Returns a list of UHC product SKUs
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @returns SkuList A JSON array of sku objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Skus(
    search?: string,
  ): CancelablePromise<SkuList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/skus',
      query: {
        'search': search,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * @deprecated
   * Get a sku by id
   * @param id The id of record
   * @returns SKU sku found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Skus1(
    id: string,
  ): CancelablePromise<SKU> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/skus/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No sku with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of subscriptions
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param fetchAccounts If true, includes the account reference information in the output. Could slow request response time.
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @param fields Supplies a comma-separated list of fields to be returned.
   * Fields of sub-structures and of arrays use <structure>.<field> notation.
   * <stucture>.* means all field of a structure
   * Example: For each Subscription to get id, href, plan(id and kind) and labels (all fields)
   *
   * ```
   * ocm get subscriptions --parameter fields=id,href,plan.id,plan.kind,labels.* --parameter fetchLabels=true
   * ```
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @param labels Specifies the criteria to filter the subscription resource based on their labels.
   * A label is represented as a `key=value` pair,
   *
   * ```
   * labels = "foo=bar"
   * ```
   *
   * and multiple labels are separated by comma,
   *
   * ```
   * labels = "foo=bar,fooz=barz"
   * ```
   * @returns SubscriptionList A JSON array of subscription objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Subscriptions(
    page: number = 1,
    size: number = 100,
    search?: string,
    fetchAccounts?: boolean,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
    fields?: string,
    orderBy?: string,
    labels?: string,
  ): CancelablePromise<SubscriptionList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions',
      query: {
        'page': page,
        'size': size,
        'search': search,
        'fetchAccounts': fetchAccounts,
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
        'fields': fields,
        'orderBy': orderBy,
        'labels': labels,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new subscription
   * @param requestBody Subscription Creation data
   * @returns Subscription Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1Subscriptions(
    requestBody: SubscriptionCreateRequest,
  ): CancelablePromise<Subscription> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/subscriptions',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Subscription already exists`,
        500: `An unexpected error occurred creating subscription`,
      },
    });
  }
  /**
   * Deletes a subscription by id
   * @param id The id of record
   * @param id The id of record
   * @returns any Subscription deprovisioned by id
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1Subscriptions(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No subscription with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get a subscription by id
   * @param id The id of record
   * @param id The id of record
   * @param fetchAccounts If true, includes the account reference information in the output. Could slow request response time.
   * @param fetchLabels If true, includes the labels on a subscription/organization/account in the output. Could slow request response time.
   * @param fetchCapabilities If true, includes the capabilities on a subscription in the output. Could slow request response time.
   * @param fetchCpuAndSocket If true, fetches, from the clusters service, the total numbers of CPU's and sockets under an obligation, and includes in the output. Could slow request response time.
   * @returns Subscription Subscription found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1Subscriptions1(
    id: string,
    fetchAccounts?: boolean,
    fetchLabels?: boolean,
    fetchCapabilities?: boolean,
    fetchCpuAndSocket?: boolean,
  ): CancelablePromise<Subscription> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}',
      path: {
        'id': id,
      },
      query: {
        'fetchAccounts': fetchAccounts,
        'fetchLabels': fetchLabels,
        'fetchCapabilities': fetchCapabilities,
        'fetchCpuAndSocket': fetchCpuAndSocket,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No subscription with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a subscription
   * @param id The id of record
   * @param requestBody Updated subscription data
   * @returns Subscription Subscription updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1Subscriptions(
    id: string,
    requestBody: SubscriptionPatchRequest,
  ): CancelablePromise<Subscription> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Not allowed to update subscriptions or the specified field(s)`,
        404: `No subscription with specified id exists`,
        500: `Unexpected error updating subscription`,
      },
    });
  }
  /**
   * Returns a list of labels
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns LabelList A JSON array of label
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsLabels(
    id: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<LabelList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/labels',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SubscriptionsLabels(
    id: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/labels',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `An unexpected error occurred creating the label`,
      },
    });
  }
  /**
   * Delete a label
   * @param id The id of record
   * @param key The key of the label
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SubscriptionsLabels(
    id: string,
    key: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified subscription id exists`,
        500: `An unexpected error occurred deleting the label`,
      },
    });
  }
  /**
   * Get subscription labels by label key
   * @param id The id of record
   * @param key The key of the label
   * @returns Label Labels found by key
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsLabels1(
    id: string,
    key: string,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No label with specified key on specified subscription id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new label or update an existing label
   * @param id The id of record
   * @param key The key of the label
   * @param requestBody Label data
   * @returns Label Created or updated label successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1SubscriptionsLabels(
    id: string,
    key: string,
    requestBody: Label,
  ): CancelablePromise<Label> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/labels/{key}',
      path: {
        'id': id,
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Label already exists and cannot be updated`,
        500: `Unexpected error updating subscription label`,
      },
    });
  }
  /**
   * Get subscription's metrics by metric name
   * @param id The id of record
   * @param metricName The name of the metric
   * @param search The `search` paramter specifies the PromQL selector. The syntax is defined by Prometheus at
   * https://prometheus.io/docs/prometheus/latest/querying/basics/#time-series-selectors.
   * It only supports simple selections as shown in https://prometheus.io/docs/prometheus/latest/querying/examples/#simple-time-series-selection.
   * For example, in order to retrieve subscription_sync_total with names starting with `managed` and with a channel = `production`:
   *
   * ```
   * name=~'managed.*',channel='production'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then all the records will be returned.
   * @param fields Supplies a comma-separated list of fields to be returned.
   * Fields of sub-structures and of arrays use <structure>.<field> notation.
   * <stucture>.* means all field of a structure
   * Example: For each Subscription to get id, href, plan(id and kind) and labels (all fields)
   *
   * ```
   * ocm get subscriptions --parameter fields=id,href,plan.id,plan.kind,labels.* --parameter fetchLabels=true
   * ```
   * @returns SubscriptionMetricList Metrics' data
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsMetrics(
    id: string,
    metricName: string,
    search?: string,
    fields?: string,
  ): CancelablePromise<SubscriptionMetricList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/metrics/{metric_name}',
      path: {
        'id': id,
        'metric_name': metricName,
      },
      query: {
        'search': search,
        'fields': fields,
      },
      errors: {
        400: `Metric name is invalid`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of reserved resources
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns ReservedResourceList A JSON array of reserved resource objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsReservedResources(
    id: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
  ): CancelablePromise<ReservedResourceList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/reserved_resources',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of open support creates opened against the external cluster id of this subscrption
   * @param id The id of record
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @returns any A JSON array of support cases objects
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsSupportCases(
    id: string,
    page: number = 1,
    size: number = 100,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{id}/support_cases',
      path: {
        'id': id,
      },
      query: {
        'page': page,
        'size': size,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Returns a list of notification contacts for the given subscription
   * @param subId The id of subscription
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param fields Supplies a comma-separated list of fields to be returned.
   * Fields of sub-structures and of arrays use <structure>.<field> notation.
   * <stucture>.* means all field of a structure
   * Example: For each Subscription to get id, href, plan(id and kind) and labels (all fields)
   *
   * ```
   * ocm get subscriptions --parameter fields=id,href,plan.id,plan.kind,labels.* --parameter fetchLabels=true
   * ```
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @returns AccountList A JSON array of account objects that are notification contacts for this subscription
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsNotificationContacts(
    subId: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    fields?: string,
    orderBy?: string,
  ): CancelablePromise<AccountList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/notification_contacts',
      path: {
        'subId': subId,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'fields': fields,
        'orderBy': orderBy,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Add an account as a notification contact to this subscription
   * @param subId The id of subscription
   * @param requestBody Add a notification contact by an account's username
   * @returns Account Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SubscriptionsNotificationContacts(
    subId: string,
    requestBody: NotificationContactCreateRequest,
  ): CancelablePromise<Account> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/notification_contacts',
      path: {
        'subId': subId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Notification contact already exists`,
        500: `An unexpected error occurred creating notification contact`,
      },
    });
  }
  /**
   * Deletes a notification contact by subscription and account id
   * @param subId The id of subscription
   * @param accountId The id of account
   * @returns any Notification contact deleted by subscription and account id
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SubscriptionsNotificationContacts(
    subId: string,
    accountId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/notification_contacts/{accountId}',
      path: {
        'subId': subId,
        'accountId': accountId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No notification contact with specified subscription and account id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Delete reserved resources by id
   * @param subId The id of subscription
   * @param reservedResourceId The id of reserved resource
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SubscriptionsReservedResources(
    subId: string,
    reservedResourceId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/reserved_resources/{reservedResourceId}',
      path: {
        'subId': subId,
        'reservedResourceId': reservedResourceId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No reserved resources with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get reserved resources by id
   * @param subId The id of subscription
   * @param reservedResourceId The id of reserved resource
   * @returns ReservedResource Reserved resources found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsReservedResources1(
    subId: string,
    reservedResourceId: string,
  ): CancelablePromise<ReservedResource> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/reserved_resources/{reservedResourceId}',
      path: {
        'subId': subId,
        'reservedResourceId': reservedResourceId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No reserved resources with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Update a reserved resource
   * @param subId The id of subscription
   * @param reservedResourceId The id of reserved resource
   * @param requestBody Updated reserved resource data
   * @returns ReservedResource Reserved resources updated successfully
   * @throws ApiError
   */
  public patchApiAccountsMgmtV1SubscriptionsReservedResources(
    subId: string,
    reservedResourceId: string,
    requestBody: ReservedResourcePatchRequest,
  ): CancelablePromise<ReservedResource> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/reserved_resources/{reservedResourceId}',
      path: {
        'subId': subId,
        'reservedResourceId': reservedResourceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No reserved resources with specified id exists`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Get subscription role bindings
   * @param subId The id of subscription
   * @param page Page number of record list when record list exceeds specified page size
   * @param size Maximum number of records to return
   * @param search Specifies the search criteria. The syntax of this parameter is
   * similar to the syntax of the _where_ clause of an SQL statement,
   * using the names of the json attributes / column names of the account.
   * For example, in order to retrieve all the accounts with a username starting with `my`:
   *
   * ```sql
   * username like 'my%'
   * ```
   *
   * > **Important Note**:
   * Account Management Service uses **KSUID** as an **ID** field.
   * KSUID contains a timestamp component that allows them to be sorted by generation time.
   * As this field uses an index, please use it to sort by instead of `created_at` field.
   *
   * The search criteria can also be applied on related resource.
   * For example, in order to retrieve all the subscriptions labeled by `foo=bar`,
   *
   * ```sql
   * labels.key = 'foo' and labels.value = 'bar'
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * all the accounts that the user has permission to see will be
   * returned.
   * @param orderBy Specifies the order by criteria. The syntax of this parameter is
   * similar to the syntax of the _order by_ clause of an SQL statement,
   * but using the names of the json attributes / column of the account.
   * For example, in order to retrieve all accounts ordered by username:
   *
   * ```sql
   * username asc
   * ```
   *
   * Or in order to retrieve all accounts ordered by username _and_ first name:
   *
   * ```sql
   * username asc, firstName asc
   * ```
   *
   * If the parameter isn't provided, or if the value is empty, then
   * no explicit ordering will be applied.
   * @param fetchAccounts If true, includes the account reference information in the output. Could slow request response time.
   * @returns SubscriptionRoleBindingList Subscription role bindings found, or none exist
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsRoleBindings(
    subId: string,
    page: number = 1,
    size: number = 100,
    search?: string,
    orderBy?: string,
    fetchAccounts?: boolean,
  ): CancelablePromise<SubscriptionRoleBindingList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/role_bindings',
      path: {
        'subId': subId,
      },
      query: {
        'page': page,
        'size': size,
        'search': search,
        'orderBy': orderBy,
        'fetchAccounts': fetchAccounts,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Create a new subscription role binding
   * @param subId The id of subscription
   * @param requestBody Subscription role binding data
   * @returns SubscriptionRoleBinding Created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SubscriptionsRoleBindings(
    subId: string,
    requestBody: SubscriptionRoleBindingCreateRequest,
  ): CancelablePromise<SubscriptionRoleBinding> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/role_bindings',
      path: {
        'subId': subId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        409: `Subscription role binding already exists`,
        500: `An unexpected error occurred creating the subscription role binding`,
      },
    });
  }
  /**
   * Delete a subscription role binding
   * @param id The id of record
   * @param subId The id of subscription
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SubscriptionsRoleBindings(
    id: string,
    subId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/role_bindings/{id}',
      path: {
        'id': id,
        'subId': subId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No Subscription Role Binding with specified Id is accessible`,
        500: `An unexpected error occurred deleting the Subscription Role Binding`,
      },
    });
  }
  /**
   * Get a Subscription Role Binding by id
   * @param id The id of record
   * @param subId The id of subscription
   * @returns SubscriptionRoleBinding Subscription Role Binding found by id
   * @throws ApiError
   */
  public getApiAccountsMgmtV1SubscriptionsRoleBindings1(
    id: string,
    subId: string,
  ): CancelablePromise<SubscriptionRoleBinding> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/accounts_mgmt/v1/subscriptions/{subId}/role_bindings/{id}',
      path: {
        'id': id,
        'subId': subId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No Subscription Role Binding with the specified id is accessible`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * create a support case for the subscription
   * @param requestBody The contents of the support case to be created
   * @returns SupportCasesCreatedResponse Support case created
   * @throws ApiError
   */
  public postApiAccountsMgmtV1SupportCases(
    requestBody: SupportCasesRequest,
  ): CancelablePromise<SupportCasesCreatedResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/support_cases',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred`,
      },
    });
  }
  /**
   * Delete a support case
   * @param caseId The id of a support case
   * @returns void
   * @throws ApiError
   */
  public deleteApiAccountsMgmtV1SupportCases(
    caseId: string,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/accounts_mgmt/v1/support_cases/{caseId}',
      path: {
        'caseId': caseId,
      },
      errors: {
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        404: `No support case with specified case id on specified subscription id exists`,
        405: `Not allowed to close a case that is already closed`,
        500: `An unexpected error occurred deleting the support case`,
      },
    });
  }
  /**
   * Finds the account owner of the provided token
   * @param requestBody Token authorization data
   * @returns TokenAuthorizationResponse The account belongs to the user with the specified registry credential token
   * @throws ApiError
   */
  public postApiAccountsMgmtV1TokenAuthorization(
    requestBody: TokenAuthorizationRequest,
  ): CancelablePromise<TokenAuthorizationResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/accounts_mgmt/v1/token_authorization',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Registry credential token is invalid`,
        404: `Registry credential token is not found`,
        500: `Other token authorization error`,
      },
    });
  }
  /**
   * Review an account's access to perform an action on a particular resource or resource type
   * @param requestBody Access review data
   * @returns AccessReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1AccessReview(
    requestBody: AccessReview,
  ): CancelablePromise<AccessReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/access_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        422: `Unsupported action, non-existent resource type, or non-existent account`,
        500: `Unexpected error occurred while generating access review`,
      },
    });
  }
  /**
   * Review an account's capabilities
   * @param requestBody Capability review data
   * @returns CapabilityReview Successful review
   * @throws ApiError
   */
  public postApiAuthorizationsV1CapabilityReview(
    requestBody: CapabilityReviewRequest,
  ): CancelablePromise<CapabilityReview> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/capability_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform capability reviews`,
        500: `Unexpected error occurred while generating capability review`,
      },
    });
  }
  /**
   * Determine whether a user is restricted from downloading Red Hat software based on export control compliance.
   *
   * @param requestBody Export control review data
   * @returns ExportControlReview Successful review
   * @throws ApiError
   */
  public postApiAuthorizationsV1ExportControlReview(
    requestBody: ExportControlReviewRequest,
  ): CancelablePromise<ExportControlReview> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/export_control_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred while generating access review`,
      },
    });
  }
  /**
   * Review feature to perform an action on it such as toggle a feature on/off
   * @param requestBody Feature review data
   * @returns FeatureReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1FeatureReview(
    requestBody: FeatureReview,
  ): CancelablePromise<FeatureReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/feature_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred while generating feature review`,
      },
    });
  }
  /**
   * @deprecated
   * Obtain resource ids for resources an account may perform the specified action upon. Resource ids returned as ["*"] is shorthand for all ids.
   * @param requestBody Resource review data
   * @param reduceClusterList If true, When returning a list of cluster_ids/cluster_uuids/subscription_ids, if those are already included in one of the organizations provided in organization_ids, do not include it in the list.
   * @param excludeSubscriptionStatuses A comma-separated list of subscription statuses. Subscriptions with these statuses will be excluded from results. This options is mutually exclusive with includeSubscriptionStatuses.
   * @param includeSubscriptionStatuses A comma-separated list of subscription statuses. Only subscriptions with these statuses will be included into results. This options is mutually exclusive with excludeSubscriptionStatuses.
   * @returns ResourceReview Successful review
   * @throws ApiError
   */
  public postApiAuthorizationsV1ResourceReview(
    requestBody: ResourceReviewRequest,
    reduceClusterList?: boolean,
    excludeSubscriptionStatuses?: string,
    includeSubscriptionStatuses?: string,
  ): CancelablePromise<ResourceReview> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/resource_review',
      query: {
        'reduceClusterList': reduceClusterList,
        'excludeSubscriptionStatuses': excludeSubscriptionStatuses,
        'includeSubscriptionStatuses': includeSubscriptionStatuses,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform resource reviews`,
        422: `Unsupported action or non-existent resource type`,
        500: `Unexpected error occurred while generating access review`,
      },
    });
  }
  /**
   * Review your ability to perform an action on a particular resource or resource type
   * @param requestBody Self access review data
   * @returns AccessReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1SelfAccessReview(
    requestBody: SelfAccessReview,
  ): CancelablePromise<AccessReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/self_access_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        422: `Unsupported action or non-existent resource type`,
        500: `Unexpected error occurred while generating access review`,
      },
    });
  }
  /**
   * Review your ability to toggle a feature
   * @param requestBody Self feature review data
   * @returns FeatureReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1SelfFeatureReview(
    requestBody: SelfFeatureReview,
  ): CancelablePromise<FeatureReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/self_feature_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        500: `Unexpected error occurred while generating feature review`,
      },
    });
  }
  /**
   * Obtain resource ids for resources you may perform the specified action upon. Resource ids returned as ["*"] is shorthand for all ids.
   * @param requestBody Self resource review data
   * @param reduceClusterList If true, When returning a list of cluster_ids/cluster_uuids/subscription_ids, if those are already included in one of the organizations provided in organization_ids, do not include it in the list.
   * @param excludeSubscriptionStatuses A comma-separated list of subscription statuses. Subscriptions with these statuses will be excluded from results. This options is mutually exclusive with includeSubscriptionStatuses.
   * @param includeSubscriptionStatuses A comma-separated list of subscription statuses. Only subscriptions with these statuses will be included into results. This options is mutually exclusive with excludeSubscriptionStatuses.
   * @returns SelfResourceReview Successful review
   * @throws ApiError
   */
  public postApiAuthorizationsV1SelfResourceReview(
    requestBody: SelfResourceReviewRequest,
    reduceClusterList?: boolean,
    excludeSubscriptionStatuses?: string,
    includeSubscriptionStatuses?: string,
  ): CancelablePromise<SelfResourceReview> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/self_resource_review',
      query: {
        'reduceClusterList': reduceClusterList,
        'excludeSubscriptionStatuses': excludeSubscriptionStatuses,
        'includeSubscriptionStatuses': includeSubscriptionStatuses,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform self resource reviews`,
        422: `Unsupported action or non-existent resource type`,
        500: `Unexpected error occurred while generating access review`,
      },
    });
  }
  /**
   * Review your status of Terms
   * @param requestBody Data to check self terms for
   * @returns TermsReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1SelfTermsReview(
    requestBody: SelfTermsReview,
  ): CancelablePromise<TermsReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/self_terms_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        422: `Unsupported action or non-existent resource type`,
        500: `Unexpected error occurred while generating terms review`,
      },
    });
  }
  /**
   * Review an account's status of Terms
   * @param requestBody Data to check terms for
   * @returns TermsReviewResponse Review successfully generated
   * @throws ApiError
   */
  public postApiAuthorizationsV1TermsReview(
    requestBody: TermsReview,
  ): CancelablePromise<TermsReviewResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/authorizations/v1/terms_review',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Validation errors occurred`,
        401: `Auth token is invalid`,
        403: `Unauthorized to perform operation`,
        422: `Unsupported action, non-existent resource type, or non-existent account`,
        500: `Unexpected error occurred while generating terms review`,
      },
    });
  }
}
