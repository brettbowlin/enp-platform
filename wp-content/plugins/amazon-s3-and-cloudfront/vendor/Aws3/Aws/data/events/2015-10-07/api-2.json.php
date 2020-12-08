<?php

// This file was auto-generated from sdk-root/src/data/events/2015-10-07/api-2.json
return ['version' => '2.0', 'metadata' => ['apiVersion' => '2015-10-07', 'endpointPrefix' => 'events', 'jsonVersion' => '1.1', 'protocol' => 'json', 'serviceFullName' => 'Amazon CloudWatch Events', 'serviceId' => 'CloudWatch Events', 'signatureVersion' => 'v4', 'targetPrefix' => 'AWSEvents', 'uid' => 'events-2015-10-07'], 'operations' => ['ActivateEventSource' => ['name' => 'ActivateEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ActivateEventSourceRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'InvalidStateException'], ['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'CreateEventBus' => ['name' => 'CreateEventBus', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'CreateEventBusRequest'], 'output' => ['shape' => 'CreateEventBusResponse'], 'errors' => [['shape' => 'ResourceAlreadyExistsException'], ['shape' => 'ResourceNotFoundException'], ['shape' => 'InvalidStateException'], ['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'LimitExceededException'], ['shape' => 'OperationDisabledException']]], 'CreatePartnerEventSource' => ['name' => 'CreatePartnerEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'CreatePartnerEventSourceRequest'], 'output' => ['shape' => 'CreatePartnerEventSourceResponse'], 'errors' => [['shape' => 'ResourceAlreadyExistsException'], ['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'LimitExceededException'], ['shape' => 'OperationDisabledException']]], 'DeactivateEventSource' => ['name' => 'DeactivateEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DeactivateEventSourceRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'InvalidStateException'], ['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'DeleteEventBus' => ['name' => 'DeleteEventBus', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DeleteEventBusRequest'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException']]], 'DeletePartnerEventSource' => ['name' => 'DeletePartnerEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DeletePartnerEventSourceRequest'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'OperationDisabledException']]], 'DeleteRule' => ['name' => 'DeleteRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DeleteRuleRequest'], 'errors' => [['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException'], ['shape' => 'ResourceNotFoundException']]], 'DescribeEventBus' => ['name' => 'DescribeEventBus', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DescribeEventBusRequest'], 'output' => ['shape' => 'DescribeEventBusResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException']]], 'DescribeEventSource' => ['name' => 'DescribeEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DescribeEventSourceRequest'], 'output' => ['shape' => 'DescribeEventSourceResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'DescribePartnerEventSource' => ['name' => 'DescribePartnerEventSource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DescribePartnerEventSourceRequest'], 'output' => ['shape' => 'DescribePartnerEventSourceResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'DescribeRule' => ['name' => 'DescribeRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DescribeRuleRequest'], 'output' => ['shape' => 'DescribeRuleResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException']]], 'DisableRule' => ['name' => 'DisableRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'DisableRuleRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException']]], 'EnableRule' => ['name' => 'EnableRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'EnableRuleRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException']]], 'ListEventBuses' => ['name' => 'ListEventBuses', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListEventBusesRequest'], 'output' => ['shape' => 'ListEventBusesResponse'], 'errors' => [['shape' => 'InternalException']]], 'ListEventSources' => ['name' => 'ListEventSources', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListEventSourcesRequest'], 'output' => ['shape' => 'ListEventSourcesResponse'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'ListPartnerEventSourceAccounts' => ['name' => 'ListPartnerEventSourceAccounts', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListPartnerEventSourceAccountsRequest'], 'output' => ['shape' => 'ListPartnerEventSourceAccountsResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'ListPartnerEventSources' => ['name' => 'ListPartnerEventSources', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListPartnerEventSourcesRequest'], 'output' => ['shape' => 'ListPartnerEventSourcesResponse'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'ListRuleNamesByTarget' => ['name' => 'ListRuleNamesByTarget', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListRuleNamesByTargetRequest'], 'output' => ['shape' => 'ListRuleNamesByTargetResponse'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'ResourceNotFoundException']]], 'ListRules' => ['name' => 'ListRules', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListRulesRequest'], 'output' => ['shape' => 'ListRulesResponse'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'ResourceNotFoundException']]], 'ListTagsForResource' => ['name' => 'ListTagsForResource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListTagsForResourceRequest'], 'output' => ['shape' => 'ListTagsForResourceResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException']]], 'ListTargetsByRule' => ['name' => 'ListTargetsByRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'ListTargetsByRuleRequest'], 'output' => ['shape' => 'ListTargetsByRuleResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException']]], 'PutEvents' => ['name' => 'PutEvents', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'PutEventsRequest'], 'output' => ['shape' => 'PutEventsResponse'], 'errors' => [['shape' => 'InternalException']]], 'PutPartnerEvents' => ['name' => 'PutPartnerEvents', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'PutPartnerEventsRequest'], 'output' => ['shape' => 'PutPartnerEventsResponse'], 'errors' => [['shape' => 'InternalException'], ['shape' => 'OperationDisabledException']]], 'PutPermission' => ['name' => 'PutPermission', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'PutPermissionRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'PolicyLengthExceededException'], ['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException']]], 'PutRule' => ['name' => 'PutRule', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'PutRuleRequest'], 'output' => ['shape' => 'PutRuleResponse'], 'errors' => [['shape' => 'InvalidEventPatternException'], ['shape' => 'LimitExceededException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException'], ['shape' => 'ResourceNotFoundException']]], 'PutTargets' => ['name' => 'PutTargets', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'PutTargetsRequest'], 'output' => ['shape' => 'PutTargetsResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'LimitExceededException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException']]], 'RemovePermission' => ['name' => 'RemovePermission', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'RemovePermissionRequest'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException']]], 'RemoveTargets' => ['name' => 'RemoveTargets', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'RemoveTargetsRequest'], 'output' => ['shape' => 'RemoveTargetsResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException'], ['shape' => 'InternalException']]], 'TagResource' => ['name' => 'TagResource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'TagResourceRequest'], 'output' => ['shape' => 'TagResourceResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'InternalException'], ['shape' => 'ManagedRuleException']]], 'TestEventPattern' => ['name' => 'TestEventPattern', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'TestEventPatternRequest'], 'output' => ['shape' => 'TestEventPatternResponse'], 'errors' => [['shape' => 'InvalidEventPatternException'], ['shape' => 'InternalException']]], 'UntagResource' => ['name' => 'UntagResource', 'http' => ['method' => 'POST', 'requestUri' => '/'], 'input' => ['shape' => 'UntagResourceRequest'], 'output' => ['shape' => 'UntagResourceResponse'], 'errors' => [['shape' => 'ResourceNotFoundException'], ['shape' => 'InternalException'], ['shape' => 'ConcurrentModificationException'], ['shape' => 'ManagedRuleException']]]], 'shapes' => ['AccountId' => ['type' => 'string', 'max' => 12, 'min' => 12, 'pattern' => '\\d{12}'], 'Action' => ['type' => 'string', 'max' => 64, 'min' => 1, 'pattern' => 'events:[a-zA-Z]+'], 'ActivateEventSourceRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventSourceName']]], 'Arn' => ['type' => 'string', 'max' => 1600, 'min' => 1], 'AssignPublicIp' => ['type' => 'string', 'enum' => ['ENABLED', 'DISABLED']], 'AwsVpcConfiguration' => ['type' => 'structure', 'required' => ['Subnets'], 'members' => ['Subnets' => ['shape' => 'StringList'], 'SecurityGroups' => ['shape' => 'StringList'], 'AssignPublicIp' => ['shape' => 'AssignPublicIp']]], 'BatchArrayProperties' => ['type' => 'structure', 'members' => ['Size' => ['shape' => 'Integer']]], 'BatchParameters' => ['type' => 'structure', 'required' => ['JobDefinition', 'JobName'], 'members' => ['JobDefinition' => ['shape' => 'String'], 'JobName' => ['shape' => 'String'], 'ArrayProperties' => ['shape' => 'BatchArrayProperties'], 'RetryStrategy' => ['shape' => 'BatchRetryStrategy']]], 'BatchRetryStrategy' => ['type' => 'structure', 'members' => ['Attempts' => ['shape' => 'Integer']]], 'Boolean' => ['type' => 'boolean'], 'ConcurrentModificationException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'Condition' => ['type' => 'structure', 'required' => ['Type', 'Key', 'Value'], 'members' => ['Type' => ['shape' => 'String'], 'Key' => ['shape' => 'String'], 'Value' => ['shape' => 'String']]], 'CreateEventBusRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventBusName'], 'EventSourceName' => ['shape' => 'EventSourceName'], 'Tags' => ['shape' => 'TagList']]], 'CreateEventBusResponse' => ['type' => 'structure', 'members' => ['EventBusArn' => ['shape' => 'String']]], 'CreatePartnerEventSourceRequest' => ['type' => 'structure', 'required' => ['Name', 'Account'], 'members' => ['Name' => ['shape' => 'EventSourceName'], 'Account' => ['shape' => 'AccountId']]], 'CreatePartnerEventSourceResponse' => ['type' => 'structure', 'members' => ['EventSourceArn' => ['shape' => 'String']]], 'DeactivateEventSourceRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventSourceName']]], 'DeleteEventBusRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventBusName']]], 'DeletePartnerEventSourceRequest' => ['type' => 'structure', 'required' => ['Name', 'Account'], 'members' => ['Name' => ['shape' => 'EventSourceName'], 'Account' => ['shape' => 'AccountId']]], 'DeleteRuleRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName'], 'Force' => ['shape' => 'Boolean']]], 'DescribeEventBusRequest' => ['type' => 'structure', 'members' => ['Name' => ['shape' => 'EventBusName']]], 'DescribeEventBusResponse' => ['type' => 'structure', 'members' => ['Name' => ['shape' => 'String'], 'Arn' => ['shape' => 'String'], 'Policy' => ['shape' => 'String']]], 'DescribeEventSourceRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventSourceName']]], 'DescribeEventSourceResponse' => ['type' => 'structure', 'members' => ['Arn' => ['shape' => 'String'], 'CreatedBy' => ['shape' => 'String'], 'CreationTime' => ['shape' => 'Timestamp'], 'ExpirationTime' => ['shape' => 'Timestamp'], 'Name' => ['shape' => 'String'], 'State' => ['shape' => 'EventSourceState']]], 'DescribePartnerEventSourceRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'EventSourceName']]], 'DescribePartnerEventSourceResponse' => ['type' => 'structure', 'members' => ['Arn' => ['shape' => 'String'], 'Name' => ['shape' => 'String']]], 'DescribeRuleRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName']]], 'DescribeRuleResponse' => ['type' => 'structure', 'members' => ['Name' => ['shape' => 'RuleName'], 'Arn' => ['shape' => 'RuleArn'], 'EventPattern' => ['shape' => 'EventPattern'], 'ScheduleExpression' => ['shape' => 'ScheduleExpression'], 'State' => ['shape' => 'RuleState'], 'Description' => ['shape' => 'RuleDescription'], 'RoleArn' => ['shape' => 'RoleArn'], 'ManagedBy' => ['shape' => 'ManagedBy'], 'EventBusName' => ['shape' => 'EventBusName']]], 'DisableRuleRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName']]], 'EcsParameters' => ['type' => 'structure', 'required' => ['TaskDefinitionArn'], 'members' => ['TaskDefinitionArn' => ['shape' => 'Arn'], 'TaskCount' => ['shape' => 'LimitMin1'], 'LaunchType' => ['shape' => 'LaunchType'], 'NetworkConfiguration' => ['shape' => 'NetworkConfiguration'], 'PlatformVersion' => ['shape' => 'String'], 'Group' => ['shape' => 'String']]], 'EnableRuleRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName']]], 'ErrorCode' => ['type' => 'string'], 'ErrorMessage' => ['type' => 'string'], 'EventBus' => ['type' => 'structure', 'members' => ['Name' => ['shape' => 'String'], 'Arn' => ['shape' => 'String'], 'Policy' => ['shape' => 'String']]], 'EventBusList' => ['type' => 'list', 'member' => ['shape' => 'EventBus']], 'EventBusName' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => '[/\\.\\-_A-Za-z0-9]+'], 'EventId' => ['type' => 'string'], 'EventPattern' => ['type' => 'string'], 'EventResource' => ['type' => 'string'], 'EventResourceList' => ['type' => 'list', 'member' => ['shape' => 'EventResource']], 'EventSource' => ['type' => 'structure', 'members' => ['Arn' => ['shape' => 'String'], 'CreatedBy' => ['shape' => 'String'], 'CreationTime' => ['shape' => 'Timestamp'], 'ExpirationTime' => ['shape' => 'Timestamp'], 'Name' => ['shape' => 'String'], 'State' => ['shape' => 'EventSourceState']]], 'EventSourceList' => ['type' => 'list', 'member' => ['shape' => 'EventSource']], 'EventSourceName' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => 'aws\\.partner(/[\\.\\-_A-Za-z0-9]+){2,}'], 'EventSourceNamePrefix' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => '[/\\.\\-_A-Za-z0-9]+'], 'EventSourceState' => ['type' => 'string', 'enum' => ['PENDING', 'ACTIVE', 'DELETED']], 'EventTime' => ['type' => 'timestamp'], 'HeaderKey' => ['type' => 'string', 'max' => 512, 'pattern' => '^[!#$%&\'*+-.^_`|~0-9a-zA-Z]+$'], 'HeaderParametersMap' => ['type' => 'map', 'key' => ['shape' => 'HeaderKey'], 'value' => ['shape' => 'HeaderValue']], 'HeaderValue' => ['type' => 'string', 'max' => 512, 'pattern' => '^[ \\t]*[\\x20-\\x7E]+([ \\t]+[\\x20-\\x7E]+)*[ \\t]*$'], 'HttpParameters' => ['type' => 'structure', 'members' => ['PathParameterValues' => ['shape' => 'PathParameterList'], 'HeaderParameters' => ['shape' => 'HeaderParametersMap'], 'QueryStringParameters' => ['shape' => 'QueryStringParametersMap']]], 'InputTransformer' => ['type' => 'structure', 'required' => ['InputTemplate'], 'members' => ['InputPathsMap' => ['shape' => 'TransformerPaths'], 'InputTemplate' => ['shape' => 'TransformerInput']]], 'InputTransformerPathKey' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => '[A-Za-z0-9\\_\\-]+'], 'Integer' => ['type' => 'integer'], 'InternalException' => ['type' => 'structure', 'members' => [], 'exception' => \true, 'fault' => \true], 'InvalidEventPatternException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'InvalidStateException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'KinesisParameters' => ['type' => 'structure', 'required' => ['PartitionKeyPath'], 'members' => ['PartitionKeyPath' => ['shape' => 'TargetPartitionKeyPath']]], 'LaunchType' => ['type' => 'string', 'enum' => ['EC2', 'FARGATE']], 'LimitExceededException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'LimitMax100' => ['type' => 'integer', 'max' => 100, 'min' => 1], 'LimitMin1' => ['type' => 'integer', 'min' => 1], 'ListEventBusesRequest' => ['type' => 'structure', 'members' => ['NamePrefix' => ['shape' => 'EventBusName'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListEventBusesResponse' => ['type' => 'structure', 'members' => ['EventBuses' => ['shape' => 'EventBusList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListEventSourcesRequest' => ['type' => 'structure', 'members' => ['NamePrefix' => ['shape' => 'EventSourceNamePrefix'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListEventSourcesResponse' => ['type' => 'structure', 'members' => ['EventSources' => ['shape' => 'EventSourceList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListPartnerEventSourceAccountsRequest' => ['type' => 'structure', 'required' => ['EventSourceName'], 'members' => ['EventSourceName' => ['shape' => 'EventSourceName'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListPartnerEventSourceAccountsResponse' => ['type' => 'structure', 'members' => ['PartnerEventSourceAccounts' => ['shape' => 'PartnerEventSourceAccountList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListPartnerEventSourcesRequest' => ['type' => 'structure', 'required' => ['NamePrefix'], 'members' => ['NamePrefix' => ['shape' => 'PartnerEventSourceNamePrefix'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListPartnerEventSourcesResponse' => ['type' => 'structure', 'members' => ['PartnerEventSources' => ['shape' => 'PartnerEventSourceList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListRuleNamesByTargetRequest' => ['type' => 'structure', 'required' => ['TargetArn'], 'members' => ['TargetArn' => ['shape' => 'TargetArn'], 'EventBusName' => ['shape' => 'EventBusName'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListRuleNamesByTargetResponse' => ['type' => 'structure', 'members' => ['RuleNames' => ['shape' => 'RuleNameList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListRulesRequest' => ['type' => 'structure', 'members' => ['NamePrefix' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListRulesResponse' => ['type' => 'structure', 'members' => ['Rules' => ['shape' => 'RuleResponseList'], 'NextToken' => ['shape' => 'NextToken']]], 'ListTagsForResourceRequest' => ['type' => 'structure', 'required' => ['ResourceARN'], 'members' => ['ResourceARN' => ['shape' => 'Arn']]], 'ListTagsForResourceResponse' => ['type' => 'structure', 'members' => ['Tags' => ['shape' => 'TagList']]], 'ListTargetsByRuleRequest' => ['type' => 'structure', 'required' => ['Rule'], 'members' => ['Rule' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName'], 'NextToken' => ['shape' => 'NextToken'], 'Limit' => ['shape' => 'LimitMax100']]], 'ListTargetsByRuleResponse' => ['type' => 'structure', 'members' => ['Targets' => ['shape' => 'TargetList'], 'NextToken' => ['shape' => 'NextToken']]], 'ManagedBy' => ['type' => 'string', 'max' => 128, 'min' => 1], 'ManagedRuleException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'MessageGroupId' => ['type' => 'string'], 'NetworkConfiguration' => ['type' => 'structure', 'members' => ['awsvpcConfiguration' => ['shape' => 'AwsVpcConfiguration']]], 'NextToken' => ['type' => 'string', 'max' => 2048, 'min' => 1], 'NonPartnerEventBusName' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => '[\\.\\-_A-Za-z0-9]+'], 'OperationDisabledException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'PartnerEventSource' => ['type' => 'structure', 'members' => ['Arn' => ['shape' => 'String'], 'Name' => ['shape' => 'String']]], 'PartnerEventSourceAccount' => ['type' => 'structure', 'members' => ['Account' => ['shape' => 'AccountId'], 'CreationTime' => ['shape' => 'Timestamp'], 'ExpirationTime' => ['shape' => 'Timestamp'], 'State' => ['shape' => 'EventSourceState']]], 'PartnerEventSourceAccountList' => ['type' => 'list', 'member' => ['shape' => 'PartnerEventSourceAccount']], 'PartnerEventSourceList' => ['type' => 'list', 'member' => ['shape' => 'PartnerEventSource']], 'PartnerEventSourceNamePrefix' => ['type' => 'string', 'max' => 256, 'min' => 1, 'pattern' => 'aws\\.partner/[\\.\\-_A-Za-z0-9]+/[/\\.\\-_A-Za-z0-9]*'], 'PathParameter' => ['type' => 'string', 'pattern' => '^(?!\\s*$).+'], 'PathParameterList' => ['type' => 'list', 'member' => ['shape' => 'PathParameter']], 'PolicyLengthExceededException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'Principal' => ['type' => 'string', 'max' => 12, 'min' => 1, 'pattern' => '(\\d{12}|\\*)'], 'PutEventsRequest' => ['type' => 'structure', 'required' => ['Entries'], 'members' => ['Entries' => ['shape' => 'PutEventsRequestEntryList']]], 'PutEventsRequestEntry' => ['type' => 'structure', 'members' => ['Time' => ['shape' => 'EventTime'], 'Source' => ['shape' => 'String'], 'Resources' => ['shape' => 'EventResourceList'], 'DetailType' => ['shape' => 'String'], 'Detail' => ['shape' => 'String'], 'EventBusName' => ['shape' => 'NonPartnerEventBusName']]], 'PutEventsRequestEntryList' => ['type' => 'list', 'member' => ['shape' => 'PutEventsRequestEntry'], 'max' => 10, 'min' => 1], 'PutEventsResponse' => ['type' => 'structure', 'members' => ['FailedEntryCount' => ['shape' => 'Integer'], 'Entries' => ['shape' => 'PutEventsResultEntryList']]], 'PutEventsResultEntry' => ['type' => 'structure', 'members' => ['EventId' => ['shape' => 'EventId'], 'ErrorCode' => ['shape' => 'ErrorCode'], 'ErrorMessage' => ['shape' => 'ErrorMessage']]], 'PutEventsResultEntryList' => ['type' => 'list', 'member' => ['shape' => 'PutEventsResultEntry']], 'PutPartnerEventsRequest' => ['type' => 'structure', 'required' => ['Entries'], 'members' => ['Entries' => ['shape' => 'PutPartnerEventsRequestEntryList']]], 'PutPartnerEventsRequestEntry' => ['type' => 'structure', 'members' => ['Time' => ['shape' => 'EventTime'], 'Source' => ['shape' => 'EventSourceName'], 'Resources' => ['shape' => 'EventResourceList'], 'DetailType' => ['shape' => 'String'], 'Detail' => ['shape' => 'String']]], 'PutPartnerEventsRequestEntryList' => ['type' => 'list', 'member' => ['shape' => 'PutPartnerEventsRequestEntry'], 'max' => 20, 'min' => 1], 'PutPartnerEventsResponse' => ['type' => 'structure', 'members' => ['FailedEntryCount' => ['shape' => 'Integer'], 'Entries' => ['shape' => 'PutPartnerEventsResultEntryList']]], 'PutPartnerEventsResultEntry' => ['type' => 'structure', 'members' => ['EventId' => ['shape' => 'EventId'], 'ErrorCode' => ['shape' => 'ErrorCode'], 'ErrorMessage' => ['shape' => 'ErrorMessage']]], 'PutPartnerEventsResultEntryList' => ['type' => 'list', 'member' => ['shape' => 'PutPartnerEventsResultEntry']], 'PutPermissionRequest' => ['type' => 'structure', 'required' => ['Action', 'Principal', 'StatementId'], 'members' => ['EventBusName' => ['shape' => 'NonPartnerEventBusName'], 'Action' => ['shape' => 'Action'], 'Principal' => ['shape' => 'Principal'], 'StatementId' => ['shape' => 'StatementId'], 'Condition' => ['shape' => 'Condition']]], 'PutRuleRequest' => ['type' => 'structure', 'required' => ['Name'], 'members' => ['Name' => ['shape' => 'RuleName'], 'ScheduleExpression' => ['shape' => 'ScheduleExpression'], 'EventPattern' => ['shape' => 'EventPattern'], 'State' => ['shape' => 'RuleState'], 'Description' => ['shape' => 'RuleDescription'], 'RoleArn' => ['shape' => 'RoleArn'], 'Tags' => ['shape' => 'TagList'], 'EventBusName' => ['shape' => 'EventBusName']]], 'PutRuleResponse' => ['type' => 'structure', 'members' => ['RuleArn' => ['shape' => 'RuleArn']]], 'PutTargetsRequest' => ['type' => 'structure', 'required' => ['Rule', 'Targets'], 'members' => ['Rule' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName'], 'Targets' => ['shape' => 'TargetList']]], 'PutTargetsResponse' => ['type' => 'structure', 'members' => ['FailedEntryCount' => ['shape' => 'Integer'], 'FailedEntries' => ['shape' => 'PutTargetsResultEntryList']]], 'PutTargetsResultEntry' => ['type' => 'structure', 'members' => ['TargetId' => ['shape' => 'TargetId'], 'ErrorCode' => ['shape' => 'ErrorCode'], 'ErrorMessage' => ['shape' => 'ErrorMessage']]], 'PutTargetsResultEntryList' => ['type' => 'list', 'member' => ['shape' => 'PutTargetsResultEntry']], 'QueryStringKey' => ['type' => 'string', 'max' => 512, 'pattern' => '[^\\x00-\\x1F\\x7F]+'], 'QueryStringParametersMap' => ['type' => 'map', 'key' => ['shape' => 'QueryStringKey'], 'value' => ['shape' => 'QueryStringValue']], 'QueryStringValue' => ['type' => 'string', 'max' => 512, 'pattern' => '[^\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F]+'], 'RemovePermissionRequest' => ['type' => 'structure', 'required' => ['StatementId'], 'members' => ['StatementId' => ['shape' => 'StatementId'], 'EventBusName' => ['shape' => 'NonPartnerEventBusName']]], 'RemoveTargetsRequest' => ['type' => 'structure', 'required' => ['Rule', 'Ids'], 'members' => ['Rule' => ['shape' => 'RuleName'], 'EventBusName' => ['shape' => 'EventBusName'], 'Ids' => ['shape' => 'TargetIdList'], 'Force' => ['shape' => 'Boolean']]], 'RemoveTargetsResponse' => ['type' => 'structure', 'members' => ['FailedEntryCount' => ['shape' => 'Integer'], 'FailedEntries' => ['shape' => 'RemoveTargetsResultEntryList']]], 'RemoveTargetsResultEntry' => ['type' => 'structure', 'members' => ['TargetId' => ['shape' => 'TargetId'], 'ErrorCode' => ['shape' => 'ErrorCode'], 'ErrorMessage' => ['shape' => 'ErrorMessage']]], 'RemoveTargetsResultEntryList' => ['type' => 'list', 'member' => ['shape' => 'RemoveTargetsResultEntry']], 'ResourceAlreadyExistsException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'ResourceNotFoundException' => ['type' => 'structure', 'members' => [], 'exception' => \true], 'RoleArn' => ['type' => 'string', 'max' => 1600, 'min' => 1], 'Rule' => ['type' => 'structure', 'members' => ['Name' => ['shape' => 'RuleName'], 'Arn' => ['shape' => 'RuleArn'], 'EventPattern' => ['shape' => 'EventPattern'], 'State' => ['shape' => 'RuleState'], 'Description' => ['shape' => 'RuleDescription'], 'ScheduleExpression' => ['shape' => 'ScheduleExpression'], 'RoleArn' => ['shape' => 'RoleArn'], 'ManagedBy' => ['shape' => 'ManagedBy'], 'EventBusName' => ['shape' => 'EventBusName']]], 'RuleArn' => ['type' => 'string', 'max' => 1600, 'min' => 1], 'RuleDescription' => ['type' => 'string', 'max' => 512], 'RuleName' => ['type' => 'string', 'max' => 64, 'min' => 1, 'pattern' => '[\\.\\-_A-Za-z0-9]+'], 'RuleNameList' => ['type' => 'list', 'member' => ['shape' => 'RuleName']], 'RuleResponseList' => ['type' => 'list', 'member' => ['shape' => 'Rule']], 'RuleState' => ['type' => 'string', 'enum' => ['ENABLED', 'DISABLED']], 'RunCommandParameters' => ['type' => 'structure', 'required' => ['RunCommandTargets'], 'members' => ['RunCommandTargets' => ['shape' => 'RunCommandTargets']]], 'RunCommandTarget' => ['type' => 'structure', 'required' => ['Key', 'Values'], 'members' => ['Key' => ['shape' => 'RunCommandTargetKey'], 'Values' => ['shape' => 'RunCommandTargetValues']]], 'RunCommandTargetKey' => ['type' => 'string', 'max' => 128, 'min' => 1, 'pattern' => '^[\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*$'], 'RunCommandTargetValue' => ['type' => 'string', 'max' => 256, 'min' => 1], 'RunCommandTargetValues' => ['type' => 'list', 'member' => ['shape' => 'RunCommandTargetValue'], 'max' => 50, 'min' => 1], 'RunCommandTargets' => ['type' => 'list', 'member' => ['shape' => 'RunCommandTarget'], 'max' => 5, 'min' => 1], 'ScheduleExpression' => ['type' => 'string', 'max' => 256], 'SqsParameters' => ['type' => 'structure', 'members' => ['MessageGroupId' => ['shape' => 'MessageGroupId']]], 'StatementId' => ['type' => 'string', 'max' => 64, 'min' => 1, 'pattern' => '[a-zA-Z0-9-_]+'], 'String' => ['type' => 'string'], 'StringList' => ['type' => 'list', 'member' => ['shape' => 'String']], 'Tag' => ['type' => 'structure', 'required' => ['Key', 'Value'], 'members' => ['Key' => ['shape' => 'TagKey'], 'Value' => ['shape' => 'TagValue']]], 'TagKey' => ['type' => 'string', 'max' => 128, 'min' => 1], 'TagKeyList' => ['type' => 'list', 'member' => ['shape' => 'TagKey']], 'TagList' => ['type' => 'list', 'member' => ['shape' => 'Tag']], 'TagResourceRequest' => ['type' => 'structure', 'required' => ['ResourceARN', 'Tags'], 'members' => ['ResourceARN' => ['shape' => 'Arn'], 'Tags' => ['shape' => 'TagList']]], 'TagResourceResponse' => ['type' => 'structure', 'members' => []], 'TagValue' => ['type' => 'string', 'max' => 256, 'min' => 0], 'Target' => ['type' => 'structure', 'required' => ['Id', 'Arn'], 'members' => ['Id' => ['shape' => 'TargetId'], 'Arn' => ['shape' => 'TargetArn'], 'RoleArn' => ['shape' => 'RoleArn'], 'Input' => ['shape' => 'TargetInput'], 'InputPath' => ['shape' => 'TargetInputPath'], 'InputTransformer' => ['shape' => 'InputTransformer'], 'KinesisParameters' => ['shape' => 'KinesisParameters'], 'RunCommandParameters' => ['shape' => 'RunCommandParameters'], 'EcsParameters' => ['shape' => 'EcsParameters'], 'BatchParameters' => ['shape' => 'BatchParameters'], 'SqsParameters' => ['shape' => 'SqsParameters'], 'HttpParameters' => ['shape' => 'HttpParameters']]], 'TargetArn' => ['type' => 'string', 'max' => 1600, 'min' => 1], 'TargetId' => ['type' => 'string', 'max' => 64, 'min' => 1, 'pattern' => '[\\.\\-_A-Za-z0-9]+'], 'TargetIdList' => ['type' => 'list', 'member' => ['shape' => 'TargetId'], 'max' => 100, 'min' => 1], 'TargetInput' => ['type' => 'string', 'max' => 8192], 'TargetInputPath' => ['type' => 'string', 'max' => 256], 'TargetList' => ['type' => 'list', 'member' => ['shape' => 'Target'], 'max' => 100, 'min' => 1], 'TargetPartitionKeyPath' => ['type' => 'string', 'max' => 256], 'TestEventPatternRequest' => ['type' => 'structure', 'required' => ['EventPattern', 'Event'], 'members' => ['EventPattern' => ['shape' => 'EventPattern'], 'Event' => ['shape' => 'String']]], 'TestEventPatternResponse' => ['type' => 'structure', 'members' => ['Result' => ['shape' => 'Boolean']]], 'Timestamp' => ['type' => 'timestamp'], 'TransformerInput' => ['type' => 'string', 'max' => 8192, 'min' => 1], 'TransformerPaths' => ['type' => 'map', 'key' => ['shape' => 'InputTransformerPathKey'], 'value' => ['shape' => 'TargetInputPath'], 'max' => 10], 'UntagResourceRequest' => ['type' => 'structure', 'required' => ['ResourceARN', 'TagKeys'], 'members' => ['ResourceARN' => ['shape' => 'Arn'], 'TagKeys' => ['shape' => 'TagKeyList']]], 'UntagResourceResponse' => ['type' => 'structure', 'members' => []]]];
