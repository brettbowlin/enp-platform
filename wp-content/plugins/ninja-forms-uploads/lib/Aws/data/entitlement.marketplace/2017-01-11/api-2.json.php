<?php

namespace NF_FU_LIB;

// This file was auto-generated from sdk-root/src/data/entitlement.marketplace/2017-01-11/api-2.json
return ['version' => '2.0', 'metadata' => ['apiVersion' => '2017-01-11', 'endpointPrefix' => 'entitlement.marketplace', 'jsonVersion' => '1.1', 'protocol' => 'json', 'serviceFullName' => 'AWS Marketplace Entitlement Service', 'signatureVersion' => 'v4', 'signingName' => 'aws-marketplace', 'targetPrefix' => 'AWSMPEntitlementService', 'uid' => 'entitlement.marketplace-2017-01-11'], 'operations' => ['GetEntitlements' => ['name' => 'GetEntitlements', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'GetEntitlementsRequest'], 'output' => ['shape' => 'GetEntitlementsResult'], 'errors' => [['shape' => 'InvalidParameterException'], ['shape' => 'ThrottlingException'], ['shape' => 'InternalServiceErrorException']]]], 'shapes' => ['Boolean' => ['type' => 'boolean'], 'Double' => ['type' => 'double'], 'Entitlement' => ['type' => 'structure', 'members' => ['ProductCode' => ['shape' => 'ProductCode'], 'Dimension' => ['shape' => 'NonEmptyString'], 'CustomerIdentifier' => ['shape' => 'NonEmptyString'], 'Value' => ['shape' => 'EntitlementValue'], 'ExpirationDate' => ['shape' => 'Timestamp']]], 'EntitlementList' => ['type' => 'list', 'member' => ['shape' => 'Entitlement'], 'min' => 0], 'EntitlementValue' => ['type' => 'structure', 'members' => ['IntegerValue' => ['shape' => 'Integer'], 'DoubleValue' => ['shape' => 'Double'], 'BooleanValue' => ['shape' => 'Boolean'], 'StringValue' => ['shape' => 'String']]], 'ErrorMessage' => ['type' => 'string'], 'FilterValue' => ['type' => 'string'], 'FilterValueList' => ['type' => 'list', 'member' => ['shape' => 'FilterValue'], 'min' => 1], 'GetEntitlementFilterName' => ['type' => 'string', 'enum' => ['CUSTOMER_IDENTIFIER', 'DIMENSION']], 'GetEntitlementFilters' => ['type' => 'map', 'key' => ['shape' => 'GetEntitlementFilterName'], 'value' => ['shape' => 'FilterValueList']], 'GetEntitlementsRequest' => ['type' => 'structure', 'required' => ['ProductCode'], 'members' => ['ProductCode' => ['shape' => 'ProductCode'], 'Filter' => ['shape' => 'GetEntitlementFilters'], 'NextToken' => ['shape' => 'NonEmptyString'], 'MaxResults' => ['shape' => 'Integer']]], 'GetEntitlementsResult' => ['type' => 'structure', 'members' => ['Entitlements' => ['shape' => 'EntitlementList'], 'NextToken' => ['shape' => 'NonEmptyString']]], 'Integer' => ['type' => 'integer'], 'InternalServiceErrorException' => ['type' => 'structure', 'members' => ['message' => ['shape' => 'ErrorMessage']], 'exception' => \true, 'fault' => \true], 'InvalidParameterException' => ['type' => 'structure', 'members' => ['message' => ['shape' => 'ErrorMessage']], 'exception' => \true], 'NonEmptyString' => ['type' => 'string', 'pattern' => '\\S+'], 'ProductCode' => ['type' => 'string', 'max' => 255, 'min' => 1], 'String' => ['type' => 'string'], 'ThrottlingException' => ['type' => 'structure', 'members' => ['message' => ['shape' => 'ErrorMessage']], 'exception' => \true], 'Timestamp' => ['type' => 'timestamp']]];
