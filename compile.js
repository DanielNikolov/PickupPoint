const fs = require('fs-extra');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const cartridges = require('./dw').cartridge;
const configuration = require('./compile-config');
const optionator = require('optionator')({
    options: [{
        option: 'help',
        alias: 'h',
        type: 'Boolean',
        description: 'displays help'
    }, {
        option: 'install',
        alias: 'i',
        type: 'Boolean',
        description: 'install catridges package dependencies'
    }, {
        option: 'build',
        alias: 'b',
        type: 'Boolean',
        description: 'build catridges static resources'
    }]
});
 
var options = optionator.parseArgv(process.argv);

async function installDepencies() {
    if (!cartridges.length) {}

    for (var i = 0, l = cartridges.length; i < l; i++) {
        var cartridge = cartridges[i];
        var config = configuration[cartridge];

        if (!config || !config['build-cmd']) {
            continue;
        }

        console.log('* Installing "' + cartridge + '" Dependencies *')
        await executeCommand(config['path'], config['install-cmd'] || 'npm install');
    }
}


async function compileStatic() {
    if (!cartridges.length) {}

    for (var i = 0, l = cartridges.length; i < l; i++) {
        var cartridge = cartridges[i];
        var config = configuration[cartridge];

        if (!config || !config['build-cmd']) {
            continue;
        }

        console.log('* Handle Cartrdige "' + cartridge + '" *')
        await executeCommand(config['path'], config['build-cmd']);
    }
}

async function executeCommand(path, cmd) {
    try {
        const { 
            stdout, 
            stderr 
        } = await exec('cd ' + path + ' && ' + cmd + ' && cd ..');
        
        stderr && console.error('Error', stderr);
        console.warn('Executuin Info:', stdout);       
    } catch(e) {
        console.log('Unexpected Error ' + e);
    }    
}

options.help && console.log(optionator.generateHelp());
options.install && installDepencies(); 
options.build && compileStatic();