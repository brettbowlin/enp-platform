<?php

namespace NF_FU_VENDOR;

function includeIfExists($file)
{
    if (\file_exists($file)) {
        return include $file;
    }
}
if (!($loader = \NF_FU_VENDOR\includeIfExists(__DIR__ . '/../vendor/autoload.php')) && !($loader = \NF_FU_VENDOR\includeIfExists(__DIR__ . '/../../../autoload.php'))) {
    die('You must set up the project dependencies, run the following commands:' . \PHP_EOL . 'curl -s http://getcomposer.org/installer | php' . \PHP_EOL . 'php composer.phar install' . \PHP_EOL);
}
return $loader;
